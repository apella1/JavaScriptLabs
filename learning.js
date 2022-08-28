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

const studentInformation = {...studentDetails}; // using the spread operator to assign a variable an already declared variable. 

console.log(studentInformation); 

studentInformation.firstName = "Peters";

studentInformation.unitsStudied[0] = "Chemistry"; // changing of a deeply nested element affects the initial element the copy was made from. The method used in this case is the use of spread operator.

console.log(studentInformation);

console.log(studentDetails);
 
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


function Cars (brand, manufacturer, price) { 
    this.brand = brand;
    this.manufacturer = manufacturer;
    this.price = price;
}

const firstCar = new Cars ('Mercedes Benz', 'Mercedes', 34455);

console.log(firstCar); 

// using the spread operator to reassign the value of firstCar

secondCar = {...firstCar};
console.log(secondCar);

secondCar.brand = 'Audi';
console.log(secondCar);

secondCar['Years Praised'] = [2000, 2034, 1975];

console.log(secondCar);

const game1 = new Games ("Football", 1467, "John Apella");
console.log(game1.summary());  // making sure to indicate the additional double brackets for the function 

// object constructors using functions further examples 

function Candidates (candidateName, position, age, politicalParty) { 
    this.candidateName = candidateName;
    this.position = position;
    this.age = age;
    this.politicalParty = politicalParty;

    this.fullInformation = function () { 
        console.log(`${this.candidateName} is vying as a ${this.position} from ${this.politicalParty} and is ${this.age} years old.`);
    }
}


const candidate1 = new Candidates ("Mike Ohuru", "president", 24, "Uzalendo");

console.log(candidate1.fullInformation());


// creating a copy of a function object literal using the spread operator 

const myCandidate = {...candidate1};

console.log(myCandidate);

// creating a copy of myCandidate using the assign operator 

const preferredCandidate = Object.assign({}, myCandidate);

console.log(preferredCandidate);


const tools = {
    name: 'hammer', 
    weight: 79,
}

const machinery = Object.assign({}, tools);

console.log(machinery);
// Creating object copies using the spread operator, represented by three dots 

let myBio1 = {...myBio};

console.log(myBio1); // with the spread operator, a change in the value of myBio doesn't affect myBio1 as would be the case when direct assignment is made. 


// using the object.assign method - works the same way as the spread operator 

let object2 = Object.assign({}, myBio); // the essence of the empty curly brackets 
console.log(object2);

console.log(object2 === myBio); // ? why are the two objects not strictly equal when one object has been completely mapped into the other


