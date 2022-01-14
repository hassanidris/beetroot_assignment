//Request a user’s name and display the response “Hello, [name]”.
var userName = prompt("What is your name?");
document.write("Hello, " + userName);
document.write("<br><br>");

//Request a user’s year of birth, count his age, and display the result. Store the current year as a constant. 

var userBirth = prompt('Which year did you born?');
var currentYear = new Date().getFullYear();
var userAge = currentYear - userBirth;

document.write('The age is ' + userAge);
document.write("<br><br>");

// Request a length of a side of a square from a user and display the perimeter of the square. 

var lenghtSide = prompt('Please enter the lenght of the side?');
var perimeterSquare = lenghtSide * 4;

document.write('Perimeter of the square is ' + perimeterSquare);
document.write("<br><br>");

// Request a radius of a circle and display the area of such a circle. 

var radiusCircle = prompt('Please enter the circle radius value?');
var areaCircle = (radiusCircle * radiusCircle) * Math.PI;

document.write ('The circle area is ' + areaCircle);
document.write("<br><br>");

// Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time. 

var distanceTravel = prompt('Enter the distence to the next city?');
var timeTravel = prompt('Enter the time period you want reach?');
var speedTravel = distanceTravel / timeTravel;

document.write ("If your distence: " + distanceTravel + "km" + "<br>" + "Your time to reach is: " + timeTravel + "hr" , "Your Speed should be:" + speedTravel + "km / hr");
document.write("<br><br>");

// Create a currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant.

var currencyRate = 1.12;
var usdValue = prompt('Enter the value in USD currency?');
var eurValue = usdValue / currencyRate;

document.write ("The value in EUR: " + eurValue);
document.write("<br><br>");

// A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive. 

var memoryGb = prompt("Enter the size of the flash drive in GB?");
var memoryMb = memoryGb * 1024;
var requiredMemoryMb = memoryMb / 820;
var numberProgram = Math.trunc(requiredMemoryMb);

document.write ('The number of Programs in this Flash will be: ' + numberProgram + ' Program');
document.write("<br><br>");


// A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left. 

var moneyWallet = prompt("Enter the amount in your wallet?");
var chocolatePrice = prompt("Enter the price of one chocolate bar?");

var numberOfChocolate = moneyWallet / chocolatePrice;
var countOfChocolate = Math.trunc(numberOfChocolate);
var moneyRemain = moneyWallet % chocolatePrice;

document.write ('The number of chocolate bar will be: ' + countOfChocolate + ' bar');
document.write("<br>");
document.write ('The reminder after purchase will be: ' + moneyRemain);
document.write("<br><br>");

// The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest.