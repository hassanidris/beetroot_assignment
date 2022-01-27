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

function givenNumber() {
    const inputNumber = prompt('Please enter a number');
    const total = 1;

    for (i = 0; i < inputNumber; i++){
    total = total * (inputNumber - i);
}
    alert(inputNumber + '! = ' + total);
}

// Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.



// Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square. 



// Write a function that checks if the given number is perfect. A perfect number is a number equal to the sum of all its divisors. For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.



// Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range. Use the previous function to check, if numbers are perfect. 



// Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.



// Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.



// Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.



// Write a function that counts the difference between the dates. The function accepts 6 parameters that describe 2 dates, and returns them as hh:mm:ss. While solving this problem use the functions from the two previous ones: at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.