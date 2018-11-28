// section 1

// 1. You assign value to a variable by defining it.
// 2. You change the value of a variable by redefining it.
// 3. 
// 4. declaring a variable = naming it, defining a variable = giving the variable a value,
// assigning a variable = putting that variable in a function.
// 5. Pseudocoding is when you write our plans for your coding by using plain English words.
// 6. 75% - 90% thinking about the problem, 10% - 25% coding

// strings

// let firstVariable = "hello world";
// firstVariable = 123;

// let secondVariable = "hello world";
// secondVariable = "some string";

// let yourName = "Daniel Becker";
// console.log(`Hello my name is ${yourName}`);

// Booleans

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// console.log(true !== false);
// console.log(false === false === false === false === false === false === true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a < b < c);
// console.log(a * a === d);
// console.log(48 !== '48');

// The farm

// const isThisACow = (animal) => {
//     if(animal === "Cow"){
//         console.log("Mooooo");
//     } else {
//         console.log("Hey! You're not a cow.")
//     }
// }

// Drivers Ed

// const personsAge = (age) => {
//     if(age > 16) {
//         console.log("Here are the keys");
//     } else {
//         console.log("Sorry, you're too young.");
//     }
// }

// Section 2


// The basics
// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// for(let j = 10; j < limit; j++){
//     console.log(j);
// }

// for(let k = 12; k < 4000; k += 3) {
//     console.log(k);
// }

// Get even

// for(let j = 2; j < 100; j +=2) {
//     console.log(j + "<--- This number is even");
// }


// Give me Five

// for(let i = 0; i <= 100; i++){
//     if(i % 5 === 0) {
//         console.log(`I found a ${i}. High Five!`);
//     } else {
//         if(i % 3 === 0) {
//             console.log(`I found a ${i}. Three is a crowd!`);
//         } else {
//             console.log(i);
//         }
//     }
// }



// Savings account 

// let savingsAccount = 0

// for(let i = 1; i <= 10; i++) {
//     savingsAccount += i
// }

// console.log(savingsAccount)

// for(let i = 1; i <= 100; i++){
//     savingsAccount += i * 2
// }

// console.log(savingsAccount)


// Section 3

// 1. elements
// 2. Yes
// 3. A list of items in a shopping cart


// Easy does it

//const quotes = ["You miss 100% of the shots you don't take.", "I'm not supersticious, but I am a little sticous.",
//"Sometimes I'll start a sentence and I don't even know where it's going. I just hope to find it along the way."];

// Accessing elements

// const randomThings = [1, 10, "Hello", true];
// randomThings[0];
// randomThings[2] = "World";


// Change Values

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// ourClass[2];

// ourClass[4] = "Octocat";
// ourClass.push("Cloud City");

// console.log(ourClass);


// Mix it up

// const myArray = [5, 10, 500, 20]; 

// myArray.push("Egon");
// myArray.push("Go Broncos");

// myArray.shift()
// myArray.unshift('Bob Marley')

// myArray.shift()

// console.log(Array.prototype.reverse(myArray))



// Biggie Smalls



// const num = 75

// const biggieSmalls = () => {
//     if(num < 1000) {
//         console.log("Little number")
//     } else {
//         console.log("big number")
//     }
// }


// biggieSmalls(num)



// Monkey in the Middle 

// num = 7

// if(num < 5) {
//     console.log("little number")
// } else if(num > 10) {
//     console.log("big number")
// } else {
//     console.log("monkey in the middle")
// }


// What's in your closet 

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];



// console.log(`Kristen is rocking that ${kristynsCloset[2]} today!!`)

// kristynsCloset[6] = "raybans"
// console.log(kristynsCloset)

// kristynsCloset[5] = "stained knit hat"
// console.log(kristynsCloset)


// const thomsShirt = `Today Thom is wearing a ${thomsCloset[0][0]}`
// console.log(thomsShirt)

// const thomsPants = `Today Thom is wearing ${thomsCloset[1][1]}`
// console.log(thomsPants)

// const thomsAccessories = `Today Thom is wearing ${thomsCloset[2][0]}`
// console.log(thomsAccessories)

// thomsCloset[1][2] = "Footie Pajamas"
// console.log(thomsCloset[1])


// Section 4


// printGreating

// const name = 'Daniel'

// const printGreating = (name) => {
//     console.log(`Hi ${name}! how are you doing?`)
// }

// printGreating(name)


// printCool

// const printCool = (name) => {
//     console.log(`${name} is so cool!`)
// }

// printCool('Daniel')


// calculateCube

// const calculateCube = (num) => {
//     exp = Math.pow(num, 3)
//     console.log(exp)
// }

