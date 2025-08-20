/*

forEach(): method used to iterate over the elements of an array and apply a specified function (callback) to each element

array.forEach(callback);

the forEach() method provides 3 arguments:
    - element = the element we are currently on
    - index = the index of the current element
    - array = the location of the array
*/

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function display(element){
    console.log(element);
}

