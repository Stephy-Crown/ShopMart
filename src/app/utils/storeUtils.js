// src/utils/storeUtils.js

const allStores = [
  {
    id: 1,
    name: "Electronics Store",
    category: "electronics",
    description: "Best electronics in town",
  },
  {
    id: 2,
    name: "Fruit Store",
    category: "fruits",
    description: "Fresh fruits daily",
  },
  // Add more stores here
];

export const fetchStoresByCategory = (category) => {
  return allStores.filter((store) => store.category === category);
};
