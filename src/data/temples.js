import tirupatiImg from "../assets/tirupati.jpg";
import defaultImg from "../assets/default.png";

export const stateInfo = {
  "Andhra Pradesh": {
    description:
      "Andhra Pradesh is one of the most spiritually vibrant states in India, known for its ancient temples, sacred traditions, and deep-rooted religious culture. The state is home to the world-famous Tirupati Balaji Temple, attracting millions of devotees annually. Apart from Tirupati, temples like Srisailam and Kanaka Durga reflect the diversity of worship dedicated to Lord Shiva, Vishnu, and Goddess Durga. The temple architecture features towering gopurams, intricate carvings, and historical significance. Festivals and rituals are celebrated with immense devotion, making Andhra Pradesh a key pilgrimage destination."
  },
  "Telangana": {
    description:
      "Telangana offers a blend of ancient temples and modern spirituality. Known for temples like Yadadri and Bhadrachalam, the state attracts pilgrims throughout the year. The temples reflect rich cultural heritage and devotion."
  },
  "Tamil Nadu": {
    description:
      "Tamil Nadu is renowned for its grand temple architecture and spiritual importance. The temples showcase Dravidian style with majestic gopurams and vibrant sculptures."
  },
  "Karnataka": {
    description:
      "Karnataka is home to ancient temples known for their historical and architectural beauty. From coastal temples to heritage sites, the state offers diverse spiritual experiences."
  },
  "Kerala": {
    description:
      "Kerala’s temples are known for their serene atmosphere and unique traditions. Surrounded by nature, these temples provide a peaceful spiritual experience."
  },
  "Odisha": {
    description:
      "Odisha is famous for its grand temples like Jagannath Temple. It reflects rich traditions and attracts pilgrims from all over India."
  },
  "Uttarakhand": {
    description:
      "Uttarakhand, also called Devbhoomi, is home to sacred Himalayan temples like Kedarnath and Badrinath, making it one of the holiest regions in India."
  }
};

