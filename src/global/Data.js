export const filterData = [
  {
    name: 'Fast food',
    image: require('../assets/Fastfood.png'),
    id: '0',
  },
  {name: 'Burgers', image: require('../assets/Burgers.png'), id: '1'},
  {name: 'Salads', image: require('../assets/Salads.png'), id: '2'},
  {name: 'Hotdog', image: require('../assets/Hotdog.png'), id: '3'},
  {name: 'Chinese', image: require('../assets/Chinese.png'), id: '4'},
  {name: 'Mexican', image: require('../assets/Mexican.png'), id: '5'},
  {name: 'Sea food', image: require('../assets/Seafood.png'), id: '6'},
];

export const filterData2 = [
  {
    name: 'Fast food',
    image:
      'https://foodloversmarket.co.za/wp-content/uploads/website_recipe_1140x641_27.05.20-2-992x558.jpg',
    id: '0',
  },
  {
    name: 'Burgers',
    image:
      'https://popmenucloud.com/nrlshiqf/ead92711-86a5-41ec-ac2a-1bff53ba944d.jpg',
    id: '1',
  },
  {
    name: 'Salads',
    image:
      'https://healthyrecipesblogs.com/wp-content/uploads/2022/06/cobb-salad-1-2022.jpg',
    id: '2',
  },
  {
    name: 'Hotdog',
    image:
      'https://img.taste.com.au/QY9SjlKM/taste/2020/06/july20_mexican-style-hotdogs-162774-1.jpg',
    id: '3',
  },
  {
    name: 'Chinese',
    image:
      'https://www.greenqueen.com.hk/wp-content/uploads/2022/02/orijit-chatterjee-wEBg_pYtynw-unsplash-scaled.jpg',
    id: '4',
  },
  {
    name: 'Mexican',
    image:
      'https://myfoodbook.com.au/sites/default/files/collections_image/mexican_food_recipes.jpg',
    id: '5',
  },
  {
    name: 'Sea food',
    image:
      'https://www.licious.in/blog/wp-content/uploads/2022/02/shutterstock_1773695441-min.jpg',
    id: '6',
  },
  {
    name: 'Chinese Food',
    image:
      'https://www.crainfordjacksonville.com/blogs/3219/wp-content/uploads/2021/01/Craving_Chinese_Food_Here_Are_the_4_Best_Spots_in_Jacksonville_637461263858622448.png',
    id: '7',
  },
  {
    name: 'Mexican pie',
    image:
      'https://img.taste.com.au/wrkJw2gW/taste/2016/11/mexican-tortilla-pie-32930-1.jpeg',
    id: '8',
  },
  {
    name: 'Ocean dish',
    image:
      'https://www.womenstuff.co.za/wp-content/uploads/2021/12/OB-Sea-Bream_header.jpeg',
    id: '9',
  },
];

