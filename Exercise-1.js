//Exercise 35 
function max(a, b){
    if (a > b) return a;
    return b;
}
console.log(max(0,2));

// exercise 36
function isLandscape(width, height){
    return (width > height) ? true : false ;
}
console.log(isLandscape(800,500));

//exercise 37
//divisible by 3 = Fizz
// divisible by 5 = Buzz
// divisible by 3 & 5 = FizzBuzz
//Not divisible by 3 & 5 = input
//Not a number = NaN

function fizzBuzz (input) {
    if (typeof input !== "number")
    return "NaN";
    if ((input % 3=== 0) && (input % 5 ===0)) return "FizzBuzz";
    if ( input % 3 === 0) return "Fizz";
    if (input % 5 === 0) return "Buzz";
    return input;
}

for (i = 0; i <= 100; i++){
    console.log(fizzBuzz(i));
}

//exercise 38
//speed limit = 70
// 5 -> 1 point
//math.floor(1.3)
//12 points -> suspended

function checkSpeed (speed){
    const speedlimit = 70;
    const kmPerPoint = 5;

    if (speed < speedlimit + kmPerPoint){
        console.log("OK");
    }
    else{
        const points = Math.floor((speed - speedlimit)/kmPerPoint);
        if(points >= 12)
        console.log('License suspended');
        else
        console.log('Points', points);
    }
}
checkSpeed(74);

// Exercise 39 of Odd and Even Number
function showNumber (limits){
    for(let x = 0; x <= limits; x++){
       //  if(x  % 2 === 0) console.log(x, "Even")
       //  else{
       //      console.log(x, "Odd")
       //  }
       
        const message = ( x % 2 === 0) ? "Even" : "Odd"
        console.log(x, message);
    }
}

showNumber(20);

 //Exercise 40 
//Falsy and truthy
 const array = [1, 5, 9, undefined, 96, null, 125, 48, 35, "", 12, 458]

 function countTruthy (arrayList){
     let count = 0;
     for (let value of arrayList){
        if (value)
        count++;
        console.log(value)
     }
     return count
 }
 console.log(countTruthy(array));

 //exercise 41
 Object
 const car = {
    type:"Fiat", 
    model:"500", 
    color:"white"
};

function showProperty (details){
    console.log(details)
    for (let key in details){
        if(typeof details[key] === "string")
        console.log(key, details[key])
    }   
}

showProperty(car);

//exercise 42

function sum (limit){
    let sum = 0;
    for (let i = 0; i<=limit; i++)
        if (i % 3 ===0 || i % 5 === 0)
        sum += i;
        console.log(sum)
    return sum;
}
console.log(sum(20));

// Exercise 43

const marks = [80, 60, 73, 94];

function calculateGrade (marksDetail){
    const average = calculateArray(marksDetail)
        if(average < 60) return "F";
        if(average < 70) return "D";
        if(average < 80) return "C";
        if(average < 90) return "B";
        return "A";
    
}
console.log(calculateGrade(marks));

function calculateArray (array){
    let sum = 0;
    for (let value of array)
    sum += value;
    return sum/ array.length;
}

// exercise 44
function showStars (rows){
    for(let row = 1; row <= rows; row++){
        let pattern = "";
        for(let i = 0; i< row; i++)
            pattern += '*';
            console.log(pattern);
    }
}
showStars(20);

//exercise 45 
// prime numbers
 function primeNumber (limit){
    for(let number = 2; number <= limit; number++)
        if(isPrime(number))console.log(number);
 }
 function isPrime (number){
    for(let factor = 2; factor < number; factor++)
        if(number % factor === 0)
        return false
    return true;
 }
 primeNumber(20);

//Object oriented programming ( OOP)

const circle = {
    radius: 1,
    location: {
        x: 1,
        y : 1
    },
    isVisible : true,
    draw: function(){
        console.log('draw');
    }
};
circle.draw();
