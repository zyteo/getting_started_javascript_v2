// 06 Jan 2024, ZY
// Functions

const greetStudent = (student) => {
  console.log(`Hello, ${student}!`);
};

const timeRemaining = (timeElapsed, endTime) => {
  return endTime - timeElapsed;
};

console.log(timeRemaining(42, 240));
