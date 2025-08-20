/*

filter(): creates a new array by filtering out elements

*/

// Example 2
const ages = [16, 17, 18, 19, 20, 21, 22];
const adults = ages.filter(isAdult);
const teenagers = ages.filter(isTeen);

console.log(adults);
console.log(teenagers);

function isAdult(elements){
    return elements >= 18;
}

function isTeen(elements){
    return elements <= 18;
}

// Example 1
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evennums = numbers.filter(isEven);
let oddnums = numbers.filter(isOdd);

// console.log(evennums);
// console.log(oddnums);

function isEven(elements){
    return elements % 2 === 0;
}

function isOdd(elements){
    return elements % 2 !== 0;
}