//Get display element
const display = document.getElementById('display');

//Function to handle key press (button click)
function pressKey(key){
  //Append the key to the display
  display.value += key;
}

//Function to clear the display
function clearDisplay(){
  //Clear the display
  display.value = '';
}

//Function to calculate the result
function calculateResult(){
  try{
    //Evaluate the expression in the display
    const result = eval(display.value);
    //Display the result
    display.value = result;
  } catch (error) {
    //If there's an error (e.g. invalid expression), clear the display and show an alert
    display.value = '';
    alert('Invalid expression');
  }
}
