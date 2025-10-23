import "bootstrap";
import "./style.css";

window.onload = function() {

    let cardGenerated = "";

    let symbols = ['♠', '♥', '♦', '♣'];
    let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q'];

    function generateRandomCard() {
        let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
        let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        
        let colorClass;
        if (randomSymbol === '♥' || randomSymbol === '♦') {
            colorClass = 'text-danger';
        } else {
            colorClass = 'text-dark';
        }
        
        document.querySelector("#cardTop").innerHTML = `<span class="${colorClass}">${randomSymbol}</span>`;
        document.querySelector("#cardMiddle").innerHTML = `<span class="${colorClass}">${randomNumber}</span>`;
        document.querySelector("#cardBottom").innerHTML = `<span class="${colorClass}">${randomSymbol}</span>`;
        
        cardGenerated += `${randomNumber}${randomSymbol}`;
    }

    
    setInterval(generateRandomCard, 2000);
};




// window.onload = function() {
//   //write your code here
//   let symbols = ["♠", "♥", "♦", "♣"];
//   let numbers = ["A","2","3","4","5","6","7","8","9","10","J","K","Q"];

// let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
// let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

// function generateCard() {
//   let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
//   let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

//   document.querySelector(".top").innerHTML = `${randomSymbol}`;
//   document.querySelector(".middle").textContent = `${randomNumber}`
//   document.querySelector(".bottom").innerHTML = `${randomSymbol}`;
// }

// }