// calculateCube(3)


// isVowel

// const vowel = ['a','e','i','o','u']


// const isVowel = (str) => {
//     for(let i = 0; i < vowel.length; i++){
//         if(str === vowel[i]){
//             console.log(true)
//         } else {
//             console.log(false)
//         }
//     }
// }


// isVowel('a')


// getTwoLengths

// const string1 = "Hank"
// const string2 = "Hippopopalous"

// const getTwoLengths = (str1, str2) => {
//     arr = []
//     arr.push(str1.length);
//     arr.push(str2.length)
//     console.log(arr)
// }

// getTwoLengths(string1, string2)



// getMultipleLengths

// const string = ['hello', 'what', 'is', 'up', 'dude']


// const getMultipleLengths = (arr) => {
//     newArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i].length)
//     }
//     console.log(newArr)
// }

// getMultipleLengths(string)



// maxOfThree


// const maxOfThree = (num1, num2, num3) => {
//     console.log(Math.max(num1, num2, num3))
// }

// maxOfThree(3,5,9)




// printLongestWord
// arr = ['first item', 'second item is longer than the third one', 'third longish item'];


// const printLongestWord = (arr) => {
//     let long1= '';
//   for (i=0; i<arr.length; i++){
//       if (arr[i].length > long1.length){
//         long1= arr[i];
//       }

//   }
//   console.log(long1);
// }


// printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"])


// transmogriphy

// const transmogriphy = (a, b, c) => {
//     const result = Math.pow((a + b), c);
//     return result
// }

// console.log(transmogriphy(5, 3, 2));

// Reverse Word Order 


// const reverseWordOrder = (str) => {
//     let newWord = '';
//     for(i = str.length - 1; i >= 0; i--){
//         newWord += str[i]
//     }

//     return newWord
// }


// console.log(reverseWordOrder("hello"))



// Get down and dirty with `Math.random()

// const getRandomInt = (max) => {
//     return Math.floor(Math.random() * Math.floor(max))
// }
// console.log(getRandomInt(10))

// const getRandomRange = (min, max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min

// }
// console.log(getRandomRange(10, 100))

// const getRandomRange = (min, max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min

// }

// console.log(getRandomRange(532, 12367))


// const getRandomRange = (min, max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min

// }

// console.log(getRandomRange(1, 10))
// newArr = [1,2,3,5,3,4,6,3,2,1,3,56]

// const getRandomElement = (arr) => {
//     let arrI = Math.floor(Math.random() * arr.length);
//     return arr[arrI]
// }

// console.log(getRandomElement(newArr))




// ## Objects

// Let's set up an object data structure. Let's say we have a website that sells products, 
//and we have a user of our website, and we want to store that user's data. The object data structure is 
//a good way to organize the data from our user.







// ### A. Make a user object

const user = {
    name: 'Daniel',
    email: 'daniel@mail.com',
    age: 99,
    purchased: []
}

// :red_circle: Commit.

// ### B. Update the user

// user.email = 'daniel.1@email.com';
// user.age++;


// console.log(user)

// :red_circle: Commit.


// ### C. Adding keys and values

// user.location = 'Denver';

// console.log(user)



// ### D. Shopaholic!

// user.purchased.push("carbohydrates", "peace of mind", "Merino jodhpurs");
// console.log(user)



// ### E. Object-within-object

// user.friend = {
//     name: 'Alex',
//     age: 29,
//     location: 'Denver',
//     purchased: []
// }


// console.log(user.friend.name);
// console.log(user.friend.location);

// user.friend.age = 55;

// user.friend.purchased.push("The One Ring", "A Latte")

// console.log(user.friend.purchased[1])


// ### F. Loops

// for(let i = 0; i < user.purchased.length; i++){
//     console.log(user.purchased[i])
// }
 
// for(let i = 0; i < user.friend.purchased.length; i++){
//     console.log(user.friend.purchased[i])
// }


// ### G. Functions can operate on objects

// 1. Write a single function `updateUser` that takes no parameters. When the function is run, it should:

//   - it should increment the user's age by 1
//   - make the user's name uppercase

const updateUser = (user) => {
	let userAge = user.age++;

	let str = user.name
	let res = str.toUpperCase();
	return (userAge, res)
	
}

console.log(updateUser(user))



//   The function does not need a `return` statement, it will merely modify the user object.

// 2. Write a function `oldAndLoud` that performs the exact same tasks as `updateUser`, but instead of hard-coding it to only work on our 
//`user` object, make it take a parameter `person`, and have it modify the object that is passed in as an argument when the function is called. 
//Call your `oldAndLoud` function with `user` as the argument.



