export const templesData = {
  "Andhra Pradesh": [
    {
      id: "tirupati",
      name: "Tirupati Balaji Temple",
      deity: "Vishnu",
      image: tirupatiImg,
      description:
        "One of the most visited temples in the world dedicated to Lord Venkateswara.",
      history:
        "Tirupati Balaji Temple, located in the Tirumala hills, has a history that dates back several centuries and is deeply rooted in Hindu mythology and tradition. The temple is dedicated to Lord Venkateswara, an incarnation of Lord Vishnu, who is believed to have appeared here to save mankind from the trials of the Kali Yuga. According to legend, Lord Vishnu took residence in Tirumala to bless devotees and relieve them from suffering. The temple has been mentioned in ancient texts such as the Vedas and Puranas. Over centuries, dynasties like the Pallavas, Cholas, and Vijayanagara Empire contributed to its expansion. The temple is now one of the richest religious institutions. Devotees offer hair as a symbol of devotion, and the famous laddu prasadam is widely known.",
      facts: ["Richest temple", "Millions visit yearly", "Famous laddu"],
      bestTime: "Sep–Feb",
      timings: "3 AM – 11 PM",
      dressCode: "Traditional",
      location: { lat: 13.6833, lng: 79.347 },
      popularity: 5
    },
    {
      id: "srisailam",
      name: "Srisailam Temple",
      deity: "Shiva",
      image: defaultImg,
      description: "One of the 12 Jyotirlingas of Lord Shiva.",
      history: "Ancient temple with strong mythological importance.",
      facts: ["Jyotirlinga", "Hill temple"],
      bestTime: "Oct–Mar",
      timings: "6 AM – 9 PM",
      dressCode: "Traditional",
      location: { lat: 16.0722, lng: 78.8687 },
      popularity: 4
    },
    {
      id: "kanaka-durga",
      name: "Kanaka Durga Temple",
      deity: "Devi",
      image: defaultImg,
      description: "Famous Durga temple in Vijayawada.",
      history: "Important Shakti temple attracting thousands.",
      facts: ["Dasara famous"],
      bestTime: "Oct",
      timings: "5 AM – 9 PM",
      dressCode: "Traditional",
      location: { lat: 16.5062, lng: 80.648 },
      popularity: 4
    }
  ],

  "Telangana": [
    {
      id: "yadadri",
      name: "Yadadri Temple",
      deity: "Vishnu",
      image: defaultImg,
      description: "Temple of Lord Narasimha.",
      history: "Important pilgrimage site in Telangana.",
      facts: ["Recently renovated"],
      bestTime: "Nov–Feb",
      timings: "6 AM – 8 PM",
      dressCode: "Traditional",
      location: { lat: 17.585, lng: 78.943 },
      popularity: 5
    },
    {
      id: "bhdrachalam",
      name: "Bhadrachalam Temple",
      deity: "Rama",
      image: defaultImg,
      description: "Dedicated to Lord Rama.",
      history: "Strong connection with Ramayana.",
      facts: ["Sri Rama temple"],
      bestTime: "Oct–Mar",
      timings: "5 AM – 9 PM",
      dressCode: "Traditional",
      location: { lat: 17.668, lng: 80.893 },
      popularity: 5
    },
    {
      id: "chilkur",
      name: "Chilkur Balaji Temple",
      deity: "Vishnu",
      image: defaultImg,
      description: "Visa Balaji Temple.",
      history: "Popular among students and travelers.",
      facts: ["108 pradakshinas"],
      bestTime: "All year",
      timings: "5 AM – 8 PM",
      dressCode: "Decent wear",
      location: { lat: 17.3587, lng: 78.2988 },
      popularity: 4
    }
  ],

  "Tamil Nadu": [
    {
      id: "meenakshi",
      name: "Meenakshi Temple",
      deity: "Devi",
      image: defaultImg,
      description: "Iconic temple in Madurai.",
      history: "Famous for Dravidian architecture.",
      facts: ["Colorful towers"],
      bestTime: "Oct–Mar",
      timings: "5 AM – 10 PM",
      dressCode: "Traditional",
      location: { lat: 9.9195, lng: 78.1193 },
      popularity: 5
    },
    {
      id: "rameswaram",
      name: "Ramanathaswamy Temple",
      deity: "Shiva",
      image: defaultImg,
      description: "Char Dham site.",
      history: "Linked to Lord Rama.",
      facts: ["Longest corridor"],
      bestTime: "Oct–Apr",
      timings: "5 AM – 9 PM",
      dressCode: "Traditional",
      location: { lat: 9.2881, lng: 79.3129 },
      popularity: 5
    },
    {
      id: "chidambaram",
      name: "Chidambaram Temple",
      deity: "Shiva",
      image: defaultImg,
      description: "Nataraja temple.",
      history: "Famous for cosmic dance.",
      facts: ["Nataraja form"],
      bestTime: "Nov–Feb",
      timings: "6 AM – 10 PM",
      dressCode: "Traditional",
      location: { lat: 11.3996, lng: 79.6936 },
      popularity: 4
    }
  ],

  "Karnataka": [
    {
      id: "udupi",
      name: "Udupi Krishna Temple",
      deity: "Krishna",
      image: defaultImg,
      description: "Famous Krishna temple.",
      history: "Founded by Madhvacharya.",
      facts: ["Unique window darshan"],
      bestTime: "All year",
      timings: "5 AM – 9 PM",
      dressCode: "Traditional",
      location: { lat: 13.3409, lng: 74.7421 },
      popularity: 5
    },
    {
      id: "murudeshwar",
      name: "Murudeshwar Temple",
      deity: "Shiva",
      image: defaultImg,
      description: "Giant Shiva statue.",
      history: "Coastal temple with scenic beauty.",
      facts: ["Second tallest Shiva statue"],
      bestTime: "Oct–Feb",
      timings: "6 AM – 8 PM",
      dressCode: "Decent wear",
      location: { lat: 14.094, lng: 74.484 },
      popularity: 5
    },
    {
      id: "hampi",
      name: "Virupaksha Temple",
      deity: "Shiva",
      image: defaultImg,
      description: "Ancient Hampi temple.",
      history: "Part of Vijayanagara Empire.",
      facts: ["UNESCO site"],
      bestTime: "Nov–Feb",
      timings: "6 AM – 6 PM",
      dressCode: "Decent wear",
      location: { lat: 15.335, lng: 76.46 },
      popularity: 4
    }
  ],

  "Kerala": [
    {
      id: "sabarimala",
      name: "Sabarimala Temple",
      deity: "Ayyappa",
      image: defaultImg,
      description: "Major pilgrimage temple.",
      history: "Strict rituals followed.",
      facts: ["Seasonal opening"],
      bestTime: "Nov–Jan",
      timings: "Seasonal",
      dressCode: "Black attire",
      location: { lat: 9.4325, lng: 77.085 },
      popularity: 5
    },
    {
      id: "guruvayur",
      name: "Guruvayur Temple",
      deity: "Krishna",
      image: defaultImg,
      description: "Dwarka of South.",
      history: "Ancient Krishna temple.",
      facts: ["Elephant sanctuary"],
      bestTime: "All year",
      timings: "4 AM – 9 PM",
      dressCode: "Traditional",
      location: { lat: 10.5946, lng: 76.0411 },
      popularity: 5
    },
    {
      id: "padmanabha",
      name: "Padmanabhaswamy Temple",
      deity: "Vishnu",
      image: defaultImg,
      description: "Richest temple.",
      history: "Hidden treasures found.",
      facts: ["Gold vaults"],
      bestTime: "Oct–Feb",
      timings: "5 AM – 7 PM",
      dressCode: "Strict traditional",
      location: { lat: 8.4828, lng: 76.943 },
      popularity: 5
    }
  ],

  "Odisha": [
    {
      id: "jagannath",
      name: "Jagannath Temple",
      deity: "Krishna",
      image: defaultImg,
      description: "Famous Rath Yatra temple.",
      history: "Major pilgrimage site.",
      facts: ["Rath Yatra"],
      bestTime: "June",
      timings: "5 AM – 10 PM",
      dressCode: "Traditional",
      location: { lat: 19.8047, lng: 85.8182 },
      popularity: 5
    },
    {
      id: "lingaraj",
      name: "Lingaraj Temple",
      deity: "Shiva",
      image: defaultImg,
      description: "Ancient temple.",
      history: "Classic Kalinga architecture.",
      facts: ["Old temple"],
      bestTime: "Oct–Mar",
      timings: "6 AM – 9 PM",
      dressCode: "Traditional",
      location: { lat: 20.238, lng: 85.833 },
      popularity: 4
    },
    {
      id: "konark",
      name: "Sun Temple",
      deity: "Surya",
      image: defaultImg,
      description: "UNESCO site.",
      history: "Built as chariot of Sun God.",
      facts: ["World heritage"],
      bestTime: "Nov–Feb",
      timings: "6 AM – 6 PM",
      dressCode: "Casual",
      location: { lat: 19.8876, lng: 86.0945 },
      popularity: 5
    }
  ],

  "Uttarakhand": [
    {
      id: "kedarnath",
      name: "Kedarnath Temple",
      deity: "Shiva",
      image: defaultImg,
      description: "Himalayan temple.",
      history: "Linked to Pandavas.",
      facts: ["High altitude"],
      bestTime: "May–Oct",
      timings: "4 AM – 9 PM",
      dressCode: "Warm clothes",
      location: { lat: 30.7352, lng: 79.0669 },
      popularity: 5
    },
    {
      id: "badrinath",
      name: "Badrinath Temple",
      deity: "Vishnu",
      image: defaultImg,
      description: "Char Dham temple.",
      history: "Sacred Vishnu shrine.",
      facts: ["Alaknanda river"],
      bestTime: "May–Oct",
      timings: "4 AM – 9 PM",
      dressCode: "Warm clothes",
      location: { lat: 30.7433, lng: 79.4938 },
      popularity: 5
    },
    {
      id: "gangotri",
      name: "Gangotri Temple",
      deity: "Ganga",
      image: defaultImg,
      description: "Source of Ganga.",
      history: "Sacred river origin temple.",
      facts: ["Glacier nearby"],
      bestTime: "May–Oct",
      timings: "6 AM – 8 PM",
      dressCode: "Warm clothes",
      location: { lat: 30.994, lng: 78.9398 },
      popularity: 4
    }
  ]
};