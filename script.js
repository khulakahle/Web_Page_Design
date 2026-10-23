const Username = document.getElementById("Name");
const surname = document.getElementById("Surname");
const button = document.getElementById("firstButton");
const info = document.getElementById("displayInformation");

let date = new Date();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let today = date.getDate();
let todaysDate = month + "/" + today + "/" + year ;

let num1 = document.getElementById("firstNumber");
let num2 = document.getElementById("secondNumber");
let answer = document.getElementById("answer");

function display() {
    info.innerHTML = todaysDate + " " + Username.value + " " + surname.value;
}

button.addEventListener("click", display);

document.getElementById("addition").addEventListener("click", function() {
    answer.value = parseFloat(num1.value) + parseFloat(num2.value);
});

document.getElementById("subtraction").addEventListener("click", function() {
    answer.value = parseFloat(num1.value) - parseFloat(num2.value);
});

document.getElementById("multiplication").addEventListener("click", function() {
    answer.value = parseFloat(num1.value) * parseFloat(num2.value);
});

document.getElementById("division").addEventListener("click", function() {
    answer.value = parseFloat(num1.value) / parseFloat(num2.value);
});

document.getElementById("modulus").addEventListener("click", function() {
    answer.value = parseFloat(num1.value) % parseFloat(num2.value);
});


