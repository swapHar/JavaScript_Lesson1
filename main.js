// hello world
console.log('Hello, World!');

// Variables
let greeting = 'Hej från en variable';
console.log(greeting);
greeting = 3;
console.log(greeting);

greeting="Hello";
const PI = 3.1415

// printing 
// concatenation
console.log(greeting + ' PI is ' + PI);

// Interpolation and templating literals
console.log(`${greeting}, PI is: ${PI}`);

//Be careful with floats
console.log(0.1 + 0.2);

// Equality
console.log(1 == 1); //true
console.log(1 == '1'); //true - will convert to same type
console.log(1 === '1'); //false

// loose typing and conversion
let myNumber = 5;
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber + 5); // 10

//now myNumber saves string
myNumber = '5';
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber + 5); //55

// Control flows
// if statement

let myAge = 38;
if(myAge >= 40) {
    console.log('You are getting old!');
} else {
    console.log('You\'re still young');
}

// Ternary operation , conditional statement
myAge === 38 ?
            console.log('38') :
            console.log('not 38');

// boolean statement ? true : false

/* Loops */
// for
for ( let i = 0; i < 5; i++){
    console.log(i);
}

let persons = [
    'Mike',
    'Emma',
    'Ally',
    'Lizzie'
];

// Log entire array
console.log(persons);

// Length of Array
console.log(persons.length);

// get the first person
console.log(persons[0]);

// Get the last person
console.log(persons[persons.length - 1]);

// Get a slice of the array
let newPersons = persons.slice(0,2); // First 2

console.log(newPersons);

// Add to start of Array
persons.unshift('Acke');

//Add to end of array
persons.push('Lotta');

console.log(persons);

// Remove from start of the array
persons.shift();

// remove from end of the array
persons.pop();

console.log(persons);

// Loop over arrays
for(let person of persons){
    console.log(person);
}

// Older but still works
for(let i = 0; i < persons.length; i++){
    console.log(persons[i]);
}

// Lambda loop
persons.forEach(x => console.log(x));

// Objects
let mike = {
    firstName: 'Mike',
    lastName:'Bäck',
    age: 38,
    hobby: 'music'
};

console.log(mike)

console.log(`First Name: ${mike.firstName}`);

let mikestr = `${mike.firstName} ${mike.lastName}, age: ${mike.age}`;
console.log(mikestr);