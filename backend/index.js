const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://e-commerce-theta-vert.vercel.app/",
        "https://admin-ecommerce-chi.vercel.app/"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// Ensure upload directory exists
const uploadDir = './upload/images';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// MongoDB connection
mongoose.connect(
    'mongodb+srv://ecommerce:ecommerce@cluster0.yefelpc.mongodb.net/e-commerce?retryWrites=true&w=majority'
).then(() => {
    console.log('MongoDB connected successfully');
}).catch((error) => {
    console.error('MongoDB connection error:', error.message);
});

// Basic API
app.get('/', (req, res) => {
    res.send("Express app is running");
});

// Image storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});
const upload = multer({ storage: storage });

// Serve uploaded images
app.use('/images', express.static('upload/images'));

// Image upload API
app.post('/upload', upload.single('product'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: 0, message: 'No file uploaded' });
    }

    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// schema for creating products
const Product = mongoose.model("product",{
    id:{
        type:Number,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    new_price:{
        type:Number,
        require:true,
    },
    old_price:{
        type:Number,
        require:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})

// creating api for adding product
app.post('/addProduct',async(req,res)=>{
    let products = await Product.find({}); 
    let id;
    if(products.length > 0){
        id = products[products.length-1].id + 1;
    }else{
        id=1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name,
    })  
})

//creating api for deleting products
app.post('/removeProduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("deleted success");

    res.json({
        success:true,
        name:req.body.name
    })
    
})

// creating api for getting all products
app.get('/allProducts',async(req,res)=>{
    let products = await Product.find({}); //we get all product in products array
    console.log("all products fetched");
    res.send(products);
    
})

// schema creating for user model
const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }

})

// creating endpoint for registering user

app.post('/signup',async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if all fields are filled
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if user with same email already exists
    const existingUser = await Users.findOne({ email:email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists",
      });
    }

     // Create default cart
    const cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user
 const user = await Users.create({
  name,
  email,
  password: hashedPassword,
  cartData: cart,
});

const data = { user: { id: user.id } };
const token = jwt.sign(data, 'secret_ecom');

res.status(200).json({
  success: true,
  message: "User registered successfully",
  token
});
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});  

//creating endpoint for user login
app.post('/login',async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
    } 

    // check if user exists
    const user = await Users.findOne({ email:email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // check password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(404).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const data = {
      user:{
        id:user.id
      }
    }
    // generate JWT token
    const token = jwt.sign(data, 'secret_ecom');

    // success response
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
    }); 
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// creating endpoint for new collections
app.get('/newCollections',async(req,res)=>{
  let products = await Product.find({});
  let newCollections = products.slice(1).slice(-8); //get recently added 8 products
  console.log("newcollection fetched");
  res.send(newCollections);
  
})

// creating popular in women endpoint
app.get('/popularInWomen',async(req,res)=>{
  let products = await Product.find({category:"women"});
  let popularInWomen = products.slice(0,4);
  console.log("popular in women fetched");
  res.send(popularInWomen)
  
})
//creating middleware to fetch user
const fetchUser = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
     res.status(401).send({ errors: "Access Denied: No token provided" });
  }
  else{
    try {
    const data = jwt.verify(token, 'secret_ecom');
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ errors: "Invalid token" });
  }
  }
  
};



// creating endpoint to add product in cart
app.post('/addtocart', fetchUser, async (req, res) => {
  console.log("Added",req.body.itemId);
  let userData = await Users.findOne({_id:req.user.id});
  userData.cartData[req.body.itemId] += 1;
  
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
  res.send("Added")
  
});



 // creating endpoint to remove cartdata
 app.post('/removefromcart', fetchUser ,async(req,res)=>{
  console.log("removed",req.body.itemId);
  let userData = await Users.findOne({_id:req.user.id});
  if(userData.cartData[req.body.itemId]>0)
  userData.cartData[req.body.itemId] -= 1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
  res.send("Removed")
  
 })

 // to get cart data after refresh
 app.post('/getcart',fetchUser,async(req,res)=>{
  console.log("getcart");
  let userData = await Users.findOne({_id:req.user.id});
  res.json(userData.cartData);
  
 })
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
