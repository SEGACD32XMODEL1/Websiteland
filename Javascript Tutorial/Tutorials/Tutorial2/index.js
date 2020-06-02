//Console Logging:
console.log ('Hello World!');
console.error('This is an error');
console.warn('This is a warning')

/*Variables:
Var: global and not to be used
Let: value can be changed
Const: value cannot be changed
*/

//Let:
let testValue1 = 9000;
console.log(testValue1 + ' (Initial)');
testValue1 = 9001
console.log(testValue1 + ' (Changed)');

//Const:
const letterA = 'A';
console.log(letterA);
console.error('letterA = "Z"; (Invalid)');

//Data Types:
    //Strings:
    const name = "John Cena";
    console.log(name + ' is a ' + typeof name);
    //Numbers:
    const age = 43;
    console.log(age + ' is a ' + typeof age);
    //Boolean:
    const isMeme = true;
    console.log(isMeme + ' is ' + typeof isMeme);
    //Null:
    const dreams = null;
    console.log(dreams + ' is not an ' + typeof dreams + ', but null');
    //Undefined:
    const nextLife = undefined;
    console.log(nextLife + ' is ' + typeof nextLife);

//Strings:
    //Types:
        //Concatenation:
    console.log('My name is ' + name + ' and I am ' + age);
        //Template:
    const nameAge = `My name is ${name} and I am ${age}`;
    console.log(nameAge);
    //Properties:
        //Length:
        const meme = "It's over 9000!!!";
        console.log(`${meme} Characters: ${meme.length}`);
        //Methods:
            //Uppercase:
            console.log(`${meme} Uppercase: ${meme.toUpperCase()}`);
            //Lowercase:
            console.log(`${meme} Lowercase: ${meme.toLowerCase()}`);
            //Substring:
            console.log(`${meme} Substring: ${meme.substring(10, 17)}`);
                //Combination of 2 (Chaining):
                console.log(`${meme} Substring and Uppercase: ${meme.substring(0,9).toUpperCase()}`);
            //Split:
            console.log(`${meme} Split: ${meme.split('')}`);
                //No string = Array
                const words = 'memes, pangu, Caillou, Uolliac';
                console.log(words.split(","));

//Arrays:
    //Create an Array:
        //Constructor (Uncommon):
        const counting = new Array(1,2,3,4,5,6,7,8,9);
        console.log(counting);
        //Brackets:
        const cheese = ['cheddar', 'swiss', 'gouda'];
        console.log(cheese);
    //Many Types of Values:
    const manyValues = ['Hi', 69, true];
    console.log(manyValues);
    //Access a Value
    console.log(cheese[0]);
    //Add a Value
        //Knowing the Length:
        cheese[3] = 'blue'
        console.log(cheese);
        //Not Knowing the Length by Pushing to the End:
        cheese.push('feta');
        console.log(cheese);
        //Pushing to the Front:
        cheese.unshift('brie');
        console.log(cheese);
    //Remove Values:
        //First Value:
        cheese.shift();
        console.log(cheese);
        //Last Value:
        cheese.pop();
        console.log(cheese);
        //Specific Value:
        cheese.splice(2, 1);
        console.log(cheese);
    //Check if it is an Array:
    console.log(Array.isArray(cheese));
    console.log(Array.isArray('Hello'));
    //Index or Position of Value:
    console.log(cheese.indexOf('swiss'));

//Objects:
const peashooter = {
    ammo: 'peas',
    speed: 'Normal',
    sunCost: 100,
    recharge: 5,
    levels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
}
console.log(peashooter);

    //Object in Object:
    const factory = {
            sector1: {
                line1: {
                    production: 'toys',
                    toys: ['furby', 'slinky', 'train']
                },
                line2: {
                    production: 'food',
                    food: ['fries', 'chips', 'onion rings']
                }
            }
    }
    console.log(factory);
    //Select a Specific Value:
    console.log(factory.sector1.line2.food[2]);
    console.log(factory.sector1.line1.production);
    //Object Properties as Variables:
    const { ammo, speed } = peashooter;
    console.log(ammo, speed);
    //Add Properties:
    peashooter.cool = true;
    console.log(peashooter);

//Array of Objects:
const todo = [
    {
        id: 1,
        text: 'Play Bloons Monkey City',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Write Javascript',
        isCompleted: false
    },
    {
        id: 3,
        text: 'Watch Youtube',
        isCompleted: true
    }
]
console.log(todo[1].text);

//JSON Formatter:
const todoJSON = JSON.stringify(todo);
console.log(todoJSON);

//Loops:
    //For:
    for(let i = 0; i < 10; i++) {
        console.log(`For Loop Number: ${i}`);
    };
    //While:
    let i = 0;
    while(i < 10) {
        console.log(`While Loop Number: ${i}`);
        i++;
    };
    //Array Loop:
    for(let i = 0; i < todo.length; i++) {
        console.log(todo[i].text);
    };
    //For Of:
    for(let todos of todo) {
        console.log(todos.id);
    };
    //For Each:
    todo.forEach(function(todos) {
        console.log(todos.text);
    });
    //Map:
    const todoText = todo.map(function(todo){
    return todo.text;
    });
    console.log(todoText);
    //Filter:
    const todoCompleted = todo.filter(function(todo){
        return todo.isCompleted === true;
        });
        console.log(todoCompleted);