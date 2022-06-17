/* Global Variables */
let allButtons = document.querySelectorAll('.first');
let showNumber = document.querySelector('.show-area');
let clearButton = document.querySelector('.clear-button');
let clearSymbol = document.querySelector('.clear-symbol');
let division = document.querySelector('.division');

/* Clear Button. FIX THE DELETENUMBER FUNCTION */
function deleteNumber() {
    delete showNumber.textContent;
}

clearButton.addEventListener('click', deleteNumber);

/* Clear Symbol*/
clearSymbol.addEventListener('click', deleteNumber)


/* Button press */
let displayNumber;

function showOnScreen() {
    showNumber.append(this.textContent);
    console.log(this.textContent);
}
console.log(displayNumber);

for(let button of allButtons){
    button.addEventListener('click', showOnScreen)
}

/* Calculations */
let savedValue;

if(savedValue === 0 || savedValue === 1 || savedValue === 2 || savedValue === 3 || savedValue === 4 ||savedValue === 5 || savedValue === 6 || savedValue === 7 || savedValue === 8 || savedValue === 9){

}

division.addEventListener('click', function divide(){

})


