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
      { fruitName: "Apple", count: 5 },
      { fruitName: "Banana", count: 8 },
      { fruitName: "Lemon", count: 3 }
    ]
  },
  {
    name: "fruitBasket3",
    fruitBasket: [
      { fruitName: "Apple", count: 5 },
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

  //merge
  selectedFruitBaskets.forEach(selectedFruitBasket => {
    const found = fruitBaskets.find(
      fruitBasket => fruitBasket.name === selectedFruitBasket.name
    );
    fruits.push(found.fruitBasket);
  });

  const basketCounts = fruits.length;

  const mergedBasket = [].concat(...fruits);

  //sum
  const basketSum = mergedBasket.reduce((acc, curr) => {
    if (!acc[curr.fruitName]) {
      acc[curr.fruitName] = { ...curr, countInBaskets: 1, sum: curr.count };
      return acc;
    }
    acc[curr.fruitName].countInBaskets += 1;
    acc[curr.fruitName].sum += curr.count;

    return acc;
  }, {});

  //average
  const basketAverage = Object.keys(basketSum).map(fruitName => {
    const item = basketSum[fruitName];
    return {
      fruitName: item.fruitName,
      averageCountOverall: item.sum / basketCounts,
      averageCountWithMinOne: item.sum / item.countInBaskets,
      sum: item.sum
    };
  });
  return basketAverage;
};
