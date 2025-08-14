// variable scope = where a variable is recognized (local vs global)

//Local scope (any variable declared in a functions has a local scope)

let x = 3;
function1();
function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}

// Global scope (variables declared outside of a function)
function function3(){
    console.log(x);
}
function3();