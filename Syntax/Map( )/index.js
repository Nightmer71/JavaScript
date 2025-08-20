/*

map(): accepts a callback and applies that function to each element of an array, then returns a new array

*/

// Example 3
const dates = ["2024-1-10", "2025-12-12", "2026-09-11"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}

// Exapmle 1
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);

function square(element){
    return Math.pow(element, 2)
}

// Example 2
const students = ["Spongebob", "Patrick", "Mr.Crab", "Squidward"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);
console.log(studentsUpper);
console.log(studentsLower);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}