console.log("Exercise 1: Let and Const\n")

let age = 30;
const name = "Alice";
console.log("Name: ",name)
// name = "Bob";          {Pops out Error Saying "Assignment to constant variable"}
// console.log(name);  

console.log("--------------------------------------");
console.log(" ");

console.log("Exercise 2: Arrow Functions\n");

// function add(a,b){
//   return a+b;
// }
// console.log("Sum : ",add(2,3));

const add = (a,b) => a+b;
console.log("Sum: ",add(5,3));


console.log("--------------------------------------");
console.log(" ");

console.log("Exercise 3: Template Literals\n");

const Name = "Alice";
let Age = 30;
console.log(`Hello, ${Name}! Your age is ${age}`);

console.log("--------------------------------------");
console.log(" ");

console.log("Exercise 4: Destructuring Objects");
const person = {firstName: "Alice", lastName: "Johnson"}
const{firstName,lastName} = person;

console.log(firstName);
console.log(lastName);

console.log("--------------------------------------");
console.log(" ");

console.log("Exercise 5: Destructuring Arrays\n");

const numbers = [1,2,3,4,5];
const [first,second] = numbers;

console.log(numbers);
console.log(first);
console.log(second);

console.log("--------------------------------------");
console.log(" ");

console.log("Exercise 6: Spread Operator\n");

const arr1=[1,2,3,4];
const arr2=[5,6,7,8];
const comarr=[...arr1,...arr2];
console.log(comarr);

console.log("--------------------------------------");
console.log(" ");

console.log("Exercise 7: Rest Parameters\n");

const sum = (...numbers)=>numbers.reduce((acc,current)=>acc+current,0);
console.log("Sum of indefinite Numbers: ",sum(1,2,3,4,5,6,7));

console.log("--------------------------------------");
console.log(" ");

console.log("Exercise 8: Default Parameters\n");

const greet = (name, greeting = "Hello") => `${greeting}, ${name}!`;
console.log(greet("Andrew"));
console.log(greet("Alexa","Hi"));

console.log("--------------------------------------");
console.log(" ");

console.log("Exercise 9: Classes and Inheritance\n");

class Animal{
    constructor(name){
        this.name=name;
    }
}
class Dog extends Animal{
    bark(){
        return `Woof! My Name is ${this.name}`;
    }
}
const dog = new Dog("Ruby"); 
console.log(dog.bark());

console.log("--------------------------------------");
console.log(" ");

console.log("Exercise 10: Promises and Async/Await\n");

const waitAndReturn = () => new Promise(resolve => setTimeout(() => resolve("Done"), 2000));

async function run() {
    const result = await waitAndReturn();
    console.log(result);
}
run();