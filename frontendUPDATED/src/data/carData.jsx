import img01 from "../assests/all-images/cars-img/tesla.png";
import img02 from "../assests/all-images/cars-img/offer-toyota.png";
import img03 from "../assests/all-images/cars-img/bmw-offer.png";
import img04 from "../assests/all-images/cars-img/nissan-offer.png";
import img05 from "../assests/all-images/cars-img/Ferrari Camry.jpg";
import img06 from "../assests/all-images/cars-img/mercedes-offer.png";
import img07 from "../assests/all-images/cars-img/Audi-A1.png";
import img08 from "../assests/all-images/cars-img/tesla-removebg-preview.png";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Malibu",
    imgUrl: img01,
    dealer: "Autoboxcartrading",
    model: "Model 3",
    price: '1,000,000',
    contact: 'Deal with Autoboxcartrading and for more info about this car! Contact:+639232342952',
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    bodyType: "Sedan",
    description:
      "The Tesla Malibu, inspired by the Model 3, offers cutting-edge electric performance with a range of innovative features. Enjoy seamless GPS navigation, luxurious heated seats, and the ease of automatic driving in a sleek, eco-friendly package. ",
    isFeatured: true 
  },
  
  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Aventador",
    imgUrl: img02,
    dealer: "All Cars",
    contact: 'Deal with All Cars and for more info about this car! Contact:092323452',
    model: "Model 5",
    price: '2,000,000',
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    bodyType: "SUV",
    description:
      "The Toyota Aventador Model-2022 is a premium vehicle offering a blend of performance and luxury. Equipped with advanced GPS navigation and heated seats, it ensures a comfortable and convenient driving experience. Its automatic transmission provides smooth and effortless.",
    isFeatured: true
  },
  {
    id: 3,
    brand: "BMW",
    rating: 12,
    carName: "X3",
    imgUrl: img03,
    contact: 'Deal with Autobahn and for more info about this car! Contact:092323452',
    model: "Model 20",
    price: '6,000,000',
    dealer: 'BMW Autobahn',
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    bodyType: "SUV",
    description:
      "The BMW X3 Model-2022 combines sporty elegance with powerful performance. This luxury SUV features state-of-the-art GPS navigation, comfortable heated seats, and an automatic transmission, making it perfect for both urban commutes and adventurous drives.",
    isFeatured: true
  },
  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Mercielago",
    imgUrl: img04,
    contact: 'Deal with About Nissan Tiniwisan Highway and for more info about this car! Contact:092323452',
    model: "Model 12",
    price: '7,000,000',
    dealer: 'Nissan Tiniwisan Highway',
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    bodyType: "Sports Car",
    description:
      "The Nissan Mercielago Model-2022 is a luxurious and powerful car designed for high performance. It comes with modern GPS navigation, heated seats for maximum comfort, and an automatic transmission for a smooth driving experience.",
    isFeatured: true
  },
  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Camry",
    imgUrl: img05,
    model: "Model 2",
    dealer: "All Cars",
    price: '4,000,000',
    contact: 'Deal with About Nissan Tiniwisan Highway and for more info about this car! Contact:092323452',
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    bodyType: "Sports Car",
    description:
      "The Ferrari Camry Model-2022 is an exceptional blend of Ferrari's performance engineering with Camry's reliability. Featuring advanced GPS navigation, luxurious heated seats, and automatic transmission, it delivers an unparalleled driving experience.",
    isFeatured: true
  },
  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "XC90",
    imgUrl: img06,
    model: "Model 1",
    contact: 'Deal with About Nissan Tiniwisan Highway and for more info about this car! Contact:092323452',
    dealer: "All Cars",
    price: '8,000,000',
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    bodyType: "SUV",
    description:
      "The Mercedes Benz XC90 Model-2022 exemplifies luxury and performance. With cutting-edge GPS navigation, comfortable heated seats, and an automatic transmission, this vehicle is designed for those who seek both style and substance.",
    isFeatured: false
  },
  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "A1",
    imgUrl: img07,
    model: "Model 3",
    contact: 'Deal with About Nissan Tiniwisan Highway and for more info about this car! Contact:092323452',
    dealer: "All Cars",
    price: '1,890,000',
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    bodyType: "Hatchback",
    description:
      "The Audi Fiesta Model 3 is a compact car that doesn't compromise on features. It includes advanced GPS navigation, heated seats for added comfort, and an automatic transmission, making it a great choice for city driving.",
    isFeatured: true
  },
  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce",
    imgUrl: img08,
    model: "Model 3",
    contact: 'Deal with About Nissan Tiniwisan Highway and for more info about this car! Contact:092323452',
    dealer: "All Cars",
    price: '5,000,000',
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    bodyType: "Luxury Sedan",
    description:
      "The Rolls Royce Colorado Model 3 combines unparalleled luxury with modern technology. It features sophisticated GPS navigation, sumptuous heated seats, and an automatic transmission, providing a driving experience like no other.",
    isFeatured: false
  }
];

export default carData;
