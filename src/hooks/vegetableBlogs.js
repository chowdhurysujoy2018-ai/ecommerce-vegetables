const vegetableBlogs = [
  {
    id: 1,
    title: "Tomato – The Heart-Friendly Vegetable",
    slug: "tomato-benefits",
    image: "https://images.unsplash.com/photo-1561136594-7f68413baa99",
    shortDesc: "Rich in antioxidants, tomatoes support heart health and glowing skin.",
    category: "Health",
    author: "Admin",
    date: "2026-03-01",
    content: `
Tomatoes are rich in lycopene, a powerful antioxidant.

Health Benefits:
- Improves heart health
- Protects against cancer
- Enhances skin glow

Usage:
Used in curries, salads, sauces, and juices.
    `
  },
  {
    id: 2,
    title: "Potato – Energy Booster",
    slug: "potato-benefits",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
    shortDesc: "A great source of carbohydrates for instant energy.",
    category: "Nutrition",
    author: "Admin",
    date: "2026-03-02",
    content: `
Potatoes are a staple food worldwide.

Health Benefits:
- Boosts energy
- Rich in potassium
- Supports digestion

Usage:
Fries, curries, snacks.
    `
  },
  {
    id: 3,
    title: "Carrot – Vision Booster",
    slug: "carrot-benefits",
    image: "https://images.unsplash.com/photo-1582515073490-dc4d4d6b2f1a",
    shortDesc: "Improves eyesight and boosts immunity.",
    category: "Health",
    author: "Admin",
    date: "2026-03-03",
    content: `
Carrots contain beta-carotene.

Health Benefits:
- Improves eyesight
- Strengthens immunity
- Good for skin

Usage:
Salads, juices, curries.
    `
  },
  {
    id: 4,
    title: "Spinach – Iron Rich Superfood",
    slug: "spinach-benefits",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb",
    shortDesc: "Loaded with iron and essential vitamins.",
    category: "Superfood",
    author: "Admin",
    date: "2026-03-04",
    content: `
Spinach is highly nutritious.

Health Benefits:
- Boosts hemoglobin
- Improves bone health
- Supports immunity

Usage:
Cooked dishes, soups, smoothies.
    `
  },
  {
    id: 5,
    title: "Broccoli – Cancer Fighter",
    slug: "broccoli-benefits",
    image: "https://images.unsplash.com/photo-1582515073490-dc4d4d6b2f1a",
    shortDesc: "Rich in compounds that reduce cancer risk.",
    category: "Health",
    author: "Admin",
    date: "2026-03-05",
    content: `
Broccoli is a cruciferous vegetable.

Health Benefits:
- Reduces cancer risk
- Supports digestion
- Detoxifies body

Usage:
Steamed, stir-fried, salads.
    `
  },

  {
    id: 6,
    title: "Onion – Natural Immunity Booster",
    slug: "onion-benefits",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510",
    shortDesc: "Onions help fight infections and boost immunity.",
    category: "Health",
    author: "Admin",
    date: "2026-03-06",
    content: `
Onions contain antioxidants and sulfur compounds.

Health Benefits:
- Boosts immunity
- Controls blood sugar
- Improves heart health
    `
  },
  {
    id: 7,
    title: "Garlic – Natural Antibiotic",
    slug: "garlic-benefits",
    image: "https://images.unsplash.com/photo-1615486363769-1c4dfc0e9c63",
    shortDesc: "Garlic is known for its powerful medicinal properties.",
    category: "Health",
    author: "Admin",
    date: "2026-03-07",
    content: `
Garlic has been used for centuries.

Health Benefits:
- Fights infections
- Lowers cholesterol
- Boosts immunity
    `
  },
  {
    id: 8,
    title: "Cabbage – Gut Friendly Vegetable",
    slug: "cabbage-benefits",
    image: "https://images.unsplash.com/photo-1584270354949-1f78c89c3a36",
    shortDesc: "Cabbage supports digestion and gut health.",
    category: "Health",
    author: "Admin",
    date: "2026-03-08",
    content: `
Cabbage is rich in fiber.

Health Benefits:
- Improves digestion
- Good for gut health
- Anti-inflammatory
    `
  },
  {
    id: 9,
    title: "Cauliflower – Low Carb Alternative",
    slug: "cauliflower-benefits",
    image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec",
    shortDesc: "A healthy low-carb substitute for many foods.",
    category: "Nutrition",
    author: "Admin",
    date: "2026-03-09",
    content: `
Cauliflower is versatile and nutritious.

Health Benefits:
- Supports weight loss
- Rich in vitamins
- Improves digestion
    `
  },
  {
    id: 10,
    title: "Brinjal (Eggplant) – Brain Health Booster",
    slug: "brinjal-benefits",
    image: "https://images.unsplash.com/photo-1604908176997-4316c9c78d02",
    shortDesc: "Supports brain function and heart health.",
    category: "Health",
    author: "Admin",
    date: "2026-03-10",
    content: `
Brinjal contains antioxidants.

Health Benefits:
- Improves brain function
- Supports heart health
- Rich in fiber
    `
  },

  {
    id: 11,
    title: "Capsicum – Vitamin C Powerhouse",
    slug: "capsicum-benefits",
    image: "https://images.unsplash.com/photo-1604908554007-26e80b2df3b1",
    shortDesc: "Rich in Vitamin C and antioxidants.",
    category: "Nutrition",
    author: "Admin",
    date: "2026-03-11",
    content: `
Capsicum is colorful and nutritious.

Health Benefits:
- Boosts immunity
- Improves skin
- Supports eye health
    `
  },
  {
    id: 12,
    title: "Peas – Protein Rich Vegetable",
    slug: "peas-benefits",
    image: "https://images.unsplash.com/photo-1584270354949-1f78c89c3a36",
    shortDesc: "Good source of plant protein.",
    category: "Nutrition",
    author: "Admin",
    date: "2026-03-12",
    content: `
Peas are small but powerful.

Health Benefits:
- High protein
- Supports digestion
- Boosts energy
    `
  },

  {
    id: 13,
    title: "Pumpkin – Immunity Booster",
    slug: "pumpkin-benefits",
    image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443",
    shortDesc: "Rich in vitamins and antioxidants.",
    category: "Health",
    author: "Admin",
    date: "2026-03-13",
    content: `
Pumpkin is highly nutritious.

Health Benefits:
- Boosts immunity
- Good for eyes
- Improves heart health
    `
  },
  {
    id: 14,
    title: "Radish – Detox Vegetable",
    slug: "radish-benefits",
    image: "https://images.unsplash.com/photo-1615485291234-7c3c7eca6e8c",
    shortDesc: "Helps detoxify the body.",
    category: "Health",
    author: "Admin",
    date: "2026-03-14",
    content: `
Radish cleanses the system.

Health Benefits:
- Detoxifies body
- Improves digestion
- Hydrates body
    `
  },

  {
    id: 15,
    title: "Beetroot – Blood Purifier",
    slug: "beetroot-benefits",
    image: "https://images.unsplash.com/photo-1604908177312-bb33d0c8f6d7",
    shortDesc: "Boosts hemoglobin and blood flow.",
    category: "Health",
    author: "Admin",
    date: "2026-03-15",
    content: `
Beetroot improves blood circulation.

Health Benefits:
- Purifies blood
- Boosts stamina
- Improves heart health
    `
  },

  {
    id: 16,
    title: "Cucumber – Hydration King",
    slug: "cucumber-benefits",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
    shortDesc: "Keeps body hydrated and fresh.",
    category: "Health",
    author: "Admin",
    date: "2026-03-16",
    content: `
Cucumber contains high water content.

Health Benefits:
- Hydrates body
- Good for skin
- Supports digestion
    `
  },

  {
    id: 17,
    title: "Sweet Corn – Energy Snack",
    slug: "sweet-corn-benefits",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510",
    shortDesc: "Tasty and energy-rich vegetable.",
    category: "Nutrition",
    author: "Admin",
    date: "2026-03-17",
    content: `
Sweet corn is delicious and healthy.

Health Benefits:
- Provides energy
- Rich in fiber
- Good for eyes
    `
  },

  {
    id: 18,
    title: "Bottle Gourd – Weight Loss Friendly",
    slug: "bottle-gourd-benefits",
    image: "https://images.unsplash.com/photo-1604908176997-4316c9c78d02",
    shortDesc: "Low calorie and ideal for dieting.",
    category: "Health",
    author: "Admin",
    date: "2026-03-18",
    content: `
Bottle gourd is light and healthy.

Health Benefits:
- Helps weight loss
- Improves digestion
- Good for heart
    `
  },

  {
    id: 19,
    title: "Bitter Gourd – Diabetes Control",
    slug: "bitter-gourd-benefits",
    image: "https://images.unsplash.com/photo-1604908554007-26e80b2df3b1",
    shortDesc: "Helps control blood sugar levels.",
    category: "Health",
    author: "Admin",
    date: "2026-03-19",
    content: `
Bitter gourd has medicinal properties.

Health Benefits:
- Controls diabetes
- Detoxifies blood
- Boosts immunity
    `
  },

  {
    id: 20,
    title: "Lady Finger (Okra) – Digestive Support",
    slug: "okra-benefits",
    image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec",
    shortDesc: "Improves digestion and gut health.",
    category: "Health",
    author: "Admin",
    date: "2026-03-20",
    content: `
Okra is rich in fiber.

Health Benefits:
- Supports digestion
- Good for diabetes
- Improves skin
    `
  },

  {
    id: 21,
    title: "Mushroom – Protein Rich Superfood",
    slug: "mushroom-benefits",
    image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443",
    shortDesc: "Low calorie and high protein food.",
    category: "Superfood",
    author: "Admin",
    date: "2026-03-21",
    content: `
Mushrooms are nutrient dense.

Health Benefits:
- Boosts immunity
- Rich in protein
- Supports brain health
    `
  },

  {
    id: 22,
    title: "Turnip – Bone Strengthener",
    slug: "turnip-benefits",
    image: "https://images.unsplash.com/photo-1615485291234-7c3c7eca6e8c",
    shortDesc: "Supports bone and joint health.",
    category: "Health",
    author: "Admin",
    date: "2026-03-22",
    content: `
Turnips are rich in calcium.

Health Benefits:
- Strengthens bones
- Improves digestion
- Boosts immunity
    `
  },

  {
    id: 23,
    title: "Zucchini – Low Calorie Vegetable",
    slug: "zucchini-benefits",
    image: "https://images.unsplash.com/photo-1604908177312-bb33d0c8f6d7",
    shortDesc: "Great for weight loss diets.",
    category: "Nutrition",
    author: "Admin",
    date: "2026-03-23",
    content: `
Zucchini is very healthy.

Health Benefits:
- Low calorie
- Good for heart
- Improves digestion
    `
  },

  {
    id: 24,
    title: "Green Beans – Fiber Rich Food",
    slug: "green-beans-benefits",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
    shortDesc: "Supports digestion and weight control.",
    category: "Nutrition",
    author: "Admin",
    date: "2026-03-24",
    content: `
Green beans are nutritious.

Health Benefits:
- Rich in fiber
- Supports digestion
- Good for heart
    `
  },

  {
    id: 25,
    title: "Drumstick – Calcium Booster",
    slug: "drumstick-benefits",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510",
    shortDesc: "Great for bone strength and immunity.",
    category: "Health",
    author: "Admin",
    date: "2026-03-25",
    content: `
Drumsticks are very nutritious.

Health Benefits:
- Rich in calcium
- Boosts immunity
- Improves digestion
    `
  },

  {
    id: 26,
    title: "Fenugreek Leaves – Blood Sugar Control",
    slug: "fenugreek-benefits",
    image: "https://images.unsplash.com/photo-1584270354949-1f78c89c3a36",
    shortDesc: "Helps control sugar levels.",
    category: "Health",
    author: "Admin",
    date: "2026-03-26",
    content: `
Fenugreek leaves are medicinal.

Health Benefits:
- Controls diabetes
- Improves digestion
- Boosts metabolism
    `
  },

  {
    id: 27,
    title: "Spring Onion – Flavor Booster",
    slug: "spring-onion-benefits",
    image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443",
    shortDesc: "Adds flavor and nutrition.",
    category: "Nutrition",
    author: "Admin",
    date: "2026-03-27",
    content: `
Spring onions are tasty.

Health Benefits:
- Boosts immunity
- Good for digestion
- Rich in vitamins
    `
  },

  {
    id: 28,
    title: "Ash Gourd – Cooling Vegetable",
    slug: "ash-gourd-benefits",
    image: "https://images.unsplash.com/photo-1604908554007-26e80b2df3b1",
    shortDesc: "Helps cool the body.",
    category: "Health",
    author: "Admin",
    date: "2026-03-28",
    content: `
Ash gourd is cooling in nature.

Health Benefits:
- Reduces body heat
- Improves digestion
- Detoxifies body
    `
  },

  {
    id: 29,
    title: "Snake Gourd – Digestive Support",
    slug: "snake-gourd-benefits",
    image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec",
    shortDesc: "Supports digestion and hydration.",
    category: "Health",
    author: "Admin",
    date: "2026-03-29",
    content: `
Snake gourd is healthy.

Health Benefits:
- Improves digestion
- Hydrates body
- Low calorie
    `
  },

  {
    id: 30,
    title: "Ridge Gourd – Skin Friendly Vegetable",
    slug: "ridge-gourd-benefits",
    image: "https://images.unsplash.com/photo-1604908176997-4316c9c78d02",
    shortDesc: "Good for skin and digestion.",
    category: "Health",
    author: "Admin",
    date: "2026-03-30",
    content: `
Ridge gourd is light and healthy.

Health Benefits:
- Improves skin
- Supports digestion
- Detoxifies body
    `
  }
];

export default vegetableBlogs;