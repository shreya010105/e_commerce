import img1 from './Kids_1.jpg';
import img2 from './Kids_2.jpg';
import img3 from './Kids_3.jpg';
import img4 from './Kids_4.jpg';
import img5 from './Kids_5.jpg';
import img6 from './Kids_6.jpg';
import img7 from './Kids_7.jpg';
import img8 from './Kids_8.jpg';
import img9 from './Kids_9.jpg';
import img10 from './Kids_10.jpg';
import img11 from './Kids_11.jpg';
import img12 from './Kids_12.jpg';
import iimg1 from './Men_1.jpg';
import iimg2 from './Men_2.jpg';
import iimg3 from './Men_3.jpg';
import iimg4 from './Men_4.jpg';
import iimg5 from './Men_5.jpg';
import iimg6 from './Men_6.jpg';
import iimg7 from './Men_7.jpg';
import iimg8 from './Men_8.jpg';
import iimg9 from './Men_9.jpg';
import iimg10 from './Men_10.jpg';
import iimg11 from './Men_11.jpg';
import iimg12 from './Men_12.jpg';
import immg1 from './women_1.jpg';
import immg2 from './Women_2.jpg';
import immg3 from './Women_3.jpg';
import immg4 from './Women_4.jpg';
import immg5 from './Women_5.jpg';
import immg6 from './Women_6.jpg';
import immg7 from './Women_7.jpg';
import immg8 from './women_8.jpg';
import immg9 from './Womwn_9.jpg';
import immg10 from './Women_10.jpg';
import immg11 from './Women_11.jpg';
import immg12 from './Women_12.jpg';



