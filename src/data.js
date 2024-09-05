let products = [
    {
        id: 1,
        title: "Comfy latest men's shirt",
        category:"men",
        subCategory:"shirt",
        price: 289,
        description: `This shirt is made from pure cotton premier quality fabric and it is suitable to wear in meetings, party,
         festivals all light colors will give you attractive look Country of Origin`,
        image: 'https://images.meesho.com/images/products/325087198/ly57z_400.webp',
        rating: { rate: 3.9, count: 6014 },
        size:['S','M','L','XL'],
        color:['white','green','pink']
},
{
    id: 2,
    title: "Banarasi silk saree",
    category:"women",
    subCategory:"saree",
    price: 507,
    description: ` Beautiful Banarasi Silk Red Brocade Saree With Blouse`,
    image: 'https://images.meesho.com/images/products/47039975/5oyew_400.webp',
    rating: { rate: 3.9, count: 20378 },
    size:['FreeSize'],
    color:['white','green','pink','red','yellow']
},
{
    id: 3,
    title: "Classic gym vests",
    category:"men",
    subCategory:"vests",
    price: 268,
    description: `Beautiful Gym vests for men`,
    image: 'https://images.meesho.com/images/products/197642006/4wv6o_400.webp',
    rating: { rate: 4.6, count: 614 },
    size:['M','L','XL'],
    color:['white','green','pink','blue']
},
{
    id: 4,
    title: "Girls baby frock",
    category:"kids",
    subCategory:"frock",
    price: 161,
    description: `Girls Baby Frock , Sleeveless , Summer wear , FANCY FROCK FOR GIRLS ,
     white summer casual frock, Baby Girls summer casual loose fit printing short sleeve frock and dress`,
    image: 'https://images.meesho.com/images/products/364652228/sfyoi_512.webp',
    rating: { rate: 4, count: 6014 },
    size:['S','M'],
    color:['white','green','pink','orange']
},
{
    id: 5,
    title: "Classy face makeup",
    category:"Beauty",
    subCategory:"face",
    price: 216,
    description: `Daily use face makeup combo for women`,
    image: 'https://images.meesho.com/images/products/374696902/j2i3g_400.webp',
    rating: { rate: 3.6, count: 5014 },
    size:['FreeSize'],
   
},
{
    id: 6,
    title: "Unique attractive mens shoes",
    category:"men",
    subCategory:"footwear",
    price: 461,
    description: `Mesh Running/Walking/Gym Sports Shoes For Men Pack of 2`,
    image: 'https://images.meesho.com/images/products/333942837/mkg6o_400.webp',
    rating: { rate: 4.3, count: 6914 },
    size:['6','7','8','9'],
    color:['white','green','pink','black']
},
{
    id: 7,
    title: "USB Wall Charger Fast Charging Adapter",
    category:"Electronics",
    subCategory:"charger",
    price: 141,
    description: `With the intelligent chip inside, dual USB wall charger matches the current as your device's need automatically. Over-current, 
    over-voltage and short-circuit protection also effectively protect your smartphones from damage`,
    image: 'https://images.meesho.com/images/products/427657739/c627h_512.webp',
    rating: { rate: 4.9, count: 3017 },
    size:['FreeSize']
  
},
{
    id: 8,
    title: "Joganiya Trendy Attractive Kurtis ",
    category:"women",
    subCategory:"kurtis",
    price: 289,
    description: `New Joganiy Kurti , Premium, Georgatte , gown, anarkali, kurti,dress Country of Origin : India`,
    image: 'https://images.meesho.com/images/products/331419465/e9zun_400.webp',
    rating: { rate: 3.3, count: 4908 },
    size:['S','M','L','XL'],
    color:['white','green','pink','blue']
},
{
    id: 9,
    title: "Western Georgette Tops & Tunics",
    category:"women",
    subCategory:"top",
    price: 221,
    description: `House Of Fashion Queen Western Georgette Tops & Tunics`,
    image: 'https://images.meesho.com/images/products/325087198/ly57z_400.webp',
    rating: { rate: 4.0, count: 6014 },
    size:['FreeSize'],
    color:['white','green','pink','black']
},
{
    id: 10,
    title: "premium track pant combo",
    category:"men",
    subCategory:"pant",
    price: 489,
    description: `new track pants suitable for workouts, gym, yoga, running, or casual wear. 
    They offer both style and comfort, so why wait? Grab yours now`,
    image: 'https://images.meesho.com/images/products/439203731/fv19v_400.webp',
    rating: { rate: 3.8, count: 6094 },
    size:['S','M','L','XL'],
    color:['white','green','pink','blue']
},
{
    id: 11,
    title: "Fancy kids soft toys",
    category:"kids",
    subCategory:"toys",
    price: 170,
    description: `2 feet cute illustrious fabulous pre-eminent American Red Teddy Bear - 24 inch Country of Origin : India`,
    image: 'https://images.meesho.com/images/products/58102455/kdfho_400.webp',
    rating: { rate: 3.6, count: 7094 },
    size:['FreeSize'],
    color:['white','green','pink','blue','red']
},
{
    id: 12,
    title: "jeans for womens cloth",
    category:"women",
    subCategory:"w-pant",
    price: 409,
    description: `COMFY STRECHABLE HIGH-WAIST (1-BUTTON) JEANS FOR WOMEN ANG GIRLS`,
    image: 'https://images.meesho.com/images/products/300640197/cq0df_400.webp',
    rating: { rate: 4.8, count: 6084 },
    size:['S','M','L','XL'],
    color:['white','green','pink','blue','black']
},
{
    id: 13,
    title: "Shoes For Men's & Boys",
    category:"men",
    subCategory:"footwear",
    price: 579,
    description: `Genuine Quality used in making of this shoes. Raspberry synthetic leather`,
    image: 'https://images.meesho.com/images/products/438286048/fpbyk_400.webp',
    rating: { rate: 4.5, count: 3089 },
    size:['7','8','9'],
    color:['black']
},
{
    id: 14,
    title: "Designer bedsheets",
    category:"Home&Kitchen",
    subCategory:"bedsheet",
    price: 279,
    description: `Name : Attractive Bedsheets Fabric : Cotton Type : Flat Sheets`,
    image: 'https://images.meesho.com/images/products/423829036/lc6dg_400.webp',
    rating: { rate: 4.0, count: 2089 },
    size:['queen','double'],
    color:['black','pink','yellow']
},{
    id: 15,
    title: "Men denim jeans clothes",
    category:"men",
    subCategory:"pant",
    price: 509,
    description: `MONK MEN JEANS is an amazing product launched by SHRIRADHE ENTERPRISES. 
    It will fit you perfectly and will enhance your look at any occasion.`,
    image: 'https://images.meesho.com/images/products/221526028/q5tcz_400.webp',
    rating: { rate: 4.2, count: 1089 },
    size:['S','M','L','XL'],
    color:['black','blue']
},{
    id: 16,
    title: "Cotton Mats For Door",
    category:"Home&Kitchen",
    subCategory:"mats",
    price: 379,
    description: ` Anti Skid Doormat Bathroom Office Hotel Bath Mat MicroFibre Mats Cotton Mats For Door`,
    image: 'https://images.meesho.com/images/products/167926209/zb7s2_400.webp',
    rating: { rate: 3.5, count: 3099 },
    size:['FreeSize'],
    color:['black','blue']
},{
    id: 17,
    title: "womens suits",
    category:"women",
    subCategory:"kurtis",
    price: 979,
    description: `Pure cotton kurta Fabric piece cotton kurta cotton fabric pure cotton piece pure cotton kapra 
    cotton blouse piece cotton blouse piece 2.5 meter Kurta Fabric piece`,
    image: 'https://images.meesho.com/images/products/390087244/hebdo_400.webp',
    rating: { rate: 4.7, count: 3009 },
    size:['FreeSize'],
    color:['black','blue','pink','yellow']
},
{
    id: 18,
    title: "MENS SOLID POLO T - SHIRT",
    category:"men",
    subCategory:"T-shirts",
    price: 239,
    description: `Pure cotton kurta Fabric piece cotton kurta cotton fabric pure cotton piece pure cotton kapra 
    cotton blouse piece cotton blouse piece 2.5 meter Kurta Fabric piece`,
    image: 'https://images.meesho.com/images/products/292427153/wnxsc_400.webp',
    rating: { rate: 4.7, count: 3009 },
    size:['S','M','XL'],
    color:['black','blue','pink','yellow','green']
},
{
    id: 19,
    title: "PILOT FANCY SWEATERS",
    category:"women",
    subCategory:"top",
    price: 379,
    description: `women winter wear sweaters, women sweater, women cardigan, women winter sleeveless sweater, 
    women sleeveless sweater, without sleeve sweater, women sleeveless cardigan, winter cardigan,`,
    image: 'https://images.meesho.com/images/products/361038733/tgavw_512.webp',
    rating: { rate: 3.7, count: 3000 },
    size:['S','M','L'],
    color:['black','blue','yellow']
},
{
    id: 20,
    title: "Round Neck White Frocks & Dresses",
    category:"kids",
    subCategory:"frock",
    price: 979,
    description: `SK Dresses Kid's Embroidered Round Neck White Frocks & Dresses`,
    image: 'https://images.meesho.com/images/products/291575789/kqra8_400.webp',
    rating: { rate: 4.0, count: 3509 },
    size:['FreeSize'],
    color:['black','blue','pink','yellow']
},
{
    id: 21,
    title: "leather casual sandals for men",
    category:"men",
    subCategory:"footwear",
    price: 679,
    description: `QARA leather casual sandals for men`,
    image: 'https://images.meesho.com/images/products/437294962/2pkgs_400.webp',
    rating: { rate: 3.7, count: 3099 },
    size:['7','8','9'],
    color:['black','blue']
},
{
    id: 22,
    title: "Men Striped Round Neck",
    category:"men",
    subCategory:"shirt",
    price: 309,
    description: `|| New Colours Design T Shirt Men || New Look Fresh Colour Round
     Neck T Shirt || Partywear and Casual t`,
    image: 'https://images.meesho.com/images/products/390474112/ehlmo_400.webp',
    rating: { rate: 4.0, count: 1089 },
    size:['S','M','L','XL'],
    color:['black','blue','green','yellow']
},
{
    id: 23,
    title: "Chanderi Cotton Saree",
    category:"women",
    subCategory:"saree",
    price: 599,
    description: `latest new collection design saree designer bollywood fashion new arrival best top selling most order today deal offer sale sarees soft cotton linen chanderi
     banarasi kanchipuram mulmul mysore paper poly silk net georgette sana ikat art silk l kota`,
    image: 'https://images.meesho.com/images/products/240516683/0o6br_400.webp',
    rating: { rate: 4.2, count: 1089 },
    size:['FreeSize'],
    color:['black','blue','green']
},
{
    id: 24,
    title: "Men Regular Fit Military Cargo",
    category:"men",
    subCategory:"pant",
    price: 999,
    description: `These simple, yet trendy pair of cargo trousers from Seoneg will complete any look. Rock this olive pair with a vintage 
    tee and leather jacket for casual weekend outings with friends and family.`,
    image: 'https://images.meesho.com/images/products/124243025/egtng_512.webp',
    rating: { rate: 4.2, count: 1089 },
    size:['S','M','L','XL'],
    color:['black','blue']
},
{
    id: 25,
    title: "Great 3 In 1 cable with smart charger",
    category:"electronics",
    subCategory:"charger",
    price: 147,
    description: `This is the best charger for smartphones There is a 3 commited wires included In one cable Micro Type C type And also
     i phone best fast charging support genuine price.`,
    image: 'https://images.meesho.com/images/products/403125586/n3vvh_400.webp',
    rating: { rate: 3.2, count: 1089 },
    size:['FreeSize']
    
    
},
{
    id: 26,
    title: "Kashikay Women High Rise Full Stretchable Ankle Length",
    category:"women",
    subCategory:"w-pant",
    price: 409,
    description: `These stylish tights from Poojaran are perfectly capable of switching in between work and the gym. Apart from the sporty finish,
     the apparel also offers plenty of room for better fitting and flexible relaxation`,
    image: 'https://images.meesho.com/images/products/242710256/acr6a_400.webp',
    rating: { rate: 4.2, count: 1089 },
    size:['S','M','L','XL'],
    color:['black','blue','green','red']
},
{
    id: 27,
    title: "SUNGLOW MATTY TSHIRT",
    category:"men",
    subCategory:"T-shirt",
    price: 399,
    description: ` Men�s T-Shirts delivers the , style, and performance to fit your active lifestyle. This tee is a wardrobe essential, 
    offering both the style and of cotton with the benefits of performance`,
    image: 'https://images.meesho.com/images/products/91388895/ijjhe_400.webp',
    rating: { rate: 3.2, count: 1089 },
    size:['S','M','L','XL'],
    color:['black','blue','green']
},
{
    id: 28,
    title: "Diamond belt for casual",
    category:"men",
    subCategory:"belt",
    price: 399,
    description: `Diamond Belt for Jeans wear, classic look with shine buckles. Trending belt, top Quality.`,
    image: 'https://images.meesho.com/images/products/435855270/ok1x8_400.webp',
    rating: { rate: 4.2, count: 1077 },
    size:['FreeSize'],
    color:['black','blue']
},
{
    id: 29,
    title: "SUNGLOW MATTY TSHIRT",
    category:"men",
    subCategory:"pant",
    price: 499,
    description: ` Track Pants Men's Stylish Grey Jogger Lower Polyester Track Pants for Gym, 
    Running, Athletic, Casual Wear for Men Pack Of 2`,
    image: 'https://images.meesho.com/images/products/380403832/mbi97_400.webp',
    rating: { rate: 3.8, count: 1089 },
    size:['S','M','L','XL'],
    color:['black','blue','green']
},
{
    id: 30,
    title: "New printed anarkali wine gown",
    category:"wommen",
    subCategory:"kurtis",
    price: 399,
    description: `Discover the charm of this Beautiful Rayon Fabric gown, featuring a straight shape with print and lace work that exudes sophistication. The round neck and three-quarter regular 
    sleeves are complemented by a printed pattern, making it a stylish choice for any event`,
    image: 'https://images.meesho.com/images/products/398781839/el0nk_400.webp',
    rating: { rate: 4.2, count: 1089 },
    size:['FreeSize'],
    color:['black','blue','green','red','yellow']
},
{
    id: 31,
    title: "Eyeliner 36h, Blender Spounge",
    category:"Beauty",
    subCategory:"face",
    price: 299,
    description: `SumSh Fixer Spray, Primer, Foundation, Eyeliner 36h, Blender Spounge
    Product Name : SumSh Fixer Spray, Primer, Foundation, Eyeliner 36h, Blender Spounge`,
    image: 'https://images.meesho.com/images/products/108495616/pn7l6_400.webp',
    rating: { rate: 4.5, count: 189 },
    size:['FreeSize']
    
},
{
    id: 32,
    title: "SUNGLOW MATTY TSHIRT",
    category:"Home&Kitchen",
    subCategory:"bedsheet",
    price: 399,
    description: ` Track Pants Men's Stylish Grey Jogger Lower Polyester Track Pants for Gym, 
    Running, Athletic, Casual Wear for Men Pack Of 2`,
    image: 'https://images.meesho.com/images/products/209999291/reesb_512.webp',
    rating: { rate: 4.8, count: 2089 },
    color:['black','blue','green'],
    size:['FreeSize']
},
{
    id: 33,
    title: "Gym Vest For Workout ",
    category:"men",
    subCategory:"vests",
    price: 399,
    description: `Introducing our Men's Polyester Printed Sports Vest, the ultimate choice for active individuals who demand both style and performance. Crafted from high-quality polyester material, this vest offers superior durability and comfort,
     making it ideal for intense workouts and sports activities`,
    image: 'https://images.meesho.com/images/products/407832579/fa8hx_400.webp',
    rating: { rate: 3.2, count: 1089 },
    size:['S','M','L','XL'],
    color:['black','blue','green']
},
{
    id: 34,
    title: " PRIYANSHI SANGANERI PRINTED TOP",
    category:"women",
    subCategory:"tops",
    price: 399,
    description: `This top is made of rib fabric. which is very soft and stretchable to wear 
    which you can carry with any jeans and which will give a great feel to your personality.`,
    image: 'https://images.meesho.com/images/products/403120213/ix9wi_400.webp',
    rating: { rate: 3.8, count: 1089 },
    size:['S','M','L','XL'],
    color:['black','blue','green']
},
{
    id: 35,
    title: "Polo Midnight Navy Tshirts",
    category:"men",
    subCategory:"shirt",
    price: 299,
    description: `AOOSH Men's Engineered Stripes Regular Polo Midnight Navy Tshirts`,
    image: 'https://images.meesho.com/images/products/400584487/osekr_512.webp',
    rating: { rate: 4.8, count: 1089 },
    size:['S','M','L','XL'],
    color:['black','blue','green','pink','yellow']
},
{
    id: 36,
    title: "Head Sprinkler",
    category:"HomeKitchen",
    subCategory:"Home",
    price: 92,
    description: `Anti-Splash Expandable Head Nozzle Bathroom Tap Adjustable 
    Splash Sprinkler Head Sprinkler Water Saving Device Faucet Regulator`,
    image: 'https://images.meesho.com/images/products/9873168/b6f05_512.webp',
    rating: { rate: 3.8, count: 5087 },
    size:['FreeSize'],
    color:['black','white']
},
{
    id: 37,
    title: "Printed Dresses For Women",
    category:"women",
    subCategory:"dresses",
    price: 363,
    description: `The puff sleeves multicolored floral vintage dress is a charming and 
    nostalgic garment that combines puff sleeves,a vibrant floral print, and vintage-inspired design elements.`,
    image: 'https://images.meesho.com/images/products/384983175/fhgox_512.webp',
    rating: { rate: 4.2, count: 6089 },
    size:['S','M','L','XL'],
    color:['black','blue','green','pink','yellow']
}



]

export default products