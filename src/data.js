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

  selectedFruitBaskets.forEach(selectedFruitBasket => {
    const found = fruitBaskets.find(
      fruitBasket => fruitBasket.name === selectedFruitBasket.name
    );
    fruits.push(found.fruitBasket);
  });

  //let result = fruits[0].map((fruit, idx) => console.log("fruit", fruit, "idx", idx));

  console.log("fruits", fruits);

  const result = [].concat(...fruits);

  //sum
  console.log("result", result);

  /* const sum = result.reduce((acc, curr) => {
    acc[curr.fruitName] ? (acc[curr.fruitName] += curr.count) : (acc[curr.fruitName] = curr.count);
      return acc;
  }, {}); */

  const reduced = result.reduce(function(m, d) {
    if (!m[d.fruitName]) {
      m[d.fruitName] = { ...d, count: 1 };
      return m;
    }
    //https://stackoverflow.com/questions/51040651/group-by-and-calculate-mean-average-of-properties-in-a-javascript-array
    console.log("count", d.count);
    m[d.fruitName].sumi += d.count;
    m[d.fruitName].count += 1;

    return m;
  }, {});

  console.log("reduced", reduced);

  //average
  const average = Object.keys(reduced).map(function(k) {
    const item = reduced[k];
    return {
      fruitName: item.fruitName,
      averageCount: item.reduced / item.countInArray
    };
  });
  console.log("average", average);

  return "resturn";
};
