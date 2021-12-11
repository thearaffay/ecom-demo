import Product from "../models/product";

const PRODUCTS = [
    new Product
        (
            "1",
            "u1",
            "Food Grains",
            "Atta",
            "Aashirvaad - Atta - 5kg",
            "Aashirvaad Whole Wheat Atta has 0% maida and 100% atta. This means you serve soft, fluffy rotis and a whole lot of health and happiness.",
            212.00,
            "https://www.bigbasket.com/media/uploads/p/xxl/126903_8-aashirvaad-atta-whole-wheat.jpg",
        ),
    new Product
        (
            "2",
            "u1",
            "Food Grains",
            "Maida",
            "Swastik Pure & Tasty - Maida - 500g",
            "Maida is a wonderful mix of soft and rigid wheat. It is considered as bleached flour that contains less protein compare to unbleached. Bleached flour includes less protein than unbleached, and is finest for pie crusts, rapid breads, cookies, pancakes and waffles. It is chemical free.",
            185.00,
            "https://m.media-amazon.com/images/I/61P+hz01tML._SL1151_.jpg",
        ),
    new Product
        (
            "3",
            "u2",
            "Food Grains",
            "Besan",
            "Fortune - Besan - 500g",
            "Gram flour or besan is a pulse flour made from ground yellow gram lentil. It is a staple ingredient in the cuisine of the Indian. Besan or gram flour contains healthy unsaturated fats & are a good source of fiber. Ideal for mixing with flour for rotis & parathas or indulging your sweet tooth.",
            46.00,
            "https://m.media-amazon.com/images/I/81JmTiQA68L._SL1500_.jpg",
        ),
    new Product
        (
            "4",
            "u2",
            "Food Grains",
            "Basmati Rice",
            "Kohinoor Super Silver - Basmati Rice - 5kg",
            "Basmati Rice is the long grain, sweet-smelling rice presents you a big time relish able delight to yourselves. It is completely apt for using in preparing numerous rice items.",
            875.00,
            "https://m.media-amazon.com/images/I/61Yy2DJyGGL._SL1000_.jpg",
        ),
    new Product
        (
            "5",
            "u1",
            "Food Grains",
            "Raw Rice",
            "India Gate - Sona Mosoori Raw Rice - 5kg",
            "Sona Masoori rice is known to have small percentages of protein while being low in fat and cholesterol.",
            350.00,
            "https://cdn.prideofpunjab.com.au/wp-content/uploads/2020/01/13195959/IMG_E8848.jpeg",
        ),
    new Product
        (
            "6",
            "u1",
            "Food Grains",
            "Steam Rice",
            "Ambati's - Steam Rice - 25kg",
            "A true taste of rice awaits you.",
            960.00,
            "https://lh3.googleusercontent.com/NRjIAVK81xe8w9WZvGn_v1RZu075Qr-XgXW0HM4DNY_QNdZ95paG6ixO-bFf3c9WfDYZOTcIyv77l8RZ=w768-h768-n-o-v1",
        ),
    new Product
        (
            "7",
            "u1",
            "Food Grains",
            "Toor Dal",
            "Tata Sampann - Toor Dal - 1kg",
            "Toor Dal is not only delicious but also has nutritional value. It contains a good amount of fibre. Toor dal is an excellent source of nutrients and plant protein, and it also contains dietary fibre. In essence, legumes are nutritional though they represent a low-fat and low-cholesterol alternative. Legumes such as toor dal provide essential nutrients, fibre and protein for vegetarians. Toor dal rich in protein, vitamins and iron is often served with rich spices over rice and Rotis.",
            138.00,
            "https://m.media-amazon.com/images/I/71hFwEGKyZL._SL1000_.jpg",
        ),
    new Product
        (
            "8",
            "u1",
            "Food Grains",
            "Channa Dal",
            "Tata Sampann - Channa Dal - 500g",
            "Organic Channa Dal plays a vital part while accompanying rice or rotis. It is one of the best dals to improve taste and purity after preparing it. The finest thing about Channa Dal is multiple dishes can be completed out of it. This Dal consists of a number of health advantages; Bengal gram dal has a nutty flavour, and is a rich supply of protein. It also has a low glycemic index. This is cultivated and processed without the use of pesticides, artificial fertilizers or chemicals.",
            52.00,
            "https://www.jiomart.com/images/product/original/490830943/tata-sampann-high-protein-unpolished-chana-dal-500-g-0-20210728.jpg",
        ),
    new Product
        (
            "9",
            "u1",
            "Food Grains",
            "Moong Dal",
            "Tata Sampann - Moong Dal - 500g",
            "Moong Dal is a healthy choice. It has high fiber content and a negligible amount of cholesterol and fats. Moong Dal is full of iron, calcium and protein. Along with these nutrients, a bowl of Moong Dal also contains dietary fibers, sodium and all the other nutrients that are required for your body.",
            79.00,
            "https://images-na.ssl-images-amazon.com/images/I/61jYNkhRJBL.jpg",
        ),
    new Product
        (
            "10",
            "u1",
            "Oils",
            "Belnded Cooking Oil",
            "Saffola Total - Tasty Refined Cooking oil - 5L",
            "We understand the staying fit is important for you and your family. So when it comes to food, it important that you make the right choices to ensure your efforts are fruitful. Oil is an essential ingredient in your meals.",
            1079.00,
            "https://www.bigbasket.com/media/uploads/p/l/100554_6-saffola-tasty-refined-cooking-oil-blended-rice-bran-corn-oil-pro-fitness-conscious.jpg",
        ),
    new Product
        (
            "11",
            "u1",
            "Oils",
            "Sunflower Oil",
            "Aadhar Refined - Sunflower Oil - 5L",
            "The Sunpure refined sunflower oil is non-volatile oil extracted from sunflower seeds.",
            799.00,
            "https://www.bigbasket.com/media/uploads/p/xxl/274120_3-sunpure-refined-sunflower-oil.jpg",
        ),
    new Product
        (
            '12',
            "u1",
            "Oils",
            "Soya Oil",
            "Fortune - Soya Bean Oil - 5L",
            "Fortune Soya Health Oil is processed with next-generation High Absorbent Refining Technology (H.A.R.T). So, your everyday meals not only taste better but also make your Bones stronger and your Heart and Eyes healthier.",
            960.00,
            "https://m.media-amazon.com/images/I/417VoCGPr7L.jpg",
        ),
    new Product
        (
            "13",
            "u2",
            "Oils",
            "Musturd Oil",
            "Fortune - Mustard Oil - 5L",
            "Fortune Fortune Premium Kachi Ghani Pure Mustard Oil",
            1000.00,
            "https://skumarstore.com/508-large_default/fortune-kachi-ghani-pure-mustard-oil.jpg",
        ),
    new Product
        (
            "14",
            "u2",
            "Oils",
            "Olive Oil",
            "Del Mont - Olive Oil - 5L",
            "From a special selection of the highest quality olives cultivated under the Mediterranean sun, with all their original taste and aroma. Gives the captivating flavour of olives, ideal for salads and dressings.",
            2499.00,
            "https://www.bigbasket.com/media/uploads/p/l/1212201_1-borges-extra-virgin-olive-oil.jpg",
        ),
    new Product
        (
            "15",
            "u2",
            "Masala & Spices",
            "Powdered Spices",
            "Eastern - Turmeric Powder - 100g",
            "Eastern Turmeric Powder lends a superb, woody fragrance and flavour. It is normally used in almost all stews, curries, snacks, soups, masalas, seasonings and pickles. This turmeric powder also possesses rich healing properties.",
            30.00,
            "https://m.media-amazon.com/images/I/71BkDT4RjQL._SL1500_.jpg",
        ),
    new Product
        (
            "16",
            "u2",
            "Masala & Spices",
            "Blended Masalas",
            "MDH - Garam Masala - 100g",
            "MDH has been a pioneer when it comes to packages spices and concoctions of the same that can be used for Indian cuisine. Its various spice mixes are well known all around the world. Purity, high quality, aroma and taste all come together in the various products that MDH offers, and this Garam Masala is no different!",
            60.00,
            "https://m.media-amazon.com/images/I/715CjOjKUPL._SL1500_.jpg",
        ),
    new Product
        (
            "17",
            "u2",
            "Masala & Spices",
            "Ginger Garlic Paste",
            "Dabur Hommade - Ginger Garlic Paste - 100g",
            "Dabur Hommade Ginger Garlic paste is made from freshest garlic paste and ground ginger paste in one hygienically sealed bag. The time one spends peeling, grinding and pasting these spices can now be saved with Dabur Hommade’s Ginger Garlic Paste. Every ingredient used in our ginger garlic paste recipe is fresh – right from the ginger that is sourced from North-Eastern states to the garlic that is sourced from Gujarat. Our Hommade range is an inspiration for seasoned cooks, experimental folks who like to try cooking and aspiring chefs-to-be.",
            23.00,
            "https://m.media-amazon.com/images/I/618HQ8Li4ES._SL1500_.jpg",
        ),
    new Product
        (
            "18",
            "u2",
            "Dry Fruits",
            "Almonds",
            "Naturoz Popular California Almonds - Alomonds - 1kg",
            "Best quality product from the house of Naturoz, sourced from California USA, • Delicious crispy taste, best as a snack,",
            995.00,
            "https://naturoz.in/wp-content/uploads/2021/06/9154.png",
        ),
    new Product
        (
            "19",
            "u3",
            "Dry Fruits",
            "Raisins",
            "Sun Maid - Raisins - 1kg",
            "Raisins or kismis are a wholesome addition to your diet. The organic kismis are a preserved and dried version of grapes.",
            1199.00,
            "https://i5.walmartimages.com/asr/f2a6747b-1d6e-468d-b4f9-dd1029926fa2.e2d08e101b3431eaa3ee272f397adb71.jpeg",
        ),
    new Product
        (
            "20",
            "u3",
            "Dry Fruits",
            "Cashews",
            "Happlio - Cashew - 500g",
            "Cashews are a kidney-shaped seed sourced from the cashew tree. Cashews provide an excellent source of protein. Cashews are cholesterol-free and a great supply of antioxidants that will keep you away from heart diseases. The fat content in cashew nuts is low.",
            519.00,
            "https://m.media-amazon.com/images/I/71q8I65FFUL._SL1500_.jpg",
        ),
    new Product
        (
            "21",
            "u3",
            "Dry Fruits",
            "Mukhwas",
            "Zaika Kashmiri - Mukhwas - 250g",
            "Zaik Kashmiri Mukhwas Swaad ka Mazza",
            288.00,
            "https://zaikafoods.ca/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/a/pan001.jpg",
        ),
    new Product
        (
            "22",
            "u3",
            "Dairy",
            "Milk",
            "Amul Gold - Homogenised Standardised Milk - 1L",
            "Amul Milk is the most hygienic liquid milk available in the market",
            67.00,
            "https://www.jiomart.com/images/product/original/490001545/amul-gold-homogenised-standardised-long-life-milk-1-l-tetra-pak-0-20210924.jpg",
        ),
    new Product
        (
            "23",
            "u3",
            "Dairy",
            "Curd",
            "Milky Mist - Farm Fresh Curd - 500g",
            "Milky Mist Curd Farm Fresh is a rich supply of calcium and proteins. Prepared from better quality pasteurized toned milk to provide you the right width and texture. The live and active bacterial culture included in Milky Mist Curd hells digestion and lets you live a strong active life.",
            40.00,
            "https://www.bigbasket.com/media/uploads/p/xxl/40003162_2-milky-mist-curd-farm-fresh.jpg",
        ),
    new Product
        (
            "24",
            "u3",
            "Dairy",
            "Paneer",
            "Milky Mist - Premium Fresh Paneer - 100gm",
            "Milky Mist is a brand that is known for its various dairy products. The pure and protein rich products are renowned for their high quality goodness. Paneer is a product which is also known as cottage cheese. This is a healthy dairy product that is produced and marketed by Milky Mist.",
            100.00,
            "https://cdn.shopify.com/s/files/1/0262/4359/6351/products/FreshPaneer.jpg?v=1623924617",
        ),
    new Product
        (
            "25",
            "u3",
            "Dairy",
            "Butter",
            "Amul - Butter - 500g",
            "Pasteurized Amul butter is a delicious bread spread, an essential ingredient of baking and a known enhancer for many food items. This smooth creamy chunk from the house of Amul can be added to sauce, Indian gravy and baked products.",
            235.00,
            "https://www.bigbasket.com/media/uploads/p/xxl/1204991_2-amul-butter-pasteurized.jpg",
        ),
    new Product
        (
            "26",
            "u4",
            "Dairy",
            "Cheese",
            "Amul - Cheese - 200g",
            "Amul Pasteurised Processed Cheddar Cheese is made from Cheese: Sodium Citrate: Common Salt: Citric Acid: permitted natural color - Annatto. Emulsifier and Class II preservatives. It is made from graded cow/buffalo milk using microbial rennet.",
            126.00,
            "https://m.media-amazon.com/images/I/61Y6p4mZTgL._SL1299_.jpg",
        ),
    new Product
        (
            "27",
            "u4",
            "Dairy",
            "Yogurt",
            "Mother Dairy - Yogurt - 200g",
            "Mother Dairy Yogurt Cup 100% Natural is a luscious, smooth and well set curd which gives you the flavor of Homemade curd with no the hassles of setting curd at home. Our curd is arranged using the best quality standards making it disinfected. It is regularly thick, reliable and natural lacking the use of any preservatives. It is complete from pasteurized standardized milk which contains 4.5 % milk fat and 10 % milk SNF.",
            25.00,
            "https://yebilo.com/wp-content/uploads/2020/07/102833417-1.jpg",
        ),
    new Product
        (
            "28",
            "u4",
            "Beverages",
            "Coffee",
            "Bru Green Label - Coffee - 500g",
            "Loved by consumers since 1962, Bru Green Label Coffee is Indias first packaged filter coffee with the perfect mix of 53% coffee and 47% chicory. Its lightly roasted ground coffee beans help create the perfect decoction for a rich and smooth flavourful cup that helps rejuvenate your senses. The nitro flush packaging retains its fresh flavour and aroma providing rich, tasteful notes. Kick-start your day with a cup of fresh and aromatic Bru Green Label Coffee. So filter a cup, unwind and relax as you enjoy the coffee breaks you deserve. Buy Bru Green Label Coffee now, right here!",
            155.00,
            "https://cdn.foodmazone.com/media/catalog/product/cache/a87fc953bd1232f9de2ab64e20263501/b/r/bru_green_label.jpg",
        ),
    new Product
        (
            "29",
            "u4",
            "Beverages",
            "Tea",
            "Tata Tea Gold - Tea - 500g",
            "In the place, where the valley meets the mountains, Tata Tea Gold is born. An exquisite tea that combines the rich fullness of fine valley grown teas from Assam with the irresistible aroma of specially selected long leaves from highlands. Expertly blended by the master craftsmen from Tata Tea, this marque national black tea offering from Tata Teas portfolio has been specially crafted for the discerning tea consumers. Taste so rich and aroma are so irresistible that it will leave you longing for more!",
            483.00,
            "https://www.bigbasket.com/media/uploads/p/xxl/40201467_2-tata-tea-gold-care-tea.jpg",
        ),
    new Product
        (
            "30",
            "u5",
            "Beverages",
            "Soft Drinks",
            "7 Up - Soft Drink - 2L",
            "7UP's sparkling and crisp lemon and lime flavour keep you positive and confident against all odds. It aims to connect with people who choose to be their natural self and stand out in the crowd. 7UP celebrates the Hum toh hain like this! the attitude of consumers.",
            85.00,
            "https://www.bigbasket.com/media/uploads/p/xxl/40094178-2_7-7-up-soft-drink.jpg",
        ),
    new Product
        (
            "31",
            "u5",
            "Beverages",
            "Energy Drinks",
            "Monster - Energy Drink - 350ML",
            "The Original Green Monster Energy. Tear into a can of the meanest energy drink on the planet, Monster Energy. It`s the ideal combo of the right ingredients in the right proportion to deliver the big bad buzz that only Monster can. Monster packs a powerful punch but has a smooth easy drinking flavour. Athletes, musicians, anarchists, co-eds, road warriors, metalheads, geeks, hipsters, and bikers dig it - you will too. Flavour Profile: Sweet and Salty - It tastes like Monster!",
            110.00,
            "https://cdn.vox-cdn.com/thumbor/xfpuVebcNP01HTdY12VHI5Zs8x4=/0x0:4160x3120/1200x800/filters:focal(1825x1075:2489x1739)/cdn.vox-cdn.com/uploads/chorus_image/image/63986073/shutterstock_1377030728.0.jpg",
        ),
    new Product
        (
            "32",
            "u5",
            "Beverages",
            "Fruit Juices",
            "Tropicana 100% Orange Juice - Fruit Juice - 1L",
            "Tropicana brings to you 100% Orange Juice is made with the finest selected oranges. It is a great way to start your morning. This orange juice sweet and tart taste. It has nutrients and are generally low in calories. It is great in taste and quality. Hydrate yourself with a delicious, refreshing citrus flavour juice. It is loaded with dietary fibres and vitamin C. It doesn’t contain any added sugar, preservatives, colour or artificial flavouring.",
            101.00,
            "https://m.media-amazon.com/images/I/71wMrB2fMBL._SL1500_.jpg",
        )
]

export default PRODUCTS;