let person1 = { 
    name:"Karl",
    age: 78,
    sports: ['football', 'hockey', 'basketball'],
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

person2.sports[2] = 'badminton';
console.log(person2);

console.log(person1); // changing the value of deeply nested objects from a replicated class affects the value of the initial class

// person1.gadgets.brands.justify() = "Apple";
// console.log(person1); - find a way to directly add a property value to the first index of the brands array 


// iterating over objects 







// program to add the first ten numbers from 1

// what is the += syntax?

let total = 0, count = 1;
while (count <=10) { 
    total += count;
    count += 1;
}

console.log(total);

// iterating over the first ten numbers from 1
for (let j = 1; j <=10; j++) {
    console.log(j);
}

let myNumbers =  [1, 2, 4, 5, 6, 8, 6, 8];

const numbers = myNumbers.forEach( number => number.myNumbers); // can we loop over in such a way when the array isn't made up of objects with different values defined 

console.log(numbers);

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


// an expression such as the one below cannot be hoisted as opposed to a function declaration which can
const numFactorial = (g) => { 
    if (g===0) { 
        return 1;
    } else { 
        return numFactorial(g-1) * g;
    }

}

console.log(numFactorial(5));


// escaping characters 
console.log("This is a line of text \nThis, however is another line of text written on a new line."); // the escaping character is a forward slash, not to be confused with the backward slash which is the division operator 
console.log("David said, \"How are you doing today?\".");

// escaping characters further practice 

console.log("\"Our vanity, our self love, promotes the cult of the genius.\"\n~ Friedrich Nietzsche.");
// when using backticks to represent a block of quote, ${} is referred to as the template literal

console.log(typeof factorial); // typeof is referred to as a unary operator. The other operators are binary and ternary (? :)

console.log(NaN === NaN); // NaN is the only value which isn't equal to itself. The log message returns false 
console.log(!true); // '!' is the not operator 
console.log(true === true);
console.log(true == 1);
console.log(false == 0);


// demonstrating null and undefined empty values 
console.log(8 * null); // null is converted to zero and then the arithmetic operation occurs. This is referred to as automatic type conversion or type coercion. 
console.log(67 + undefined); // the result of the operation is NaN
console.log(NaN - 788897); // NaN

console.log(null == undefined); // yields true. using strict comparison yields false. null == 0 yields false 
console.log(false === 0); // the normal equality sign yields true 

// short circuiting of logical operators - 0, NaN and empty strings count as false. 
// This is used in order to be able to fall back to default values.
//  When the value to the left has a possibility of returning a null value an alternative is given to the right. 

console.log(null || "Agnes");
console.log("Peter" || "John");
console.log(null || undefined);
console.log(null && undefined);
console.log('Peter' && 'John');


// && works the opposite way to the || operator.
// If the value to its left is false it returns that value, otherwise it returns the value to the right. 
// For both && and || the value to the right is only evaluated if necessary. 
// The process of both && and || is known as short circuit evaluation. 

console.log(NaN && null);

console.log(Math.max(4, 7)); // takes the value of the larger number of the two

console.log(Math.min (2, 4) - 4 ); // displays the minimum of the two numbers. Additional mathematical operators can be carried out after the evaluation.

console.log(Math.max(45, 7) - 40);



// JAVASCRIPT DOM 

// DOM manipulation 
// Using the document module to select the elements within the document object model and manipulate them as necessary. 
// The selection values are assigned to a variable which are then further used to manipulate the model.

const project = document.getElementById("projects");
console.log(project);



const navigation = document.getElementsByClassName("navbar");
console.log(navigation);

const navItems = document.getElementsByClassName("navbar-item");
console.log(navItems);


const lists = document.getElementsByTagName("li"); 

// looping through the lists to apply inline styling to each list element 
// how to style the elements within javascript 

// for (let i = 0; i < lists.length; i++) { 
//     lists[i].style.color = "red";
// }
// console.log(lists);

// what is the difference between ++i and i++ 

const tags = document.getElementsByTagName("nav");
console.log(tags);


document.getElementsByName("");  // the value of the name attribute for the tags with the name attribute such as the input tag

const container = document.querySelector("div"); // selects the first item that matches the destination given. In this case it selects the first div element within the document model.
console.log(container);

const allDivs = document.querySelectorAll("div"); // selects all the items with the described name 
console.log(allDivs);

// changing the styling of the elements within js 

const myTitle = document.querySelectorAll(".my-title");
console.log(myTitle);

// myTitle.style.color = "blue"; // inline styling. in JavaScript the css properties are written in camel case as opposed to the kebab case in css styling. For example text-transform becomes textTransform
// myTitle.style.textTransform = "capitalize";
// the commented out code is not running to change the inline styling of the html elements selected and assigned to the named variables.

// inline styling of the elements doesn't happen for multiple elements. for that to be done the list elements have to be looped and the styles applied to every individual function



// creating elements 

const ul = document.querySelectorAll("ul");
const li = document.createElement("li"); 
li.textContent = "Hello World"; // textContent is used to add text to the element.
ul[0].appendChild(li); // appends the li element to the ul element.


console.log(ul);

// how to add inline styling in javascript
// const myList = document.querySelectorAll("li");
// myList.style.color = "red";
// myList.style.textTransform = "uppercase";
// there's still the issues where the code specified within the javascript file is not executed to change the styling of the selected html elements 

// looping through the list elements to apply inline styling to each list element
// for (let i = 0; i < myList.length; i++) {
//     myList[i].style.color = "red";
//     myList[i].style.textTransform = "uppercase";
// }

// adding a class to the list elements
// for (let i = 0; i < myList.length; i++) {
//     myList[i].classList.add("my-list");
// }

// using while loop through the list elements to apply inline styling to each list element
// let i = 0;
// while (i < myList.length) {
//     myList[i].style.color = "red";
//     myList[i].style.textTransform = "uppercase";
//     i++;
// }


// control flow - conditional execution 

let numSqrt = Number(prompt('Pick a number')); // the prompt appears as an alert message prompting to enter a number
console.log(`Half the number you've picked is ${numSqrt * 0.5}`); // how to write exponential in js.