export const restaurantsData = [
  {
    restaurantsName: 'Mc Donalds',
    farAway: '21.2',
    businessAddress: '22 London street, Cape Town',
    images: `https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-1091281658-500px.jpg?_=74029`,
    averageReview: 4.9,
    numberOfReview: 272,
    coordinates: {lat: -26.1888612, lng: 28.246325},
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    foodType: 'Burgers,Wraps,Milkshakes...',
    productData: [
      {
        name: 'Hand cut chip',
        price: 29.3,
        image: `https://theeastcoastkitchen.com/wp-content/uploads/2022/03/FISH-AND-CHIPS-21-1-500x500.jpg`,
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image: `https://www.rescuedogkitchen.com/wp-content/uploads/2021/11/IMG_3192.jpg`,
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image: `https://mccormick.widen.net/content/ufuxobl3aq/jpeg/Franks_Photo_Spicy_Grilled_Chicken_Cheeseburger_with_the_Works_Horizontal_2000x1125_180321.jpg?w=2000&h=1125&keep=c&crop=yes&quality=80&x.app=portals`,
      },
    ],
    id: 0,
  },

  {
    restaurantsName: 'KFC',
    farAway: '12.7',
    businessAddress: '22 London street, Cape Town',
    images: `https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/mcdonalds-tray.jpg?quality=82&strip=1`,
    averageReview: 4.3,
    numberOfReview: 306,
    coordinates: {lat: -26.1891648, lng: 28.2441808},
    discount: 20,
    deliveryTime: 30,
    collectTime: 10,
    foodType: 'Chicken,Chicken wing...',
    productData: [
      {
        name: 'Hand cut chip',
        price: 29.3,
        image: `https://theeastcoastkitchen.com/wp-content/uploads/2022/03/FISH-AND-CHIPS-21-1-500x500.jpg`,
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image: `https://www.rescuedogkitchen.com/wp-content/uploads/2021/11/IMG_3192.jpg`,
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image: `https://mccormick.widen.net/content/ufuxobl3aq/jpeg/Franks_Photo_Spicy_Grilled_Chicken_Cheeseburger_with_the_Works_Horizontal_2000x1125_180321.jpg?w=2000&h=1125&keep=c&crop=yes&quality=80&x.app=portals`,
      },
    ],
    id: 1,
  },

  {
    restaurantsName: 'Steers',
    farAway: '5',
    businessAddress: '17 olivia Rd, Johannesburg',
    images: `https://www.mendetails.com/wp-content/uploads/2021/05/Cover-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%B4-fish-and-chips-may21.jpg`,
    averageReview: 4.9,
    numberOfReview: 1272,
    coordinates: {lat: -26.1886781, lng: 28.244879},
    discount: 12,
    deliveryTime: 25,
    collectTime: 15,
    foodType: 'Flame grilled beef Burgers...',
    productData: [
      {
        name: 'Hand cut chip',
        price: 29.3,
        image: `https://theeastcoastkitchen.com/wp-content/uploads/2022/03/FISH-AND-CHIPS-21-1-500x500.jpg`,
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image: `https://www.rescuedogkitchen.com/wp-content/uploads/2021/11/IMG_3192.jpg`,
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image: `https://mccormick.widen.net/content/ufuxobl3aq/jpeg/Franks_Photo_Spicy_Grilled_Chicken_Cheeseburger_with_the_Works_Horizontal_2000x1125_180321.jpg?w=2000&h=1125&keep=c&crop=yes&quality=80&x.app=portals`,
      },
    ],
    id: 2,
  },

  {
    restaurantsName: 'Roman Pizza',
    farAway: '7',
    businessAddress: '15 Atlas Rd, Kempton Park',
    images: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg`,
    averageReview: 4.3,
    numberOfReview: 700,
    coordinates: {lat: -26.1845336, lng: 28.2481691},
    discount: null,
    deliveryTime: 20,
    collectTime: 10,
    foodType: 'Chicken pizza, Vegetarian pizza...',
    productData: [
      {
        name: 'Hand cut chip',
        price: 29.3,
        image: `https://theeastcoastkitchen.com/wp-content/uploads/2022/03/FISH-AND-CHIPS-21-1-500x500.jpg`,
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image: `https://www.rescuedogkitchen.com/wp-content/uploads/2021/11/IMG_3192.jpg`,
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image: `https://mccormick.widen.net/content/ufuxobl3aq/jpeg/Franks_Photo_Spicy_Grilled_Chicken_Cheeseburger_with_the_Works_Horizontal_2000x1125_180321.jpg?w=2000&h=1125&keep=c&crop=yes&quality=80&x.app=portals`,
      },
    ],
    id: 3,
  },
];

export const productData = [
  {
    name: 'Hand cut chips',
    price: 29.3,
    image:
      'https://theeastcoastkitchen.com/wp-content/uploads/2022/03/FISH-AND-CHIPS-21-1-500x500.jpg',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',
    id: 0,
  },
  {
    name: 'Big Mac',
    price: 50.8,
    image:
      'https://www.foodandwine.com/thmb/8N5jLutuTK4TDzpDkhMfdaHLZxI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/McDonalds-Hacks-Menu-FT-1-BLOG0122-4ac9d62f6c9143be8da3d0a8553348b0.jpg',
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    id: 1,
  },
  {
    name: 'Chicken Burger',
    price: 70,
    image:
      'https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/3/7/3/CCKEL301_sesame-ginger-chicken_s4x3.jpg.rend.hgtvcom.616.462.suffix/1532967448598.jpeg',
    details: '',
    id: 2,
  },

  {
    name: 'Hand cut chips',
    price: 29.3,
    image:
      'https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/ecfdusht/6a62bd34-86f3-4031-b50b-05e604dc72e8',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',
    id: 3,
  },
  {
    name: 'Big Mac',
    price: 70.2,
    image:
      'https://www.rescuedogkitchen.com/wp-content/uploads/2021/11/IMG_3192.jpg',
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    id: 4,
  },
  {
    name: 'Chicken Burger',
    price: 70,
    image:
      'https://mccormick.widen.net/content/ufuxobl3aq/jpeg/Franks_Photo_Spicy_Grilled_Chicken_Cheeseburger_with_the_Works_Horizontal_2000x1125_180321.jpg?w=2000&h=1125&keep=c&crop=yes&quality=80&x.app=portals',
    details: '',
    id: 5,
  },
];

