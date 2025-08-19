/*
rest parameters:
    (...rest) allow a FUNCTION to work with a variable number of ARGUMENTS by bundling them into an array (used in the parameter of a function)

rest: bundles seperate elements into an array
spread: expands an array into seperate elements
*/

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hot-dog";
const food4 = "sushi";

function openFridge(...foods){
    console.log(foods);
}

function getFood(...foods){
    return foods;
}

// openFridge(food1, food2, food3, food4);

const foods = getFood(food1, food2, food3, food4);
console.log(foods);