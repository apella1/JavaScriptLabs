// JavaScript objects

//object literals 

const myBio = { 
    fullName: "John Doe",
    age:29, 
    hobbies: ["playing computer games", "riding bicycles", "community outreach events"], 
    career: "software developer", 
    originCountry: "Kenya", 

    aboutMe() { 
        console.log(`My name is ${this.fullName} and I am ${this.age} years old. I am a ${this.career} and ${this.hobbies[2]} is my favorite activity.`)  // a function within an objects is a method.
    }
}

const studentDetails = {
    firstName: "Jennifer", 
    lastName: "Potter",
    unitsStudied: ["Biology", "Physics", "Linear Algebra"], 
    sportProfile: { 
        sport: "football", 
        position: "goalkeeper",
        team: "Wonderers",
        number: 9
    }, 
    country: "Kenya",

    studentProfile() {
        console.log(`${this.firstName} ${this.lastName} is from ${this.country} and plays ${this.sportProfile.sport}.`);
    }
}

console.log(studentDetails.studentProfile());
 
        // objects can also contain  other objects as properties 
console.log(myBio.fullName);
console.log(myBio.aboutMe())     

//accessing objects and creating new properties and methods

// using dot notation 
myBio.sports = ["football", "hockey", "basketball"] // adds the array sports to the object 

console.log(myBio);

myBio["summary"] = `This object has ${myBio.hobbies.length} hobbies`  // using the square brackets

console.log(myBio);

object1 = {};
object1["player names"] = ["Joey", "Winnie", "Vic", "Sim", "Grace", "Muya"];
console.log(object1);

// object constructors - using function 

function Games(gameName, yearPublished, brandAmbassador) { 
    this.gameName = gameName;
    this.yearPublished = yearPublished;
    this.brandAmbassador = brandAmbassador;
    this.summary = function() {
        console.log(`${gameName} was published in the year ${yearPublished} and ${brandAmbassador} is the brand ambassador.`)
    }
};

const game1 = new Games ("Football", 1467, "John Apella");
console.log(game1.summary());  // making sure to indicate the additional double brackets for the function 

// Creating object copies using the spread operator, represented by three dots 

let myBio1 = {...myBio};

console.log(myBio1); // with the spread operator, a change in the value of myBio doesn't affect myBio1 as would be the case when direct assignment is made. 


// using the object.assign method - works the same way as the spread operator 

let object2 = Object.assign({}, myBio); // the essence of the empty curly brackets 
console.log(object2);

console.log(object2 === myBio);


let person1 = { 
    name:"Karl",
    age: 78,
    gadgets: { 
        brands: ["Samsung", "Motorola"]
    }
}

console.log(person1);

let person2 = {...person1}; // using the spread operator to assign a variable value 
console.log(person2);
person2.name = "Caleb";

console.log(person2);

console.log(person1);

person2.gadgets.brands[1] = "Sony";

console.log(person2);

console.log(person1); // changing the value of deeply nested objects from a replicated class affects the value of the initial class

// person1.gadgets.brands.justify() = "Apple";
// console.log(person1); - find a way to directly add a property value to the first index of the brands array 


// iterating over objects 







// program to add the first ten numbers from 1

let total = 0, count = 1;
while (count <=10) { 
    total += count;
    count += 1;
}

console.log(total);


let summation = 0, countSpace = 1;
while (countSpace <=12) {
    summation += countSpace;
    countSpace += 1;
}

console.log(summation)

// using if else statement to compute factorials 
function factorial(m) { 
    if (m===0) {
        return 1;
    }
    else {
        return factorial(m-1) * m; // the else statement is run until the least factorial function is computed. 
    }
}

console.log(factorial(4));


// escaping characters 
console.log("This is a line of text \nThis, however is another line of text written on a new line."); // the escaping character is a forward slash, not to be confused with the backward slash which is the division operator 
console.log("David said, \"How are you doing today?\".");
// when using backticks to represent a block of quote, ${} is referred to as the template literal

console.log(typeof factorial); // typeof is referred to as a unary operator. The other operators are binary and ternary (? :)

console.log(NaN === NaN); // NaN is the only value which isn't equal to itself. The log message returns false 
console.log(!true); // '!' is the not operator 


// demonstrating null and undefined empty values 
console.log(8 * null); // null is converted to zero and then the arithmetic operation occurs. This is referred to as automatic type conversion or type coercion. 
console.log(67 + undefined); // the result of the operation is NaN
console.log(NaN - 788897); // NaN

console.log(null == undefined); // yields true. using strict comparison yields false. null == 0 yields false 
console.log(false === 0); // the normal equality sign yields true 

// short circuiting of logical operators - 0, NaN and empty strings count as false. This is used in order to be able to fall back to default values. When the value to the left has a possibility of returning a null value an alternative is given to the right. 

console.log(null || "Agnes");
console.log("Peter" || "John");
console.log(null || undefined);

// && works the opposite way to the || operator. If the value to its left is false it returns that value, otherwise it returns the value to the right. 
// for both && and || the value to the right is only evaluated if necessary. The process of both && and || is known as short circuit evaluation. 

console.log(NaN && null);

console.log(Math.max(4, 7)); // takes the value of the larger number of the two

console.log(Math.min (2, 4)); // displays the minimum of the two numbers. Additional mathematical operators can be carried out after the evaluation.

console.log(Math.max(45, 7) - 40);



// JAVASCRIPT DOM 
