// reduce() = reduce the elements of an array to a single value

// Example 2
const grades = [25, 50, 75, 80, 90, 95];
const bestGrade = grades.reduce(maxGrade);
console.log(bestGrade);


function maxGrade(previous, next){
    return Math.max(previous, next);
}

// Example 1
const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);
// console.log(`$${total}`);

function sum(previous, next){
    return previous + next;
}