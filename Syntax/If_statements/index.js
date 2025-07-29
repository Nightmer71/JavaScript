let age = 20;

if(age >= 18){
    console.log("You are old enough to enter this site!")
}

else{
    console.log("You must be older than 18 to enter this site!")
}


// Whit boolean values it's enough to write the variable in the ()
let isStudent = true;

if(isStudent){
    console.log("You are a student!")
}

else{
    console.log("You are not a student!")
}

let hasLicense = true;

// Nested if statements
if(age >= 16){
    console.log("You are old enough to drive!")

    if(hasLicense){
        console.log("You have a license to drive!")
    }
    else{
        console.log("You don't have a license to drive!")
    }
}

else{
    console.log("You must be older than 16 to have a license")
}

// elseif statements
if(age >= 100){
    console.log("You are too old to enter this site")
}
else if (age == 0){
    console.log("You can't enter. You were just born!")
}
else if(18 <= age <= 100){
    console.log("You are old enough to enter this site!")
}
else if(age < 0){
    console.log("Your age can't be below 0!")
}
else{
    console.log("You are not old enough to enter this site!")
}