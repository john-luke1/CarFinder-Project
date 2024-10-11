import img09 from "../assests/model/model3.png";
import img10 from "../assests/model/model s.png";
import img11 from "../assests/model/model x.png";
import img12 from "../assests/model/model Y.png";
import img13 from '../assests/model/roadster.png';
import img14 from '../assests/model/toyotacamry.jpg';
import img15 from '../assests/model/toyotocarolla.png';
import img16 from '../assests/model/toyotarava.png';
import img17 from '../assests/model/toyotahighlander.png';
import img18 from '../assests/model/toyotaprius.png';
import img19 from '../assests/model/bmw3series.png';
import img20 from '../assests/model/bmwX5.png';
import img21 from '../assests/model/i18Bmw.png';
import img22 from '../assests/model/nissanAltima.png';
import img23 from '../assests/model/nissanRogue.png';
import img24 from '../assests/model/nissanGT-R.png';

const modelData = [
  
  {
    id: 9,
    brand: "Tesla",
    rating: 112,
    modelName: "Malibu",
    imgUrl: img09,
    price: "5,000,000",
    dealer: "Autoboxcartrading",
    speed: "20kmpl",
    gps: "GPS Navigation",
    category: "Tesla",
    year: "2023",
    seatType: "Heated seats",
    automatic: "Automatic",
    bodyType: "Sedan",
    description:
      "The Tesla Malibu Model 3 offers exceptional electric performance with a sleek design. Equipped with advanced GPS navigation, heated seats, and an automatic transmission, it ensures a modern and comfortable driving experience."
  },
  {
    id: 10,
    brand: "Tesla",
    rating: 120,
    modelName: "Vista",
    imgUrl: img10,
    price: "8,000,000",
    speed: "25kmpl",
    category: "Tesla",
    year: "2023",
    dealer: "Autoboxcartrading",
    gps: "GPS Navigation",
    seatType: "Leather seats",
    automatic: "Automatic",
    bodyType: "Sedan",
    description:
      "The Tesla Vista Model S is a luxury electric sedan that combines impressive range with top-notch features. It includes GPS navigation, premium leather seats, and an automatic transmission, making it a standout choice for eco-conscious drivers."
  },
  {
    id: 11,
    brand: "Tesla",
    rating: 95,
    modelName: "Falcon",
    imgUrl: img11,
    price: "2,000,000",
    speed: "22kmpl",
    gps: "GPS Navigation",
    category: "Tesla",
    year: "2024",
    dealer: "Autoboxcartrading",
    seatType: "Sport seats",
    automatic: "Automatic",
    bodyType: "SUV",
    description:
      "The Tesla Falcon Model X is a high-performance SUV with advanced technology and luxury features. It offers excellent GPS navigation, sporty seats for added comfort, and an automatic transmission for effortless driving."
  },
  {
    id: 12,
    brand: "Tesla",
    rating: 110,
    modelName: "Alpha",
    imgUrl: img12,
    price: "6,000,000",
    category: "Tesla",
    year: "2024",
    dealer: "Autoboxcartrading",
    speed: "21kmpl",
    gps: "GPS Navigation",
    seatType: "Comfort seats",
    automatic: "Automatic",
    bodyType: "SUV",
    description: "The Tesla Alpha Model Y is a versatile and efficient electric SUV. It comes with GPS navigation, comfortable seats, and an automatic transmission, offering a smooth and enjoyable driving experience."
  },
  {
    id: 13,
    brand: "Tesla",
    rating: 130,
    modelName: "Ocean",
    imgUrl: img13,
    category: "Tesla",
    year: "2023",
    dealer: "Autoboxcartrading",
    price: "1,000,000",
    speed: "30kmpl",
    gps: "GPS Navigation",
    seatType: "Luxury seats",
    automatic: "Automatic",
    bodyType: "Sports Car",
    description: "The Tesla Ocean Roadster is a high-performance electric sports car that delivers breathtaking speed and luxury. It features GPS navigation, plush luxury seats, and an automatic transmission, redefining the driving experience."
  },
  /*================================TOYOTA MODELS=============================*/
  {
    id: 14,
    brand: "Toyota",
    rating: 95,
    modelName: "Camry",
    imgUrl: img14,
    category: "Toyota",
    year: "2024",
    dealer: "All Cars",
    price: "2,000,000",
    speed: "15kmpl",
    gps: "GPS Navigation",
    seatType: "Leather seats",
    automatic: "Automatic",
    bodyType: "Sedan",
    description: "The Toyota Camry combines a spacious interior with a smooth ride and advanced safety features, making it a reliable choice for families and commuters alike."
  },
  {
    id: 15,
    brand: "Toyota",
    rating: 90,
    modelName: "Corolla",
    imgUrl: img15,
    price: "1,000,000",
    category: "Toyota",
    year: "2023",
    dealer: "All Cars",
    speed: "18kmpl",
    gps: "GPS Navigation",
    seatType: "Cloth seats",
    automatic: "Automatic",
    bodyType: "Sedan",
    description: "Known for its efficiency and dependability, the Toyota Corolla offers a comfortable ride with excellent fuel economy, making it a popular choice among compact sedans."
  },
  {
    id: 16,
    brand: "Toyota",
    rating: 98,
    modelName: "RAV4",
    imgUrl: img16,
    category: "Toyota",
    year: "2022",
    dealer: "All Cars",
    price: "4,000,000",
    speed: "16kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    bodyType: "SUV",
    description: "The Toyota RAV4 is a versatile SUV with a robust design, spacious interior, and advanced technology, perfect for both city driving and off-road adventures."
  },
  {
    id: 17,
    brand: "Toyota",
    rating: 93,
    modelName: "Highlander",
    imgUrl: img17,
    year: "2024",
    dealer: "All Cars",
    price: "5,000,000",
    speed: "14kmpl",
    gps: "GPS Navigation",
    seatType: "Leather seats",
    automatic: "Automatic",
    category: "Toyota",
    bodyType: "SUV",
    description: "The Toyota Highlander offers a powerful V6 engine, a refined interior, and a host of safety features, making it an excellent choice for families seeking a mid-size SUV."
  },
  {
    id: 18,
    brand: "Toyota",
    rating: 92,
    modelName: "Prius",
    imgUrl: img18,
    year: "2022",
    dealer: "All Cars",
    price: "3,000,000",
    speed: "22kmpl",
    gps: "GPS Navigation",
    seatType: "Cloth seats",
    automatic: "Automatic",
    category: "Toyota",
    bodyType: "Hatchback",
    description: "The Toyota Prius is a pioneer in hybrid technology, delivering outstanding fuel efficiency and eco-friendly performance, along with a comfortable and tech-savvy interior."
  },
  /*========BMW===========*/
  {
    id: 1,
    brand: "BMW",
    rating: 95,
    modelName: "3 Series",
    imgUrl: img19,
    price: "4,000,000",
    year: "2023",
    dealer: 'BMW Autobahn',
    speed: "15kmpl",
    gps: "GPS Navigation",
    seatType: "Leather seats",
    automatic: "Automatic",
    category: "BMW",
    bodyType: "Sedan",
    description: "The BMW 3 Series combines performance and luxury, featuring advanced technology, a dynamic driving experience, and a premium interior."
  },
  {
    id: 2,
    brand: "BMW",
    rating: 97,
    modelName: "X5",
    imgUrl: img20,
    price: "5,000,000",
    year: "2022",
    dealer: 'BMW Autobahn',
    speed: "12kmpl",
    gps: "GPS Navigation",
    seatType: "Leather seats",
    automatic: "Automatic",
    category: "BMW",
    bodyType: "SUV",
    description: "The BMW X5 is a versatile SUV offering a blend of performance, luxury, and technology, perfect for both city driving and off-road adventures."
  },
  {
    id: 3,
    brand: "BMW",
    rating: 93,
    modelName: "i8",
    imgUrl: img21,
    price: "6,000,000",
    year: "2023",
    dealer: 'BMW Autobahn',
    speed: "50kmpl",
    gps: "GPS Navigation",
    seatType: "Leather seats",
    automatic: "Automatic",
    category: "BMW",
    bodyType: "Sports Car",
    description: "The BMW i8 is a futuristic sports car with hybrid technology, delivering thrilling performance, cutting-edge design, and remarkable fuel efficiency."
  },
  /*==================NISSAN=============*/
  {
    id: 4,
    brand: "Nissan",
    rating: 90,
    modelName: "Altima",
    imgUrl: img22,
    price: "3,000,000",
    year: "2023",
    dealer: ' Nissan Tiniwisan Highway',
    speed: "18kmpl",
    gps: "GPS Navigation",
    seatType: "Cloth seats",
    automatic: "Automatic",
    category: "Nissan",
    bodyType: "Sedan",
    description: "The Nissan Altima offers a balanced ride with efficient performance, advanced safety features, and a comfortable, well-equipped interior."
  },
  {
    id: 5,
    brand: "Nissan",
    rating: 88,
    modelName: "Rogue",
    imgUrl: img23,
    price: "3,000,000",
    year: "2024",
    dealer: 'Nissan Tiniwisan Highway',
    speed: "14kmpl",
    gps: "GPS Navigation",
    seatType: "Cloth seats",
    automatic: "Automatic",
    category: "Nissan",
    bodyType: "SUV",
    description: "The Nissan Rogue is a popular compact SUV known for its spacious interior, advanced safety technologies, and efficient performance."
  },
  {
    id: 6,
    brand: "Nissan",
    rating: 91,
    modelName: "GT-R",
    imgUrl: img24,
    price: "7,000,000",
    year: "2022",
    dealer: 'Nissan Tiniwisan Highway',
    speed: "10kmpl",
    gps: "GPS Navigation",
    seatType: "Leather seats",
    automatic: "Automatic",
    category: "Nissan",
    bodyType: "Sports Car",
    description: "The Nissan GT-R is a high-performance sports car with a reputation for speed and power, featuring advanced technology and a thrilling driving experience."
  }
];

export default modelData;
