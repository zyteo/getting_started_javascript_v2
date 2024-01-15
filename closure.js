// 15 Jan 2024, ZY
// Closure
// Closure is when a function remembers the variables outside of it, even if you pass that function elsewhere.
function ask(question) {
  setTimeout(function waitASec() {
    // function is referencing question
    // waitASec function has closure over the question variable
    console.log(question);
  }, 100);
}

ask("What is closure?");

function ask2(question) {
  return function holdYourQuestion() {
    console.log(question);
  };
}

var myQuestion = ask2("What is closure?");

myQuestion();
