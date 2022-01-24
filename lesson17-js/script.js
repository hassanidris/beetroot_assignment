//Request a three-digit number from a user and check whether it has identical digits in it.

function identicalDigits() {
    let threeDigitNumber = prompt('Enter a number contain three digit?');
    if (threeDigitNumber.length == 3) {
        for (let x = 0; x <= threeDigitNumber.length; x++) {
            if(threeDigitNumber[x] != threeDigitNumber[0]){
                console.log("Wrong number of digit")
            }else{
                console.log("Correct number of digit")
            }
        }
        
    } else {
        console.log("You didn't enter the right number of digits")
    }
}
identicalDigits()


//Request a five-unit number from a user and check whether it is a palindrome.

function palindrome() {
    let fiveUnitNumber=prompt("Enter 5-unit number?")
    if (fiveUnitNumber.length==5){
        if(fiveUnitNumber == fiveUnitNumber.split('').reverse().join('')){
            console.log("Your number is palindrome");
        }else{
            console.log("Your number is not palindrome");
        }
    }
    else{
        console.log("Your number is not 5-unit number");
    }
}

palindrome()

//Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result. 

let amount = Number(prompt("How much money do you have?."));
let currentCurrency = prompt("What currency are you using?");
let desiredCurrency = prompt("What currency do you want to convert it to? EUR, SEK, AUD etc.");

var currencyRates = {
    "USD": 1,
  "EUR": .8,
  "SEK": 9.2,
  "AUD": 1.3
};

function convertCurrency(currentCurrency, desiredCurrency, amount) {
  var currentRate = currencyRates[currentCurrency];
  var desiredRate = currencyRates[desiredCurrency];

  var USDAmount = amount * currentRate;
  var convertedAmount = USDAmount / desiredRate;

  return convertedAmount;
}

var convertedCurrencyAmount = convertCurrency(currentCurrency, desiredCurrency, amount);

alert ("Converted: " + convertedCurrencyAmount);


//Request a length of a circumference and a perimeter of a square from a user. Define whether that circumference can fit in that square.


let circleCircumference = prompt('Enter a length of a circumference');
let perimeterSquare = prompt('Enter a perimeter of a square');

let circleRadius = circleCircumference / (2 * Math.PI);
let circleArea = Math.PI * ( circleRadius * circleRadius);

let sideSquare = perimeterSquare / 4;
let areaSquare = sideSquare * sideSquare;

function isFit() {
    if (circleArea < areaSquare) {
        console.log('The circle fit inside the square');
    } else {
        console.log('The circle doesn\'t fit inside the square');
    }
}

//Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start of a new month, new year, and also leap years.