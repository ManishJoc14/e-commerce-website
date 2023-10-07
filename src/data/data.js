export const firstProductsData = [
  {
    name: "Dark Green T-shirt",
    price: 65,
    imageSrc: require("../img/shop1/26.jpg"),
  },
  {
    name: "Red Hoodie",
    price: 84,
    imageSrc: require("../img/shop1/6.jpg"),
  },
  {
    name: "Watch",
    price: 69,
    imageSrc: require("../img/shop1/13.jpg"),
  },
  {
    name: "Grey T-shirt",
    price: 68,
    imageSrc: require("../img/shop1/23.jpg"),
  },
  {
    name: "Designer T-shirt",
    price: 70,
    imageSrc: require("../img1/products/f1.jpg"),
  },
  {
    name: "Blue Designer Bag",
    price: 75,
    imageSrc: require("../img/shop1/22.jpg"),
  },
  {
    name: "Dark shirt",
    price: 82,
    imageSrc: require("../img/shop1/21.jpg"),
  },
  {
    name: "Green leavy T-shirt",
    price: 69,
    imageSrc: require("../img1/products/f2.jpg"),
  },
  {
    name: "Classy Jacket",
    price: 92,
    imageSrc: require("../img/shop1/17.jpg"),
  },
  {
    name: "Flower design T-shirt",
    price: 65,
    imageSrc: require("../img1/products/f3.jpg"),
  },
  {
    name: "Brown Shoes",
    price: 87,
    imageSrc: require("../img/shop1/14.jpg"),
  },
  {
    name: "White Red-flower T-shirt",
    price: 69,
    imageSrc: require("../img1/products/f4.jpg"),
  },
].sort(() => Math.random() - 0.5);

export const secondProductsData = [
  {
    name: "Dark Green T-shirt",
    price: 65,
    imageSrc: require("../img/shop1/1.jpg"),
  },
  {
    name: "Yellow Cap",
    price: 50,
    imageSrc: require("../img/shop1/18.jpg"),
  },
  {
    name: "Black Designer Bag",
    price: 78,
    imageSrc: require("../img/featured/3.jpg"),
  },
  {
    name: "Bluish Shoes",
    price: 74,
    imageSrc: require("../img/shop1/7.jpg"),
  },
  {
    name: "Blue Designer Bag",
    price: 69,
    imageSrc: require("../img/shop1/3.jpg"),
  },
  {
    name: "Designer Shoes",
    price: 68,
    imageSrc: require("../img/shoes/5.jpg"),
  },
  {
    name: "Eye design shirt",
    price: 64,
    imageSrc: require("../img/clothes/3.jpg"),
  },
  {
    name: "Designer White Dress",
    price: 87,
    imageSrc: require("../img/clothes/2.jpg"),
  },
].sort(() => Math.random() - 0.5);

export const ProductsData = [...firstProductsData, ...secondProductsData].sort(
  () => Math.random() - 0.5
);

export const featuresData = [
  {
    title: "Free Shipping",
    imageSrc: require("../img/feature/f1.png"),
  },
  {
    title: "Online Order",
    imageSrc: require("../img/feature/f2.png"),
  },
  {
    title: "Save Money",
    imageSrc: require("../img/feature/f3.png"),
  },
  {
    title: "Promotions",
    imageSrc: require("../img/feature/f4.png"),
  },
  {
    title: "Happy Sell",
    imageSrc: require("../img/feature/f5.png"),
  },
  {
    title: "F24/7 Support",
    imageSrc: require("../img/feature/f6.png"),
  },
].sort(() => Math.random() - 0.5);

export const blogData = [
  {
    title: "The Cotton-Jersey Zip-Up Hoodie",
    imageSrc: require("../img1/blog/b1.jpg"),
  },
  {
    title: "How To Style A Quiff",
    imageSrc: require("../img1/blog/b2.jpg"),
  },
  {
    title: "Must-Have Staker Girl Items",
    imageSrc: require("../img1/blog/b3.jpg"),
  },
  {
    title: "Runaway-Inspired Trends",
    imageSrc: require("../img1/blog/b4.jpg"),
  },
  {
    title: "AW20 Menswear Trends",
    imageSrc: require("../img1/blog/b5.jpg"),
  },
].sort(() => Math.random() - 0.5);

export const contactData = [
  {
    name:'John Doe',
    position:'CEO',
    phone: '+ 000 123 873 77 45',
    imageSrc: require("../img1/people/1.png") ,
    email:'JohnDoe43@gmail.com'
  },
  {
    name:'William Smith',
    position:'Senior Marketing Manager',
    phone: '+ 000 376 456 89 86',
    imageSrc: require("../img1/people/2.png"),
    email: 'WilliamSmith64@gmail.com'
  },
  {
    name:'Emma Stone',
    position:'Junior Marketing Manager',
    phone: '+ 000 789 938 66 24',
    imageSrc: require("../img1/people/3.png"),
    email: 'EmmaStone16@gmail.com'
  },
].sort(() => Math.random() - 0.5);