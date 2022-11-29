document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.

  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");
  let q4 = document.querySelector(".q4");

  
  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
 
  let imgSrc;
  let character;
  let q1Score;
  let q2Score;
  let q3Score;
  let q4Score;
  

  button.onclick = function() {
  let answer1 = q1.value; // PERFECT. Nice job. 
  let answer2 = q2.value;
  let answer3 = q3.value;
  let answer4 = q4.value;

// task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.

let bugs = 1;
let pizza = 2;
let fchicken = 3;
let sushi = 4;

let spring = 1;
let summer = 2;
let winter = 3;
let autumn = 4;

let parrot = 1;
let dog = 2;
let rabbit = 3;
let cat = 4;

let CBrulee = 1;
let FRice= 2;
let pasta= 3;

    
// task 7: create a conditional statement for the responses to Question 1 based on the user input.

  // ONE MORE THING JOSEPH! Move that answer variable line  inside of your click handler. The click is the way the user tells you that they are done typing. If you try to get the value before the click, they may not have writtend anything yet. 
    
if (answer1 === "Bugs"){
    q1Score = 1;
    // MEGHAN'S TEST CODE
    console.log(q1Score);
  } else if (answer1 === "Pizza") {
    q1Score = 2;
    console.log(q1Score);
  } else if (answer3 === "Fried Chicken") {
    q1Score = 3;
    console.log(q1Score);
  } else if (answer4 === "Sushi") {
    q1Score = 4
    console.log(q1Score);
  } else {
    q1Score = 0;
    console.log(q1Score);
  }

  };// << SEE THIS ROGUE } ? This is the end of your onclick handler. Make sure all of your conditional statements are INSIDE your click handler. I'd move this line to the bottom of your code. 

    // task 8: create a conditional statement for the responses to Question 2 based on the user input.

if (answer2 === "Spring"){
    q2Score = 1;
  } else if (answer2 === "Summer") {
    q2Score = 2;
  } else if (answer2 === "Winter") {
    q2Score = 3;
  } else if (answer2 === "Autumn") {
    q2Score = 4;
  } else {
    q2Score = 0;
  }
};

    // task 9: create a conditional statement for the responses to Question 3 based on the user input.
if (answer3 === "Parrot"){
    q3Score = 1;
  } else if (answer3 === "Dog") {
    q3Score = 2;
  } else if (answer3 === "Rabbit") {
    q3Score = 3;
  } else if (answer3 === "Cat") {
    q3Score = 4;
  } else {
    q3Score = 0;
  }
};

// task 9.5: create a conditional statement for the responses to Question 4 based on the user input.
if (answer4 === "Crème brûlée"){
    q4Score = 1;
  } else if (answer4 === "Fried Rice") {
    q4Score = 2;
  } else if (answer4 === "Pasta") {
    q4Score = 3;
  } else if (answer4 === "Sushi") {
    q4Score = 4;
  } else {
    q4Score = 0;
  }
};
  
    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.
  let totalscore= q1Score + q2Score + q3Score + q4Score;



    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.

if (totalscore < 4){
  displayResult.innerHTML = "You should check if you put in the right options. You can always copy and paste into the text boxes... Lame.";
} else if (totalscore < 8){
  displayResult.innerHTML = "You're meh";
} else if (totalscore < 12){
  displayResult.innerHTML = "You're alright";
} else if (totalscore < 16){
  displayResult.innerHTML = "You're rad";
} else{
  displayResult.innerHTML = "I would like to request your adress";
};

