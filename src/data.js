let data = [
  {
    "id": 1,
    "name": "Adidas",
    "description": "Men's fashion, Women's fashion, Children's fashion, Sports apparel, Running shoes, Soccer boots, Sportswear, Sports jerseys \nThe guiding principle of adidas is \"Play to Win\". Inspired by the motivation of founder Adi Dassler, adidas Sport Performance brings passion for great products to athletes in all sports, allowing them to be faster, stronger, smarter, cooler and natural.",
    "address": "02-13",
    "imgUrl": "https://lh4.googleusercontent.com/-VZ7LePo-9qk/AAAAAAAAAAI/AAAAAAAAR7k/SPul4LJbVjA/s0-c-k-no-ns/photo.jpg",
    "arUrl": "",
    "isPremium": true,
    "label": "Apparel",
    "categories": ["shop"]
  },
  {
    "id": 2,
    "name": "Ajisen Japanese Restaurant",
    "description": "Based in Kyushu, Japan, Ajisen Ramen is famous for its white broth, made from the slow-cooking of tender pork ribs. With its emphasis on simple, hygienic, convenient, tasty and healthy noodles, Ajisen Ramen refines the dining experience.",
    "address": "01-01",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/en/b/ba/Ajisen_logo1.png",
    "arUrl": "",
    "isPremium": true,
    "label": "Food",
    "categories": ["food"]
  },
  {
    "id": 3,
    "name": "BreadTalk",
    "description": "Distinctive, stylish and so delicious, every one of our baked creations has garnered a loyal following, turning BreadTalk into an award-winning boutique with over 1000 different breads, buns and cakes created, each endowed with its own unique name, personality and flavour.",
    "address": "B1-23",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/BreadTalk_logo.svg/2000px-BreadTalk_logo.svg.png",
    "arUrl": "",
    "isPremium": true,
    "label": "Food",
    "categories": ["food"]
  },
  {
    "id": 4,
    "name": "Challenger",
    "description": "Challenger is a dynamic regional IT retailer known for its strong brand name and attractive ValueClub membership privileges. \nWe deliver every day value to our members on the latest IT gadgets and lifestyle products.",
    "address": "03-10E",
    "imgUrl": "http://www.jem.sg/images/Challenger%20Logo%20(New)%20resized.jpg",
    "arUrl": "",
    "isPremium": false,
    "label": "Gadgets",
    "categories": ["shop"]
  },
  {
    "id": 5,
    "name": "City Chain",
    "description": "City Chain has grown to be one of the key players in the watch retail industry since its establishment in 1985. Our mission is to offer customers a wide range of renowned watch labels and quality customer services. We are highly dedicated to grow and improve our services in the coming years.",
    "address": "01-65A/65",
    "imgUrl": "http://waterwaypoint.fraserscentrepointmalls.com/images/city-chain.jpg",
    "arUrl": "",
    "isPremium": false,
    "label": "Jewelry",
    "categories": ["shop"]
  },
  {
    "id": 6,
    "name": "Converse",
    "description": "Ladies' shoes, Men's shoes, Children's shoes, Backpacks, Caps, Graphic tees, Jackets, Pants, Sling bag, Sneakers \nConverse is the leading global designer, manufacturer and marketer of high quality footwear for all people. Today, Converse is highly regarded as a manufacturer of superior athletic footwear and our design gurus continue to provide consumers with innovative fashion products.",
    "address": "02-19",
    "imgUrl": "https://lh6.googleusercontent.com/-1WnL3Jx2Dxo/AAAAAAAAAAI/AAAAAAAAGlg/ub0FNRepseQ/s0-c-k-no-ns/photo.jpg",
    "arUrl": "",
    "isPremium": false,
    "label": "Apparel",
    "categories": ["shop"]
  },
  {
    "id": 7,
    "name": "G-Factory",
    "description": "Casio G-factory, fully operated by Casio Singapore Pte Ltd, offers a range of wrist watches that is revolutionarily original and fashionable through Casio's leading edge technology. Look forward to the sleek combination of street fashion and technology in our watches - the place for every fashionista who seek unique styles in watch fashion, yet at the same time seeking for truly functional timepiece.",
    "address": "01-11",
    "imgUrl": "https://www.aucklandairport.co.nz/~/media/Images/Traveller/Retail/Stores/Store-Main-Images/gfactory.ashx?h=0&w=0&mw=1300&hash=399A6FAC80AE6809B6302A70F7E5447FBB6E801C",
    "arUrl": "",
    "isPremium": false,
    "label": "Apparel",
    "categories": ["shop"]
  },
  {
    "id": 8,
    "name": "McDonald's",
    "description": "Burgers, Fried chicken, Fries, Milkshake, Ice cream, Nuggets, Pies, Salad, Sundae, \nWraps McDonald's provides the ultimate convenience and a haven for families. You can pop by the McCafe for a cuppa after a busy day or enjoy your favourite menu anytime with great value, all day - every day. Sink your teeth into local favourites like McSpicy or McNuggets with our signature Curry Sauce, or go for the all-time favourites like Big Mac or Filet-O-Fish.",
    "address": "01-66",
    "imgUrl": "https://lh5.googleusercontent.com/-avTHbIvvjKY/AAAAAAAAAAI/AAAAAAAAAoY/XbY3XEWyohs/s0-c-k-no-ns/photo.jpg",
    "arUrl": "",
    "isPremium": false,
    "label": "Food",
    "categories": ["food"]
  },
].map(item => {
  item.distance = Math.floor(Math.random() * 50 + 50);
  return item;
});

export default data;