export const menuData = [
  {title: 'BEEF', special: false, key: 0},
  {title: 'CHICKEN', special: false, key: 1},
  {title: 'VEGGIE BURGER', special: false, key: 2},
  {title: 'FRIES& CORN', special: false, key: 3},
  {title: 'SALADS', special: false, key: 4},
  {title: 'HAPPY MEALS', special: false, key: 5},
  {title: 'SAHRE BOX', special: false, key: 6},
  {title: 'MILKSHAKES', special: false, key: 7},
  {title: 'COLD DRINKS', special: false, key: 8},
  {title: 'DESSERTS', special: false, key: 9},
  {title: 'HOT DRINKS', special: false, key: 10},
];

export const specialData = [
  {title: 'LIMITED OFFER', key: 0},
  {title: 'GO CHILLI', key: 1},
  {title: 'GO CHEESE', key: 2},
  {title: 'MCCHICKEN DELUXE PROMO', key: 3},
];

//tab menu
export const menu = [
  {key: 1, title: 'BEEF'},
  {key: 2, title: 'CHICKEN'},
  {key: 3, title: 'VEGGIE BURGER'},
  {key: 4, title: 'SHARE BOX'},
  {key: 5, title: 'Happy Meals'},
  {key: 6, title: 'Fries'},
  {key: 7, title: 'Sides'},
  {key: 8, title: 'Milkshakes'},
];

export const menuDetailedData = [
  {
    meal: 'Big Mac',
    price: 70.2,
    image:
      'https://www.rescuedogkitchen.com/wp-content/uploads/2021/11/IMG_3192.jpg',
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 10},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 11},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 12},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 13},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 14},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 15},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 16},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 18},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 21},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 22},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 23},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 24},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 26},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 30},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 31},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 32},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 33},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 34},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 35},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 36},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 38},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41},
      ],
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 0,
  },

  {
    meal: 'Hand cut chips',
    price: 29.3,
    image:
      'https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/ecfdusht/6a62bd34-86f3-4031-b50b-05e604dc72e8',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],
    minimum_quatity: [2, 1, 2, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 1,
  },

  {
    meal: 'Chicken Burger',
    price: 45.7,
    image:
      'https://mccormick.widen.net/content/ufuxobl3aq/jpeg/Franks_Photo_Spicy_Grilled_Chicken_Cheeseburger_with_the_Works_Horizontal_2000x1125_180321.jpg?w=2000&h=1125&keep=c&crop=yes&quality=80&x.app=portals',
    details: 'two 100% fresh beef burger patties that are hot',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 2,
  },

  {
    meal: 'Big Mac',
    price: 50.8,
    image:
      'https://brandinside.asia/wp-content/uploads/2018/07/1024px-Big_Mac_Menu_NL.jpg',
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 3,
  },

  {
    meal: 'Hand cut chips',
    price: 29.3,
    image:
      'https://d2j6dbq0eux0bg.cloudfront.net/images/37757214/1692297792.jpg',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',

    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],

    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 4,
  },

  {
    meal: 'Big Mac',
    price: 70.2,
    image:
      'https://www.yorkshireeveningpost.co.uk/images-i.jpimedia.uk/imagefetch/https://jpgreatcontent.co.uk/wp-content/uploads/2021/08/shutterstock_1055800262.jpg?width=1200&enable=upscale',
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 10},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 11},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 12},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 13},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 14},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 15},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 16},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 18},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 21},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 22},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 23},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 24},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 26},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 30},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 31},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 32},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 33},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 34},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 35},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 36},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 38},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41},
      ],
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 5,
  },
];
