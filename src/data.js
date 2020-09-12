const fruitBaskets = [
  {
    name: "fruitBasket1",
    fruitBasket: [
      { fruitName: "Apple", count: 5 },
      { fruitName: "Banana", count: 3 },
      { fruitName: "Strawberry", count: 9 },
      { fruitName: "Lemon", count: 7 }
    ]
  },
  {
    name: "fruitBasket2",
    fruitBasket: [
      { fruitName: "Apple", count: 1 },
      { fruitName: "Banana", count: 8 },
      { fruitName: "Lemon", count: 3 }
    ]
  },
  {
    name: "fruitBasket3",
    fruitBasket: [
      { fruitName: "Apple", count: 2 },
      { fruitName: "Banana", count: 3 },
      { fruitName: "Orange", count: 3 },
      { fruitName: "Lemon", count: 9 },
      { fruitName: "Strawberry", count: 5 }
    ]
  }
];

export const fruitBasketsNames = () => {
  const names = fruitBaskets.map(fruitBasket => {
    return { name: fruitBasket.name };
  });
  return names;
};

export const calculateAverage = selectedFruitBaskets => {
  let fruits = [];

  selectedFruitBaskets.forEach(selectedFruitBasket => {
    const found = fruitBaskets.find(
      fruitBasket => fruitBasket.name === selectedFruitBasket.name
    );
    fruits.push(found.fruitBasket);
  });

  console.log("fruits", fruits);

  return "resturn";
};