let all_products = [
  // --- Women Category ---
  { id: 101, name: "Symbol Premium Women's 'Desk-to-Dinner' Fit & Flare Wrap Dress (Midi Length | Stylish)", image: immg1, new_price: 65.99, old_price: 89.99, category: "women" },
  { id: 102, name: "Nermosa Women Cotton Block Printed Kurta Pant With Dupatta", image: immg2, new_price: 92.00, old_price: 120.00, category: "women" },
  { id: 103, name: "Shasmi Girl's & Women's Solid Color Square Neck, Ruffle-Trimmed Hem Sleeveless, Ruffle Armhole and Casual Dress with Cinched Waist Vacation Outfits Woman (Dress 162)", image: immg3, new_price: 72.50, old_price: 99.99, category: "women" },
  { id: 104, name: "ELLITI Women's Lycra Blend Sweetheart Neckline/V-Neck, Bodycon Dress with Short Puff Sleeve and Mermaid Hem, Calf Length/Midi Length/Knee Length Casual, Office Dress", image: immg4, new_price: 85.00, old_price: 130.00, category: "women" },
  { id: 105, name: "ANNI DESIGNER Women's Rayon Viscose Printed Straight Kurta with Pant & Dupatta", image: immg5, new_price: 55.00, old_price: 79.99, category: "women" },
  { id: 106, name: "GoSriKi Women's Rayon Viscose Embroidered Straight Kurta with Pant & Dupatta", image: immg6, new_price: 69.99, old_price: 95.00, category: "women" },
  { id: 107, name: "LITZO Western Dresses for Women (L-17-18)", image: immg7, new_price: 88.00, old_price: 110.00, category: "women" },
  { id: 108, name: "Sheetal Associates Women Casual Regular Sleeves Crepe Solid Fit and Flare Dress - Pack of 1", image: immg8, new_price: 110.00, old_price: 160.00, category: "women" },
  { id: 109, name: "Sun Fashion And Lifestyle Women's Chanderi Stitched Printed Kurti for Girls Kurta", image: immg9, new_price: 45.99, old_price: 70.00, category: "women" },
  { id: 110, name: "LITZO Women's Georgette A-Line Maxi Dress", image: immg10, new_price: 60.00, old_price: 85.00, category: "women" },
  { id: 111, name: "FIORRA Women's Maroon Poly Crepe A-Line Kurta Set With Dupatta", image: immg11, new_price: 58.99, old_price: 89.00, category: "women" },
  { id: 112, name: "LITZO Western Dresses for Women (L-8 to 10)", image: immg12, new_price: 64.50, old_price: 98.00, category: "women" },

  // --- Men Category ---
  { id: 201, name: "Leriya Fashion T-Shirt for Men || Regular Fit Black Men T-Shirt || || Men Polo T-Shirt || Men Pain T-Shirt", image: iimg1, new_price: 49.99, old_price: 79.99, category: "men" },
  { id: 202, name: "Allen Solly Men's Cotton Regular Fit Polo T-Shirt", image: iimg2, new_price: 120.00, old_price: 160.00, category: "men" },
  { id: 203, name: "The Indian Garage Co Men's Cotton Regular Fit Shirt", image: iimg3, new_price: 39.99, old_price: 65.00, category: "men" },
  { id: 204, name: "Amazon Brand - Symbol Men's Cotton Shirt | Chinese Collar | Casual | Plain | Full Sleeve | Summer - Regular Fit (Available in Plus Size and Combo Packs)", image: iimg4, new_price: 85.00, old_price: 105.00, category: "men" },
  { id: 205, name: "Men's Solid Linen Cotton Shirt | Casual | Plain | Full Sleeve | Summer-Regular Fit| Men Stylish Shirt | Everyday Formal Wear", image: iimg5, new_price: 55.00, old_price: 78.00, category: "men" },
  { id: 206, name: "The Indian Garage Co Men's Cotton Slim Fit Shirt", image: iimg6, new_price: 25.00, old_price: 35.00, category: "men" },
  { id: 207, name: "THE BEAR HOUSE Men's Brown Checked Relaxed Fit Cotton Casual Shirt", image: iimg7, new_price: 60.00, old_price: 90.00, category: "men" },
  { id: 208, name: "Leriya Fashion Textured Shirts for Men||Regular Fit Casual Shirt for Men||Fancy Shirt||Men Full Sleeve Shirt||Plain Shirts for Men", image: iimg8, new_price: 42.00, old_price: 60.00, category: "men" },
  { id: 209, name: "DEELMO Men's Cotton Blend Mandarin Collar Self One Design Full Sleeve Casual Short Kurta", image: iimg9, new_price: 78.99, old_price: 95.00, category: "men" },
  { id: 210, name: "BULLMER Black Trendy Front and Back Printed oversized Round Neck T-shirt for men", image: iimg10, new_price: 48.00, old_price: 68.00, category: "men" },
  { id: 211, name: "BUkkL Oversized T Shirts for Men(Hip Hop t Shirts)", image: iimg11, new_price: 65.00, old_price: 92.00, category: "men" },
  { id: 212, name: "Jump Cuts||Printed Tshirt for Men||Drop Shoulder Tshirt for Men||Round Neck for Men||Cottonblend Oversized T-Shirt", image: iimg12, new_price: 130.00, old_price: 180.00, category: "men" },

  // --- Kid Category ---
  { id: 301, name: "Angel f Studio Baby Girls Midi/Knee Length Frock Dress/Stylish Fancy Kids Clothing/Knee Length Frock for Girls", image: img1, new_price: 40.00, old_price: 55.00, category: "kid" },
  { id: 302, name: "AJ DEZINES Kids Casual Wear Clothing Cotton Shirt Short Set For Boys", image: img2, new_price: 32.00, old_price: 50.00, category: "kid" },
  { id: 303, name: "superminis Girls Denim Solid Color Half Sleeves Dress with Embroidered Pocket (1 Dress)", image: img3, new_price: 38.00, old_price: 60.00, category: "kid" },
  { id: 304, name: "SPAMitude Girls Self Designed Premium Cotton Jacket Jumpsuit Dress | Floral Printed Jumpsuit Jacket Set for Birthday Girl", image: img4, new_price: 28.00, old_price: 39.99, category: "kid" },
  { id: 305, name: "AJ DEZINES Kids Cotton Blend Shirt Shorts Set For Boys", image: img5, new_price: 22.00, old_price: 30.00, category: "kid" },
  { id: 306, name: "Fashion Dream Girl's Georgette Maxi Length Embroidered Dress", image: img6, new_price: 25.00, old_price: 35.00, category: "kid" },
  { id: 307, name: "White Button New Wine Ethnic Long Party Kids Gown for Girls Maxi Dress", image: img7, new_price: 34.00, old_price: 48.00, category: "kid" },
  { id: 308, name: "Kidbea® 100% Linen Shirt & Pant Co-ord Set for Kids | Elegant & Comfortable Summer Wear | Stylish Short-Sleeve Shirt with Bow & Comfy Shorts", image: img8, new_price: 55.00, old_price: 75.00, category: "kid" },
  { id: 309, name: "XEAMUSY Boys Crown Print Short Sleeve Shirt and Navy Shorts Set, White and Blue, Summer Casual Outfit", image: img9, new_price: 60.00, old_price: 90.00, category: "kid" },
  { id: 310, name: "Fashion Dream Girl's Printed Calf Length Dresses | Frock for Girls | Kids Midi Dress for Girls | Western Dress", image: img10, new_price: 44.00, old_price: 58.00, category: "kid" },
  { id: 311, name: "Fashion Dream Girls Maxi Length Dress|Girls Dress|Maxi Dress|Long Dress|Girls Maxi Dress|One Piece Dress|Embroidered Dress", image: img11, new_price: 29.99, old_price: 45.00, category: "kid" },
  { id: 312, name: "Pro-Ethic Style Developer Boy's Cotton Striped Kurta & Pyjama Set", image: img12, new_price: 39.00, old_price: 59.00, category: "kid" },
];

export default all_products;
