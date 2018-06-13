// Create a variable to store the input box -- #1
var input = document.getElementById('input');
// Create a variable to store the answer -- #2
var answer = document.getElementById('answer');
// Create a variable to store the button -- #3
var button = document.getElementById('button');

// Create a list of all possible Eightball responses -- #10
// Create a variable to store all this list of responses -- #11
var responses = ['yes', 'no', 'maybe'];

// Add a pop up box to alert us -- #4
// --> alert('Hey this is an alert'); -- #4 representation; it'll be removed by #6

// Listen to the "click" sound of the button -- #5
// () => { translates to "and then do this next stuff"
button.addEventListener("click", () => {
  // Only alert us IF the user did NOT enter a question -- #7.1
  // --> Check by seeing if the input is empty -- #7.2 HINT
  if (input.value.length === 0){
    // Move the pop up box to only happen when it hears the click on the button -- #6
    alert('Oops, you forgot to enter a question!');
  } else {
    // If they did enter a question -- #8
    // Set the answer to 'yes' for now -- #9
    // Use the randomize recipe to get a random number back -- #12.1
    answer.innerHTML = responses[getRandomInt(3)];
  };
});

// Randomize number recipe -- #12.2
const getRandomInt = (maxNumber) => {
  return Math.floor(Math.random() * Math.floor(maxNumber));
}


// EXTRA CREDIT
// Add an alert if the question did not include a question mark. -- #13
  /* Answer: add into eventListener block:
    if (!input.value.includes('?')) {
      alert('Please enter a question.');
    };
  */

// Add more responses to the responses list and make it so that you don't have to change the maxNumber -- #14
  /* Answer: JS has a method that will count the total number of items in an array `.count`
    Replace 3 inside getRantomInt() with responses.count
  */

// Add more reset button to remove question and answer -- #15
  /* Answer:
    1.  Navigate to index.html and add a button element under the shake button; ensure it has a unique id
          <button id='reset'>Reset</button>
    2.  Navigate into the js file and add the new button as a variable
          reset = document.getElementById('reset');
    3.1 Add an eventListener for the reset button
    3.2 Set input value to be empty string
    3.3 Set answer to be an empty string
          reset.addEventListener("click", () => {
            input.value = '';
            answer.innerHTML = '';
          })
  */


// Hide the number 8 on the ball when shake button is clicked -- #16.1
  /* Answer: Add into shake button eventListener block:
    document.getElementById('eight').style.display = 'none';
  */

// Show the number 8 when the reset button is clicked -- #16.2
  /* Answer: Add into reset button eventListener block:
    document.getElementById('eight').style.display = 'block';
  */
