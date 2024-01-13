// 13 Jan 2024, ZY
// Function Expressions

// unnamed function expression
let clickHandler = function () {
  console.log("Clicked!");
};

// named function expression
let keyHandler = function keyHandler() {
  console.log("Key pressed!");
};

let people = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Joe" },
];

let ids = people.map((person) => person.id);

// second function is longer but more readable / understandable
let ids2 = people.map(function getId(person) {
  return person.id;
});

console.log(ids);
console.log(ids2);

//other example
getPerson()
  .then((person) => getData(person.id))
  .then(renderData);

getPerson()
  .then(function getDataFrom(person) {
    return getData(person.id);
  })
  .then(renderData);
