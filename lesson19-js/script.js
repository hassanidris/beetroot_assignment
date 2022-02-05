// Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.

function compareNumbers() {
    const firstNumber = prompt('Enter first number?');
    const secondNumber = prompt('Enter first number?');

    if (firstNumber < secondNumber) {
        return (-1);
    } else if (firstNumber > secondNumber) {
        return (1);
    } else if (firstNumber == secondNumber) {
        return (0);
    }
}
compareNumbers ();


// Write a function that counts the factorial of a given number. 
/*
Input: a number
Action: count the factorial of the a number
Output: the factorial of the number
*/
var inputNumber = prompt("Enter a number: ");
function givenNumber(number) {
    let factorialResult = 1;
    if (number > 1) {
        for (let i = 1; i <= number; i++) {
            factorialResult *= i;
        }
        return factorialResult;
    }
    else {
        return "n has to be positive";
    }
}

// Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.
/*
Input: three separate numbers 
Action: merge the three number to one
Output: single number
*/

const firstNum = prompt("Enter your first number:");
const secondNum = prompt("Enter your second number:");
const thirdNum = prompt("Enter your third number:");
function mergeDigits(num1, num2, num3) {
    // firstNum = firstNum.toString();
    // secondNum = secondNum.toString();
    // thirdNum = thirdNum.toString();
    return
    console.log('The merged number: ' + num1 + num2 + num3);
}
mergeDigits();


// Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square. 
/*
Input: width, length
Action: calculate the area of the rectangle and if it is equal entries then it is square
Output: the area value and if it is rectangle or square
*/

const widthOfShape = prompt("Enter the width:");
const lengthOfShape = prompt("Enter the length:");

function calculateArea(width, length) {
   let shapeArea = width * length;
    if (width != length) {
        console.log(`The shape is Rectangle and is the area is ${shapeArea}`);
    } else {
        console.log(`The shape is Square and is the area is ${shapeArea}`);
    }
}


// Write a function that checks if the given number is perfect. A perfect number is a number equal to the sum of all its divisors. For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.
/*
Input: a number
Action: checking if it is perfect number
Output: the value and if it is perfect number
*/

const enterNumber = prompt("Enter a number:");

function is_perfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
 } 
//is_perfect(28); 

// Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range. Use the previous function to check, if numbers are perfect. 
/*
Input: two numbers
Action: finding a perfect numbers from a range of two numbers
Output: excute the perfect number
*/

const minNumber = prompt("Enter minmum number:");
const maxNumber = prompt("Enter maxmum number:");

function minMax(min, max) {
    let rangeArray = [];
    for (i = min ; i <= max ; i++) {
        rangeArray.push(i) ;       
    }
    rangeArray.forEach(is_perfect);
}

// Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.
/*
Input: enter time (hours, minutes, seconds)
Action: transfer the entries to a string in the format hh:mm:ss
Output: excute the string
*/

const givenHour =  prompt("Enter the hour:");
const givenMinues =  prompt("Enter the minute:");
const givenSecond =  prompt("Enter the second:");

function time(hours, minutes, seconds) {   
    if ((hours > 0) && (minutes > 0) && (seconds > 0)) {
        console.log('The time is: ' + hours + ':' + minutes + ':' + seconds);
    }
    if (seconds == undefined) {
        let seconds = '00';
        console.log('The time is: ' + hours + ':' + minutes + ':' + seconds);
    }   
    return (`${hours} : ${minutes} : ${seconds}`); 
}

// Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.
/*
Input: Enter hours, minutes, and seconds
Action: convert the entries to seconds only
Output: execute the seconds
*/

const givenHour =  prompt("Enter the hour:");
const givenMinues =  prompt("Enter the minute:");
const givenSecond =  prompt("Enter the second:");

function totalSeconds(hours, minutes, seconds) {
    const hoursToSeconds = hours * 3600;
    const minutesToSecond = minutes * 60;
    const secondTotal = hoursToSeconds + minutesToSecond + seconds;
    return secondTotal;
    
}


// Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.
/*
Input: Enter seconds
Action: translates it into hours, minutes, and seconds
Output: execute hh:mm:ss string
*/

// const givenSecond =  prompt("Enter the seconds:");





// Write a function that counts the difference between the dates. The function accepts 6 parameters that describe 2 dates, and returns them as hh:mm:ss. While solving this problem use the functions from the two previous ones: at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.
/*
Input: 
Action: 
Output: 
*/