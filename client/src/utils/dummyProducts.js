/**
 * Dummy product data keyed by subcategory slug.
 * Slug = subcategory name lowercased, spaces replaced with hyphens, & → and.
 * Each product has: id, name, price, image, tag (optional), sizes (optional)
 */

export const productsBySubcategory = {

  // ─── MEN ───────────────────────────────────────────────────────────────────

  "t-shirts": [
    { id: "ts1", name: "Classic White Oversized Tee", price: 699, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80", tag: "Best Seller", sizes: ["S","M","L","XL"] },
    { id: "ts2", name: "Vintage Washed Graphic Tee", price: 849, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&q=80", tag: "Just In", sizes: ["XS","S","M","L"] },
    { id: "ts3", name: "Striped Summer Tee", price: 599, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80", sizes: ["S","M","L","XL","XXL"] },
    { id: "ts4", name: "Premium Cotton Polo", price: 999, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&q=80", tag: "Popular", sizes: ["S","M","L"] },
  ],

  "casual-shirts": [
    { id: "cs1", name: "Floral Print Casual Shirt", price: 1099, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80", tag: "Trending", sizes: ["S","M","L","XL"] },
    { id: "cs2", name: "Linen Casual Shirt – Beige", price: 1299, image: "https://images.unsplash.com/photo-1602810316693-3667c854239a?w=500&q=80", sizes: ["M","L","XL"] },
    { id: "cs3", name: "Denim Chambray Shirt", price: 1499, image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&q=80", tag: "Just In", sizes: ["S","M","L","XL"] },
    { id: "cs4", name: "Hawaiian Short Sleeve Shirt", price: 949, image: "https://images.unsplash.com/photo-1610384100000-04e91ee86c96?w=500&q=80", sizes: ["S","M","L"] },
  ],

  "formal-shirts": [
    { id: "fs1", name: "White Business Formal Shirt", price: 1599, image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=500&q=80", tag: "Best Seller", sizes: ["S","M","L","XL"] },
    { id: "fs2", name: "Light Blue Oxford Shirt", price: 1799, image: "https://images.unsplash.com/photo-1583744946564-b52d01a7f418?w=500&q=80", sizes: ["M","L","XL"] },
    { id: "fs3", name: "Slim Fit Striped Formal", price: 1399, image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&q=80", tag: "Popular", sizes: ["S","M","L"] },
  ],

  "sweatshirts": [
    { id: "sw1", name: "Washed Crew Neck Sweatshirt", price: 1199, image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&q=80", tag: "Fan Fav", sizes: ["XS","S","M","L","XL"] },
    { id: "sw2", name: "Zip-Up Hoodie – Charcoal", price: 1499, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80", sizes: ["S","M","L","XL"] },
    { id: "sw3", name: "Vintage Pullover Hoodie", price: 1099, image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=500&q=80", tag: "Just In", sizes: ["M","L","XL"] },
  ],

  "sweaters": [
    { id: "set1", name: "Chunky Knit Sweater – Cream", price: 1899, image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&q=80", tag: "Cozy Pick", sizes: ["S","M","L"] },
    { id: "set2", name: "Merino Wool Turtleneck", price: 2299, image: "https://images.unsplash.com/photo-1520975867351-b8e50e44bc8d?w=500&q=80", sizes: ["M","L","XL"] },
    { id: "set3", name: "Fair Isle Sweater", price: 1699, image: "https://images.unsplash.com/photo-1609803384069-19f3f982e1dc?w=500&q=80", tag: "Popular", sizes: ["S","M","L","XL"] },
  ],

  "jackets": [
    { id: "jk1", name: "Vintage Denim Jacket", price: 2899, image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=500&q=80", tag: "Just In", sizes: ["S","M","L","XL"] },
    { id: "jk2", name: "Leather Biker Jacket", price: 3499, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80", tag: "Statement", sizes: ["S","M","L"] },
    { id: "jk3", name: "Puffer Bomber Jacket", price: 2199, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80", sizes: ["M","L","XL"] },
  ],

  "blazers-and-coats": [
    { id: "bl1", name: "Classic Black Blazer", price: 3299, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80", tag: "Best Seller", sizes: ["S","M","L","XL"] },
    { id: "bl2", name: "Herringbone Wool Coat", price: 4599, image: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?w=500&q=80", sizes: ["M","L"] },
    { id: "bl3", name: "Checked Slim Blazer", price: 2999, image: "https://images.unsplash.com/photo-1617867002720-e5e95d6965ce?w=500&q=80", tag: "Popular", sizes: ["S","M","L"] },
  ],

  "suits": [
    { id: "su1", name: "Navy 2-Piece Suit", price: 6999, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80", tag: "Premium", sizes: ["M","L","XL"] },
    { id: "su2", name: "Slim Fit Charcoal Suit", price: 7499, image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500&q=80", sizes: ["S","M","L"] },
  ],

  "rain-jackets": [
    { id: "rj1", name: "Waterproof Windbreaker", price: 2499, image: "https://images.unsplash.com/photo-1544441892-794166f1e3be?w=500&q=80", tag: "Functional", sizes: ["S","M","L","XL"] },
    { id: "rj2", name: "Hooded Rain Jacket – Olive", price: 1999, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80", sizes: ["M","L","XL"] },
  ],

  "kurtas-and-kurta-sets": [
    { id: "kk1", name: "Cotton Straight Kurta – White", price: 1199, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&q=80", tag: "Festival Ready", sizes: ["S","M","L","XL"] },
    { id: "kk2", name: "Printed Kurta Set – Blue", price: 1799, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80", sizes: ["M","L","XL"] },
    { id: "kk3", name: "Silk Blend Kurta – Maroon", price: 2499, image: "https://images.unsplash.com/photo-1617196034183-421b4040d54e?w=500&q=80", tag: "Popular", sizes: ["S","M","L"] },
  ],

  "sherwanis": [
    { id: "sh1", name: "Royal Sherwani – Gold", price: 8999, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80", tag: "Wedding Special", sizes: ["M","L","XL"] },
    { id: "sh2", name: "Indo-Western Sherwani", price: 6499, image: "https://images.unsplash.com/photo-1624532797891-8b19a5c32900?w=500&q=80", sizes: ["S","M","L"] },
  ],

  "nehru-jackets": [
    { id: "nj1", name: "Silk Nehru Jacket – Cream", price: 2299, image: "https://images.unsplash.com/photo-1617196034099-e6c634b06a6b?w=500&q=80", tag: "Ethnic Chic", sizes: ["M","L","XL"] },
    { id: "nj2", name: "Festive Brocade Nehru Jacket", price: 2999, image: "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?w=500&q=80", sizes: ["S","M","L"] },
  ],

  "dhotis": [
    { id: "dh1", name: "Traditional White Dhoti", price: 699, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80", tag: "Ethnic", sizes: ["Free Size"] },
    { id: "dh2", name: "Dhoti Kurta Set – Cream", price: 1299, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&q=80", sizes: ["M","L","XL"] },
  ],

  "jeans": [
    { id: "je1", name: "Classic Blue Slim Jeans", price: 1699, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80", tag: "Best Seller", sizes: ["28","30","32","34","36"] },
    { id: "je2", name: "High-Waisted Straight Jeans", price: 1899, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80", tag: "Just In", sizes: ["26","28","30","32"] },
    { id: "je3", name: "Black Skinny Jeans", price: 1599, image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=500&q=80", sizes: ["28","30","32","34"] },
    { id: "je4", name: "Wide-Leg Denim", price: 1999, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80", tag: "Trending", sizes: ["28","30","32","34"] },
  ],

  "casual-trousers": [
    { id: "ct1", name: "Olive Cargo Trousers", price: 1399, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80", tag: "Popular", sizes: ["S","M","L","XL"] },
    { id: "ct2", name: "Linen Summer Trousers", price: 1199, image: "https://images.unsplash.com/photo-1543087903-1ac2364a7f76?w=500&q=80", sizes: ["M","L","XL"] },
  ],

  "formal-trousers": [
    { id: "ft1", name: "Slim Fit Formal Trousers – Black", price: 1799, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80", tag: "Best Seller", sizes: ["28","30","32","34"] },
    { id: "ft2", name: "Charcoal Grey Formal Pants", price: 1599, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&q=80", sizes: ["30","32","34","36"] },
  ],

  "shorts": [
    { id: "shr1", name: "Athletic Mesh Shorts", price: 699, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=500&q=80", tag: "Gym Ready", sizes: ["S","M","L","XL"] },
    { id: "shr2", name: "Chino Shorts – Khaki", price: 899, image: "https://images.unsplash.com/photo-1527720752067-b32c66c6e375?w=500&q=80", sizes: ["28","30","32","34"] },
  ],

  "track-pants-and-joggers": [
    { id: "tp1", name: "Slim Fit Joggers – Black", price: 999, image: "https://images.unsplash.com/photo-1608228088998-57828365d486?w=500&q=80", tag: "Gym Staple", sizes: ["S","M","L","XL"] },
    { id: "tp2", name: "Tapered Track Pants – Grey", price: 1199, image: "https://images.unsplash.com/photo-1616879022731-c0a3f85f0dc6?w=500&q=80", sizes: ["M","L","XL"] },
  ],

  "briefs-and-trunks": [
    { id: "bt1", name: "Premium Cotton Trunks – Pack of 3", price: 699, image: "https://images.unsplash.com/photo-1618354691779-53dab0c5cbbb?w=500&q=80", tag: "Value Pack", sizes: ["S","M","L","XL"] },
    { id: "bt2", name: "Sports Brief – Multicolour", price: 499, image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&q=80", sizes: ["S","M","L"] },
  ],

  "boxers": [
    { id: "bx1", name: "Cotton Boxers – Plaid Blue", price: 549, image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&q=80", sizes: ["S","M","L","XL"] },
  ],

  "vests": [
    { id: "ve1", name: "Slim Rib Vest – White", price: 399, image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&q=80", sizes: ["S","M","L","XL"] },
  ],

  "sleepwear-and-loungewear": [
    { id: "sl1", name: "Soft Flannel PJ Set", price: 1299, image: "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=500&q=80", tag: "Cozy", sizes: ["S","M","L","XL"] },
    { id: "sl2", name: "Satin Shorts & Tee Set", price: 999, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&q=80", sizes: ["S","M","L"] },
  ],

  "thermals": [
    { id: "th1", name: "Thermal Inner Set – Grey", price: 899, image: "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?w=500&q=80", tag: "Winter Essential", sizes: ["S","M","L","XL"] },
  ],

  "casual-shoes": [
    { id: "shoe1", name: "White Canvas Sneakers", price: 1599, image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&q=80", tag: "Best Seller", sizes: ["7","8","9","10","11"] },
    { id: "shoe2", name: "Tan Suede Loafers", price: 2299, image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80", sizes: ["8","9","10","11"] },
  ],

  "sports-shoes": [
    { id: "sp1", name: "Running Pro Trainers", price: 2999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", tag: "Performance", sizes: ["7","8","9","10","11"] },
    { id: "sp2", name: "Basketball Hi-Tops", price: 3499, image: "https://images.unsplash.com/photo-1608231387042-66d1773d3028?w=500&q=80", sizes: ["8","9","10"] },
  ],

  "formal-shoes": [
    { id: "fsho1", name: "Oxford Brogues – Black", price: 3299, image: "https://images.unsplash.com/photo-1518894781321-630e638d0742?w=500&q=80", tag: "Classic", sizes: ["8","9","10","11"] },
    { id: "fsho2", name: "Derby Shoes – Brown", price: 2999, image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&q=80", sizes: ["8","9","10"] },
  ],

  "sneakers": [
    { id: "sn1", name: "Air Max Style Sneakers", price: 3999, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80", tag: "Hyped", sizes: ["7","8","9","10","11"] },
    { id: "sn2", name: "Retro Colorblock Sneaker", price: 2899, image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80", tag: "Just In", sizes: ["7","8","9","10"] },
    { id: "sn3", name: "Platform White Sneakers", price: 2499, image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=500&q=80", sizes: ["6","7","8","9"] },
  ],

  "sandals-and-floaters": [
    { id: "san1", name: "Leather Strap Sandals", price: 999, image: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=500&q=80", sizes: ["7","8","9","10","11"] },
    { id: "san2", name: "Sports Floaters – Black", price: 1199, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80", sizes: ["8","9","10"] },
  ],

  "flip-flops": [
    { id: "ff1", name: "Classic Rubber Flip Flops", price: 299, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80", sizes: ["7","8","9","10"] },
  ],

  "socks": [
    { id: "so1", name: "Ankle Socks – Pack of 6", price: 499, image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&q=80", tag: "Value", sizes: ["Free Size"] },
  ],

  // ─── WOMEN ─────────────────────────────────────────────────────────────────

  "dresses": [
    { id: "dr1", name: "Retro Floral Midi Dress", price: 2399, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80", tag: "Popular", sizes: ["XS","S","M","L"] },
    { id: "dr2", name: "Off-Shoulder Summer Dress", price: 1899, image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=500&q=80", sizes: ["S","M","L","XL"] },
    { id: "dr3", name: "Black Wrap Mini Dress", price: 1699, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&q=80", tag: "Just In", sizes: ["XS","S","M"] },
    { id: "dr4", name: "Boho Maxi Dress", price: 2799, image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=500&q=80", sizes: ["S","M","L"] },
  ],

  "tops": [
    { id: "to1", name: "Ruffle Crop Top – Blush", price: 899, image: "https://images.unsplash.com/photo-1548549557-dbe9155b75d6?w=500&q=80", tag: "Trending", sizes: ["XS","S","M","L"] },
    { id: "to2", name: "Satin Cami Top – Ivory", price: 1199, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80", sizes: ["S","M","L"] },
    { id: "to3", name: "Linen Peplum Top", price: 1099, image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80", tag: "Chic", sizes: ["XS","S","M","L","XL"] },
  ],

  "jumpsuits": [
    { id: "ju1", name: "Utility Denim Jumpsuit", price: 2599, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&q=80", tag: "Statement", sizes: ["S","M","L"] },
    { id: "ju2", name: "Wide-Leg Linen Jumpsuit", price: 2299, image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500&q=80", sizes: ["XS","S","M","L"] },
  ],

  "kurtas-and-suits": [
    { id: "kw1", name: "Embroidered Salwar Kameez – Pink", price: 2499, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80", tag: "Festival", sizes: ["S","M","L","XL"] },
    { id: "kw2", name: "Anarkali Kurta – Teal", price: 1999, image: "https://images.unsplash.com/photo-1617196034183-421b4040d54e?w=500&q=80", sizes: ["M","L","XL"] },
  ],

  "sarees": [
    { id: "sa1", name: "Silk Kanjivaram Saree – Red", price: 5999, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80", tag: "Wedding", sizes: ["Free Size"] },
    { id: "sa2", name: "Cotton Handloom Saree – Blue", price: 2999, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80", sizes: ["Free Size"] },
  ],

  "lehenga-cholis": [
    { id: "lh1", name: "Bridal Lehenga – Rose Gold", price: 12999, image: "https://images.unsplash.com/photo-1617197881834-a8f48c1d9b74?w=500&q=80", tag: "Bridal", sizes: ["S","M","L"] },
    { id: "lh2", name: "Festive Lehenga – Emerald", price: 7499, image: "https://images.unsplash.com/photo-1598516851400-7dd5b3cc5b5c?w=500&q=80", tag: "Popular", sizes: ["M","L","XL"] },
  ],

  "dupattas": [
    { id: "du1", name: "Chanderi Dupatta – Peach", price: 799, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80", sizes: ["Free Size"] },
    { id: "du2", name: "Printed Chiffon Dupatta", price: 599, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80", sizes: ["Free Size"] },
  ],

  "flats": [
    { id: "fl1", name: "Ballet Flats – Nude", price: 1299, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80", tag: "Classic", sizes: ["5","6","7","8"] },
    { id: "fl2", name: "Embellished Kolhapuri Flats", price: 999, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&q=80", sizes: ["5","6","7","8","9"] },
  ],

  "heels": [
    { id: "he1", name: "Strappy Block Heel Sandals", price: 1899, image: "https://images.unsplash.com/photo-1561861422-a549073e547a?w=500&q=80", tag: "Party", sizes: ["5","6","7","8"] },
    { id: "he2", name: "Stiletto Pumps – Classic Black", price: 2299, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80", tag: "Elegant", sizes: ["5","6","7","8"] },
  ],

  "boots": [
    { id: "bo1", name: "Chelsea Ankle Boots – Brown", price: 3499, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", tag: "Winter", sizes: ["5","6","7","8","9"] },
    { id: "bo2", name: "Knee-High Faux Leather Boots", price: 3999, image: "https://images.unsplash.com/photo-1608231387042-66d1773d3028?w=500&q=80", sizes: ["6","7","8"] },
  ],

  "bras": [
    { id: "bra1", name: "T-Shirt Bra – Nude", price: 799, image: "https://images.unsplash.com/photo-1618354691779-53dab0c5cbbb?w=500&q=80", sizes: ["30B","32B","34C","36C","38D"] },
    { id: "bra2", name: "Sports Bra – High Support", price: 999, image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&q=80", tag: "Gym Ready", sizes: ["XS","S","M","L"] },
  ],

  "briefs": [
    { id: "bri1", name: "Cotton Hipster Briefs – Pack of 3", price: 699, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&q=80", tag: "Value", sizes: ["S","M","L","XL"] },
  ],

  "shapewear": [
    { id: "shape1", name: "Body Shaper Shorts", price: 1299, image: "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=500&q=80", sizes: ["S","M","L","XL"] },
  ],

  "handbags": [
    { id: "hb1", name: "Leather Crossbody Bag – Tan", price: 3349, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80", tag: "Best Seller", sizes: ["One Size"] },
    { id: "hb2", name: "Mini Quilted Chain Bag", price: 2499, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80", tag: "Trending", sizes: ["One Size"] },
    { id: "hb3", name: "Woven Straw Tote", price: 1599, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=80", sizes: ["One Size"] },
  ],

  "sunglasses": [
    { id: "sg1", name: "Cat-Eye Sunglasses – Black", price: 1299, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80", tag: "Trending", sizes: ["One Size"] },
    { id: "sg2", name: "Round Retro Frames", price: 999, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80", sizes: ["One Size"] },
  ],

  "watches": [
    { id: "wa1", name: "Rose Gold Mesh Watch", price: 3299, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80", tag: "Premium", sizes: ["One Size"] },
    { id: "wa2", name: "Minimalist White Dial Watch", price: 2499, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80", tag: "Bestseller", sizes: ["One Size"] },
  ],

  "jewellery": [
    { id: "je_1", name: "Gold Statement Earrings", price: 799, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80", tag: "Popular", sizes: ["One Size"] },
    { id: "je_2", name: "Layered Boho Necklace", price: 1199, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80", sizes: ["One Size"] },
  ],

  "hair-accessories": [
    { id: "ha1", name: "Satin Scrunchie Set – Pastels", price: 299, image: "https://images.unsplash.com/photo-1512207730549-f8cbb0576093?w=500&q=80", sizes: ["One Size"] },
    { id: "ha2", name: "Pearl Hair Clips – Set of 4", price: 499, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80", sizes: ["One Size"] },
  ],

  "makeup": [
    { id: "mk1", name: "Matte Lip Collection – 5 Shades", price: 1499, image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&q=80", tag: "Popular", sizes: ["One Size"] },
    { id: "mk2", name: "Eyeshadow Palette – Warm Nudes", price: 1299, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&q=80", sizes: ["One Size"] },
  ],

  "skincare": [
    { id: "sk1", name: "Vitamin C Brightening Serum", price: 1799, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80", tag: "Best Seller", sizes: ["One Size"] },
    { id: "sk2", name: "Niacinamide Moisturizer", price: 1199, image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&q=80", sizes: ["One Size"] },
  ],

  "haircare": [
    { id: "hc1", name: "Argan Oil Hair Mask", price: 999, image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=500&q=80", sizes: ["One Size"] },
    { id: "hc2", name: "Scalp Treatment Serum", price: 1299, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80", sizes: ["One Size"] },
  ],

  "fragrances": [
    { id: "fr1", name: "Floral Rose Eau de Parfum 50ml", price: 2499, image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=500&q=80", tag: "Signature", sizes: ["50ml","100ml"] },
    { id: "fr2", name: "Woody Oud Perfume – Unisex", price: 2999, image: "https://images.unsplash.com/photo-1541391429-4f329d96e1bf?w=500&q=80", sizes: ["50ml","100ml"] },
  ],

  "trousers-and-capris": [
    { id: "tc1", name: "High-Rise Tailored Trousers", price: 1799, image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500&q=80", tag: "Work Chic", sizes: ["S","M","L","XL"] },
    { id: "tc2", name: "Cropped Capri Pants – White", price: 1299, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80", sizes: ["XS","S","M","L"] },
  ],

  "shorts-and-skirts": [
    { id: "ss1", name: "Mini Denim Skirt – Distressed", price: 1099, image: "https://images.unsplash.com/photo-1583496661160-fb5218e47411?w=500&q=80", tag: "Trending", sizes: ["XS","S","M","L"] },
    { id: "ss2", name: "Floral Wrap Skirt", price: 999, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80", sizes: ["S","M","L"] },
    { id: "ss3", name: "Athletic Biker Shorts", price: 799, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&q=80", tag: "Gym", sizes: ["XS","S","M","L"] },
  ],

  // ─── KIDS ──────────────────────────────────────────────────────────────────

  "boys-t-shirts": [
    { id: "bt_1", name: "Boys Superhero Graphic Tee", price: 499, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&q=80", tag: "Kids' Fav", sizes: ["4-5Y","6-7Y","8-9Y","10-11Y"] },
    { id: "bt_2", name: "Boys Striped Polo Tee", price: 599, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80", sizes: ["4-5Y","6-7Y","8-9Y"] },
  ],

  // Reuse "shirts" key for boys
  "shirts": [
    { id: "bs1", name: "Boys Formal Shirt – White", price: 799, image: "https://images.unsplash.com/photo-1583744946564-b52d01a7f418?w=500&q=80", sizes: ["4-5Y","6-7Y","8-9Y","10-11Y"] },
    { id: "bs2", name: "Boys Checked Flannel Shirt", price: 699, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80", sizes: ["6-7Y","8-9Y","10-11Y"] },
  ],

  "trousers": [
    { id: "tr1", name: "Boys Slim Fit Trousers – Navy", price: 799, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80", sizes: ["4-5Y","6-7Y","8-9Y","10-11Y"] },
  ],

  "ethnic-wear": [
    { id: "ew1", name: "Kids Kurta Pajama Set – Yellow", price: 999, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&q=80", tag: "Festival", sizes: ["4-5Y","6-7Y","8-9Y","10-11Y"] },
    { id: "ew2", name: "Girls Salwar Kameez – Pink", price: 1199, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80", sizes: ["4-5Y","6-7Y","8-9Y"] },
  ],

  "girls-dresses": [
    { id: "gd1", name: "Floral Frock – Lavender", price: 899, image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=500&q=80", tag: "Adorable", sizes: ["4-5Y","6-7Y","8-9Y"] },
    { id: "gd2", name: "Tutu Party Dress", price: 1199, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&q=80", tag: "Party", sizes: ["2-3Y","4-5Y","6-7Y"] },
  ],

  "girls-tops": [
    { id: "gt1", name: "Girls Butterfly Print Top", price: 499, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80", sizes: ["4-5Y","6-7Y","8-9Y","10-11Y"] },
  ],

  "girls-jeans": [
    { id: "gje1", name: "Girls Skinny Jeans – Blue", price: 899, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80", sizes: ["4-5Y","6-7Y","8-9Y","10-11Y"] },
  ],

  "skirts": [
    { id: "ski1", name: "Girls Pleated Skirt – Pink", price: 699, image: "https://images.unsplash.com/photo-1583496661160-fb5218e47411?w=500&q=80", sizes: ["4-5Y","6-7Y","8-9Y"] },
    { id: "ski2", name: "Denim A-Line Skirt", price: 799, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80", sizes: ["6-7Y","8-9Y","10-11Y"] },
  ],

  "school-shoes": [
    { id: "scho1", name: "Black Leather School Shoes", price: 1299, image: "https://images.unsplash.com/photo-1518894781321-630e638d0742?w=500&q=80", tag: "Back to School", sizes: ["3","4","5","6","7"] },
  ],

  // ─── GENZ ──────────────────────────────────────────────────────────────────

  "oversized-tees": [
    { id: "ot1", name: "Washed Oversized Graphic Tee", price: 849, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&q=80", tag: "Viral", sizes: ["S","M","L","XL"] },
    { id: "ot2", name: "Drop Shoulder Plain Tee – Black", price: 699, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80", sizes: ["XS","S","M","L","XL"] },
    { id: "ot3", name: "Tie-Dye Oversized Tee", price: 949, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80", tag: "Trending", sizes: ["S","M","L"] },
  ],

  "cargo-pants": [
    { id: "cp1", name: "Baggy Cargo Pants – Khaki", price: 1699, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80", tag: "Y2K", sizes: ["S","M","L","XL"] },
    { id: "cp2", name: "Wide Leg Cargo – Black", price: 1899, image: "https://images.unsplash.com/photo-1543087903-1ac2364a7f76?w=500&q=80", sizes: ["XS","S","M","L"] },
  ],

  "streetwear": [
    { id: "stw1", name: "Vintage Cropped Bomber Jacket", price: 2299, image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=500&q=80", tag: "Streetwear", sizes: ["S","M","L","XL"] },
    { id: "stw2", name: "Hypebeast Track Jacket", price: 1999, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80", sizes: ["M","L","XL"] },
    { id: "stw3", name: "Balaclava Printed Crewneck", price: 1599, image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&q=80", tag: "Just In", sizes: ["S","M","L"] },
  ],

  "co-ord-sets": [
    { id: "co1", name: "Matching Top & Shorts Set – Sage", price: 1999, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&q=80", tag: "Co-ord Magic", sizes: ["XS","S","M","L"] },
    { id: "co2", name: "Printed Crop Jacket & Pants", price: 2399, image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500&q=80", sizes: ["S","M","L"] },
  ],

  "graphic-tees": [
    { id: "gt_1", name: "Retro Band Graphic Tee", price: 849, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&q=80", tag: "Fan Fav", sizes: ["XS","S","M","L","XL"] },
    { id: "gt_2", name: "Anime Print Oversized Tee", price: 949, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80", tag: "Viral", sizes: ["S","M","L"] },
    { id: "gt_3", name: "Earth Tone Abstract Graphic", price: 799, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80", sizes: ["S","M","L","XL"] },
  ],

  "bucket-hats": [
    { id: "bkh1", name: "Vintage Bucket Hat – Beige", price: 699, image: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=500&q=80", tag: "Y2K", sizes: ["One Size"] },
    { id: "bkh2", name: "Camo Bucket Hat", price: 749, image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&q=80", sizes: ["One Size"] },
  ],

  "chunky-sneakers": [
    { id: "chs1", name: "Platform Chunky Dad Shoes", price: 2999, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80", tag: "Hyped", sizes: ["6","7","8","9","10","11"] },
    { id: "chs2", name: "Triple White Chunky Sneaker", price: 3499, image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=500&q=80", sizes: ["7","8","9","10"] },
  ],

  "chains": [
    { id: "ch1", name: "Thick Cuban Link Chain – Silver", price: 1299, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80", tag: "Must Have", sizes: ["One Size"] },
    { id: "ch2", name: "Gold Layered Necklace", price: 999, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80", sizes: ["One Size"] },
  ],

  "tote-bags": [
    { id: "tb1", name: "Canvas Tote – Keep It Real", price: 899, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=80", tag: "Go-To", sizes: ["One Size"] },
    { id: "tb2", name: "Oversized Patchwork Tote", price: 1199, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80", sizes: ["One Size"] },
  ],

  "bewakoof": [
    { id: "bew1", name: "Bewakoof Graphic Hoodie", price: 1199, image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&q=80", tag: "Brand Drop", sizes: ["S","M","L","XL"] },
    { id: "bew2", name: "Bewakoof Slogan Tee", price: 699, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&q=80", sizes: ["XS","S","M","L"] },
  ],

  "h&m": [
    { id: "hm1", name: "H&M Oversized Blazer", price: 2499, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80", tag: "H&M", sizes: ["XS","S","M","L","XL"] },
    { id: "hm2", name: "H&M Ribbed Midi Dress", price: 1799, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80", sizes: ["S","M","L"] },
  ],

  "zara": [
    { id: "za1", name: "Zara Wide Leg Trousers – Cream", price: 3299, image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500&q=80", tag: "Zara", sizes: ["XS","S","M","L"] },
    { id: "za2", name: "Zara Structured Mini Bag", price: 2699, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80", tag: "Zara", sizes: ["One Size"] },
  ],

  "urbanic": [
    { id: "ur1", name: "Urbanic Ruched Midi Skirt", price: 1499, image: "https://images.unsplash.com/photo-1583496661160-fb5218e47411?w=500&q=80", tag: "Urbanic", sizes: ["XS","S","M","L"] },
    { id: "ur2", name: "Urbanic Cutout Top – White", price: 1099, image: "https://images.unsplash.com/photo-1548549557-dbe9155b75d6?w=500&q=80", sizes: ["XS","S","M","L"] },
  ],

};

/** Helper: convert a display label to a URL slug */
export function toSlug(label) {
  return label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Get products for a given slug (falls back to empty array) */
export function getProductsBySlug(slug) {
  return productsBySubcategory[slug] || [];
}
