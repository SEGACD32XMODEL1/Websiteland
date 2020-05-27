//My first Javascript Code!
console.log("Hello World");

//Variables:
let name = "Mosh";
console.log(name);

/* Notes:
1. Cannot be a reserved keyword
2. Should be meaningful
3. Cannot start with number
4. Cannot contain a space or hyphen
5. Are case-sensitive
*/

//Constants vs Variables:

//Variable can be changed
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//Constants cannot be changed
const interestRate2 = 0.3;
intrestRate2 = 1;
console.log(interestRate2);

/* Primitive/Value Types:
1. String
2. Number
3. Boolean
4. Undefined
5. Null
6.Symbol
*/

let nameReal = "Jacob"; //String Literal
let age = 17; //Number Literal
let isApproved = true; //Boolean Literal True or False
let rock = undefined; //Default Value if not assigned
let cooking = null; //Used to clear values

/* Reference Types
1. Object
2. Array
3. Function
*/

//Object:
let shape = {
    name: "Square",
    sides: 4
};
console.log(shape);

//Dot.Notation
shape.name = "Triangle";
shape.sides = 3;
console.log(shape.name);
console.log(shape.sides);

//Brackets[]Notation
shape["name"] = "Hexagon";
shape["sides"] = 6;
console["log"](shape["name"]);
console["log"](shape["sides"]);

//Arrays:
let groceryList = [
    "Avacado",
    "Lemonade",
    "Salad",
    "Eggrolls",
    "Chocolate Pudding"
];
console.log(groceryList);

//You can change individual items
console.log(groceryList[0]);
console.log(groceryList[1]);
console.log(groceryList[2]);
console.log(groceryList[3]);
console.log(groceryList[4]);
groceryList[5] = 27;
console.log(groceryList);
console.log(groceryList[5]);

//Functions:

//Performing a task
function meme() {
    console.log("Dank");
}

meme();

//Variables for the function
function chocolatePudding(why) {
    console.log("Why are you making chocolate pudding?" + " " + why);
}

chocolatePudding("I lost control of my life");
chocolatePudding("I am hungry");

//Multiple variables
function how(first, last) {
    console.log(first + " " + "Cut the watermelon. " + last);
}

how("Buy the watermelon.", "Eat the watermelon.");

//Calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));
