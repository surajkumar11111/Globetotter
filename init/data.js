const sampleListings = [
  {
    title: "Cozy Stay in Besant Nagar",
    description:
      "A comfortable and stylish stay near Besant Nagar Beach, perfect for families and solo travelers looking to explore Chennai.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1695124568213-f4071fbf516f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4200,
    location: "Besant Nagar, Chennai",
    country: "India",
    reviews: [],
    geometry: { type: 'Point', coordinates: [80.2712, 13.0012] },
    category: "homes",
  },
  {
    title: "Penthouse with City Views in Anna Nagar",
    description:
      "Enjoy panoramic views of Chennai from this modern penthouse in Anna Nagar. Ideal for urban explorers and business travelers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1580968862804-1f50b4836f82?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 5300,
    location: "Anna Nagar, Chennai",
    country: "India",
    reviews: [],
    geometry: { type: 'Point', coordinates: [80.2106, 13.0865] },
    category: "iconic cities",
  },
  {
    title: "Heritage Stay near Mylapore",
    description:
      "Immerse yourself in the cultural heart of Chennai with a stay near Mylapore, known for its temples and vibrant traditions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1562213773-77f4c4251067?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4800,
    location: "Mylapore, Chennai",
    country: "India",
    reviews: [],
    geometry: { type: 'Point', coordinates: [80.2685, 13.0355] },
    category: "homes",
  },
  {
    title: "Luxury Beachfront Villa in ECR",
    description:
      "Experience the ultimate luxury with this stunning beachfront villa located on the scenic East Coast Road (ECR) in Chennai. Perfect for a weekend getaway.",
    image: {
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1657302157898-eda546941dde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 7000,
    location: "Chennai",
    country: "India",
    reviews: [],
    geometry: { type: 'Point', coordinates: [80.2743, 13.0827] },
    category: "beach",
  },
  {
    title: "Boutique Stay in Hauz Khas",
    description:
      "Explore the vibrant neighborhood of Hauz Khas with a boutique stay that blends modern design with historic surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1563872764154-8e8d5d2f5c66?q=80&w=2111&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 5200,
    location: "Hauz Khas",
    country: "India",
    reviews: [],
    geometry: { type: 'Point', coordinates: [77.1938, 28.5535] },
    category: "homes",
  },
  {
    title: "Luxury Apartment in Connaught Place",
    description:
      "Stay in a modern luxury apartment in the heart of Connaught Place, close to shopping and nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1609338966656-926be552950d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 6000,
    location: "Connaught Place",
    country: "India",
    reviews: [],
    geometry: { type: 'Point', coordinates: [77.2197, 28.6315] },
    category: "iconic cities",
  },
  {
    title: "Heritage Home in Panjim",
    description:
      "Discover the charm of Old Goa with a stay in a heritage home in Panjim, surrounded by Portuguese architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1648367805197-1dc0557a5aca?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4800,
    location: "Panjim",
    country: "India",
    reviews: [],
    geometry: { type: 'Point', coordinates: [73.8278, 15.4909] },
    category: "homes",
  },
  {
    title: "Luxury Villa in Calangute",
    description:
      "Stay in a luxurious villa near Calangute Beach, offering modern amenities and a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1701421016474-09b19faa9f77?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 5500,
    location: "Calangute",
    country: "India",
    reviews: [],
    geometry: { type: 'Point', coordinates: [73.7646, 15.5403] },
    category: "beach",
  },
  {
    title: "Jungle Stay in Betla National Park",
    description:
      "Experience wildlife and nature in the heart of Betla National Park with this unique jungle stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4000,
    location: "Betla National Park",
    country: "India",
    reviews: [],
    geometry: { type: 'Point', coordinates: [84.2143, 23.8984] },
    category: "camping",
  },
  {
    title: "Lakeview Stay in Ranchi",
    description:
      "Enjoy a serene stay with stunning views of Kanke Dam in Ranchi, the capital city of Jharkhand.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1645380562442-a64c2a7695de?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3700,
    location: "Ranchi",
    country: "India",
    reviews: [],
    geometry: { type: 'Point', coordinates: [85.3096, 23.3441] },
    category: "homes",
  },
  {
    title: "Hilltop Cottage in Ooty",
    description:
      "Escape to a charming hilltop cottage in Ooty, surrounded by lush greenery and misty landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1706706112876-13e1d9ed1731?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4600,
    location: "Ooty",
    country: "India",
    reviews: [],
    geometry: { type: 'Point', coordinates: [76.6932, 11.4064] },
    category: "mountains",
  },
  {
    title: "Heritage Stay in Madurai",
    description:
      "Stay in a heritage home near the famous Meenakshi Temple in Madurai, a city steeped in history and culture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1723110994499-df46435aa4b3?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4200,
    location: "Madurai",
    country: "India",
    reviews: [],
    geometry: { type: 'Point', coordinates: [78.1198, 9.9252] },
    category: "homes",
  },
  {
    title: "Beachfront Villa in Mahabalipuram",
    description:
      "Relax in a luxurious beachfront villa overlooking the Bay of Bengal in the historic town of Mahabalipuram. Perfect for couples and families.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1696568417677-3978f7d85144?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 5000,
    location: "Mahabalipuram",
    country: "India",
    reviews: [],
    geometry: { type: 'Point', coordinates: [80.1709, 12.6224] },
    category: "beach",
  },
  {
    title: "Eco Lodge in Bastar",
    description:
      "Immerse yourself in the tribal culture and natural beauty of Bastar with a stay in this eco-friendly lodge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533720335246-5d4e8d662010?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4000,
    location: "Bastar",
    country: "India",
    reviews: [],
    geometry: { type: 'Point', coordinates: [81.951674, 19.080444] },
    category: "farms",
  },
  {
    title: "Waterfall Camp in Chitrakote",
    description:
      "Stay near the majestic Chitrakote Falls, often referred to as the Niagara of India. Perfect for adventure and nature enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1621872315260-d29289474c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D",
    },
    price: 4700,
    location: "Chitrakote",
    country: "India",
    reviews: [],
    geometry: { type: 'Point', coordinates: [81.658281, 18.988369] },
    category: "camping",
  },
  {
    title: "Heritage Homestay in Nalanda",
    description:
      "Explore the rich history of Nalanda with a stay in this traditional heritage homestay, located close to ancient ruins.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1543341724-c6f823532cac?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3900,
    location: "Nalanda",
    country: "India",
    reviews: [],
    geometry: { type: 'Point', coordinates: [85.443819, 25.126990] },
    category: "homes",
  },


  {
    "title": "Spiritual Stay in Bodh Gaya",
    "description": "Stay near the iconic Mahabodhi Temple in Bodh Gaya, a serene retreat for spiritual seekers and history enthusiasts.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1633019704526-b14ab32867af?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 3800,
    "location": "Bodh Gaya",
    "country": "India",
    "reviews": [],
    "geometry": { "type": "Point", "coordinates": [84.991537, 24.695608] },
    "category": "iconic cities"
  },
  {
    "title": "Riverfront Lodge in Guwahati",
    "description": "Stay by the mighty Brahmaputra River in Guwahati. This lodge offers a peaceful escape with scenic views and rich cultural experiences.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 4200,
    "location": "Guwahati",
    "country": "India",
    "reviews": [],
    "geometry": { "type": "Point", "coordinates": [91.736237, 26.144517] },
    "category": "other"
  },
  {
    "title": "Tea Garden Stay in Dibrugarh",
    "description": "Unwind amidst the lush greenery of Assam's tea gardens in Dibrugarh. Perfect for relaxation and tea enthusiasts.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 4500,
    "location": "Dibrugarh",
    "country": "India",
    "reviews": [],
    "geometry": { "type": "Point", "coordinates": [94.902893, 27.472772] },
    "category": "farms"
  },
  {
    "title": "Heritage Stay in Amaravati",
    "description": "Experience the cultural charm of Amaravati, staying in a heritage home surrounded by ancient Buddhist stupas and tranquil river views.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 3700,
    "location": "Amaravati",
    "country": "India",
    "reviews": [],
    "geometry": { "type": "Point", "coordinates": [80.515156, 16.540248] },
    "category": "homes"
  },
  {
    "title": "Beachside Retreat in Vizag",
    "description": "Enjoy a luxurious beachfront stay in the city of Visakhapatnam. Perfect for families and couples, this retreat offers breathtaking views of the Bay of Bengal.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1707833685160-1993ddb49fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fFZpemFnfGVufDB8fDB8fHwwhttps://images.unsplash.com/photo-1597235949076-e53e0c0e4b84?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 4000,
    "location": "Visakhapatnam",
    "country": "India",
    "reviews": [],
    "geometry": { "type": "Point", "coordinates": [83.218481, 17.686816] },
    "category": "beach"
  },
  {
    "title": "Luxury Houseboat in Alleppey",
    "description": "Cruise through the serene backwaters of Alleppey with a stay in this luxurious houseboat. Enjoy traditional Kerala cuisine and stunning waterway views.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1593417033942-bcdf26b74700?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 4700,
    "location": "Alleppey",
    "country": "India",
    "reviews": [],
    "geometry": { "type": "Point", "coordinates": [76.338848, 9.498066] },
    "category": "boats"
  },
  {
    "title": "Desert Camp in Jaisalmer",
    "description": "Experience the golden sands of the Thar Desert with this luxurious desert camp in Jaisalmer. Perfect for stargazing and camel rides under the vast desert sky.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1700756102943-fa388b2ed119?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 5600,
    "location": "Jaisalmer",
    "country": "India",
    "reviews": [],
    "geometry": { "type": "Point", "coordinates": [70.908344, 26.915748] },
    "category": "deserts"
  },
  {
    "title": "Beachfront Villa in Goa",
    "description": "Wake up to the sound of waves in this luxurious beachfront villa in Goa. Perfect for beach lovers, this stay offers direct access to pristine sands and crystal-clear waters.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 6800,
    "location": "Goa",
    "country": "India",
    "reviews": [],
    "geometry": { "type": "Point", "coordinates": [73.818000, 15.299326] },
    "category": "beach"
  },
  {
    "title": "Mountain Cabin Retreat in Manali",
    "description": "Escape to the serene mountains of Himachal Pradesh with this cozy cabin in Manali. Surrounded by snow-capped peaks, this retreat is perfect for adventure seekers.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1677820915366-27d887c9b872?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 3800,
    "location": "Manali",
    "country": "India",
    "reviews": [],
    "geometry": { "type": "Point", "coordinates": [77.188708, 32.243187] },
    "category": "mountains"
  },
  {
    "title": "Houseboat Retreat in Srinagar",
    "description": "Relax and unwind in a traditional houseboat on Dal Lake in Srinagar. Surrounded by the tranquil waters and stunning mountain views, this stay is one of a kind.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1688313840486-9f8b1c32e033?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 5200,
    "location": "Srinagar",
    "country": "India",
    "reviews": [],
    "geometry": { "type": "Point", "coordinates": [74.797372, 34.083656] },
    "category": "boats"
  },
  {
    "title": "Treetop Adventure Lodge in Kerala",
    "description": "Nestled in the lush greenery of Kerala's rainforests, this treetop lodge offers a serene escape for nature enthusiasts. Enjoy the tranquil atmosphere and breathtaking views.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1686682778924-536de8859a54?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 4500,
    "location": "Kerala",
    "country": "India",
    "reviews": [],
    "geometry": { "type": "Point", "coordinates": [76.271083, 10.850516] },
    "category": "farms"
  } 
];

module.exports = { data: sampleListings };