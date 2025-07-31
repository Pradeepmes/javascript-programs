1) sort array in descending order

const arr = [1, -1, 10, 20, 2, 3, 8]
	const output = arr.sort((a,b)=>{
		return b-a
	})
	console.log(output)
	
	note: if u want show second largest use console.log(output[1])
	
========================================================

========================================================
sorting string inside array

const arr = ["bar","add"]
	const output = arr.sort()
	console.log(output)
	
====================================================
display

1 2 3 4
1 2 3 4
1 2 3 4

let output = "";

for (let row = 0; row < 4; row++) {
  for (let num = 1; num <= 4; num++) {
    output += num + " ";
  }
  output += "\n"; // Move to next line after each row
}
====================================================
how to find second largest number in array

function getSecondLargest(arr) {
  const unique = [...new Set(arr)]; // remove duplicates
  unique.sort((a, b) => b - a); // sort descending
  return unique[1]; // second element is the second largest
}

const numbers = [5, 3, 9, 1, 9, 7];
console.log(getSecondLargest(numbers)); // Output: 7

==============================================
4)swap two string without using 3rd varibale

Ans) let str = "hello";
let data = "string";
[str, data] = [data, str];
console.log(str)
console.log(data)
=========================================
palindrome or not

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Compare the string with its reversed version
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

// Example usage
console.log(isPalindrome("Racecar"));        // true
console.log(isPalindrome("Hello"));          // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
===========================================
reverse a string

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"

===================================
to check prime no

function isPrimeSimple(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrimeSimple(7)); 
2 is the only even prime number.

Numbers like 4, 6, 8, 9, 10 are not prime because they have more than two divisors.

=================================

factorial of no

function factorial(n){
  var fact=1;
  for(var i=2;i<=n;i++){
    fact=fact*i;
  }
  return fact
}
factorial(6)
=================================
fibonacci sequence

function fibonacci(n) {
  const sequence = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      sequence.push(0);
    } else if (i === 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }
  return sequence;
}

// Example usage:
console.log(fibonacci(10)); 
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

===========================================

const display =()=>{
  try{
    return "hello"
  }catch(error){
    return 'error'
  } finally{
    return "world"
  }
}

display()
//op: "world"


==============================================

reversing string with for loop

function reversedString(str){
  let reversed='';
  for(let i=str.length-1;i>=0;i--){
    reversed += str[i];
  }
  return reversed;
}

console.log(reversedString("abc"));
==================================================
===============================================
bubble sort

var arr=[10,20,40,30,40,30,50]

for (var j=0;j<=arr.length;j++){
  for(var i=0;i<=arr.length-1;i++){
    if(arr[i]>arr[i+1]){
     var temp =arr[i]
      arr[i]=arr[i+1];
      arr[i+1]=temp;
    }
  }
}
console.log(arr)
=======================================
map: for multiflying returns same no of array

var arr=[10,20,40,23,30,40,30,50]

const xyz=arr.map(num=> num*2);
 
console.log(xyz)
=========================================
filter:  for checking odd numbers -returns same no of array or less no of aray

var arr=[10,20,40,23,30,40,33,30,50]

const xyz=arr.filter(num=> num%2);
 
console.log(xyz)
=====================================
find : returns only first matching element

var arr=[10,20,40,23,30,40,33,30,50]

const xyz=arr.find(num=> num%2);
 
console.log(xyz)
==========================================
 removing duplicate array using for loop index
var arr = [1, 2, 3, 4, 3, 2, 5, 6, 5, 1];
var uniqueArr = [];

for (var i = 0; i < arr.length; i++) {
  if (uniqueArr.indexOf(arr[i]) === -1) {
    uniqueArr.push(arr[i]);
  }
}

console.log(uniqueArr); // 👉 Output: [1, 2, 3, 4, 5, 6]
===============================================
function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i])); // recursively flatten
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

// Example usage
console.log(flattenArray([1, [2, [3, 4], 5]])); // [1, 2, 3, 4, 5]
==========================================================================
flatening array
var arr=[1,2,3,[4,5,[6],7],8,9]
var cc=arr.flat(2);
console.log(cc)

      using reduce method
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat);  // [1, 2, 3, 4, 5]
======================================================================
const flattenArray = arr => arr.flat(Infinity);

console.log(flattenArray([1, [2, [3, 4], 5]])); // [1, 2, 3, 4, 5]
====================================================================
 diff ways for for,foreach
 
 const fruits = ["Banana", "Orange", "Apple"];

fruits.forEach(function(n) {
  console.log(n);  // Logs one fruit at a time
});


for(let i=0;i<fruits.length;i++){
  console.log(fruits[i])
}

for (let fruit of fruits) {
   console.log(fruit);  // Logs one fruit at a time
}
=======================================================
let x=10;
if(true){
 let x=20;
}
console.log(x)
========================
output of program

function test(){
  return {
    message:'hello',
	value:'20'
  }
}

console.log(test())  // message:'hello'
========================================

filter country name starts with I

var arr=["india","italy","Sweden","australia","spain"]   

var result = arr.filter(country => country.charAt(0).toLowerCase() === 'i');

console.log(result); // ["india", "italy"]
=========================================

Rotate an Array to the Right by n


const arr = [1, 2, 3, 4, 5];
const n = 1;
for (let i = 0; i < n; i++) {
  arr.unshift(arr.pop());
}
console.log(arr); // [4, 5, 1, 2, 3]

//arr.push(arr.shift());
==========================================
Find Duplicates in an Array

const arr = [1, 2, 3, 2, 4, 3, 5];

const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log([...new Set(duplicates)]); // [2, 3]
================================================

Array Manipulation

const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 27 },
  { name: 'Abhi', age: 27 },
];

const filtered=users.filter(user=> user.age > 25).sort((a,b)=>{
  return a.name.localeCompare(b.name)
})

console.log(filtered)

o/p [ { name: 'Abhi', age: 27 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 27 } ]

=================================================

Given an array of objects, count how many users are from each city.

const users = [
  { name: "Alice", city: "Delhi" },
  { name: "Bob", city: "Mumbai" },
  { name: "Charlie", city: "Delhi" },
  { name: "David", city: "Mumbai" },
  { name: "Eve", city: "Bangalore" }
];

const cityCount = {};

for (const user of users) {
  cityCount[user.city] = (cityCount[user.city] || 0) + 1;
}

console.log(cityCount);
// { Delhi: 2, Mumbai: 2, Bangalore: 1 }

or reduce method

const cityCounts = users.reduce((acc, user) => {
  acc[user.city] = (acc[user.city] || 0) + 1;
  return acc;
}, {});

console.log(cityCounts);
===================================================

Merge keys and values from two arrays.

const keys = ['name', 'age', 'city'];
const values = ['John', 30, 'Delhi'];

const result = Object.fromEntries(keys.map((key, i) => [key, values[i]]));

console.log(result);
// { name: 'John', age: 30, city: 'Delhi' }

         or
		 
const keys = ['name', 'age', 'city'];
const values = ['John', 30, 'Delhi'];

const result = {};
for (let i = 0; i < keys.length; i++) {
  result[keys[i]] = values[i];
}

console.log(result);
==========================================

function greet(gift){
  console.log(this.name+" recieved a "+ gift)
}

const person1 = {name:"Pradeep"}
const person2 = {name:"Sayunktha"}
const person3 = {name:"Trishaan"}

greet.call(person1,"tea set")
greet.apply(person2,["Mug"]) 
const gn=greet.bind(person3,"cup")
gn()
====================================
 string methods 
 
let text = " ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

text.length;//length
text.split(' ').reverse().join(':')// split
text.charAt(0)=="A" // find char at 0 pos - returns true/false

text.indexOf("A")=== 0 // check  true/flase

text.charCodeAt("A")  // char code
text.at(2) // returns 'C'
text[3] // returns 'D'

text.slice(3,5) // shows portion of the text from 3-5
text.slice(-10,-5)// counts from end
text.slice(5) // removes first 5 char

text.substring(3,5) //same as slice  
text.substr(2,22)

text.toLowerCase() //
text.concat("12345")

text.trim();
text.trimStart()
text.trimEnd()

text.repeat(2) // repeat the string
text.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ","im replaced")

text.indexOf("nn") //0 or -1
text.lastIndexOf("Y")

text.search("J") // 10
======================================

const points = [40, 100, 1, 5, 25, 10];

const min=Math.min(...points)
min: 1
const max=Math.max(...points)
max: 100

       ----another method--

points.sort((a,b)=> a-b)
points[0] // min :1
points[points.length-1]

points.sort((a,b)=> b-a)
points[0];

  using reduce method
const scores = [45, 78, 88, 95, 32];

const max = scores.reduce((a, b) => a > b ? a : b);
console.log(max);  // 95

======================================

const person = [
  {name:"Pradeep", age:34,place:"Bangalore"},
   {name:"raj", age:30,place:"Delhi"},
   {name:"vikas", age:34,place:"noida"},
   {name:"rahul", age:34,place:"mumbai"},
   {name:"mahendra", age:40,place:"Bangalore"},
  {name:"Akash", age:40,place:"Bangalore"},
];

person.map(item=> item.name)
person.filter(item => item.age >32 ).map(item=> item.name)
person.filter(item=> item.place == "Bangalore").map(per=>per.name).sort()

=================================================
const search = person.filter((item)=>{
        return item.name.includes(input)
    })

=====================================
removing falsy array

var arr=[0,1,2,null,undefined,'']

var newarray=arr.filter(Boolean)
console.log(newarray)

=========================================

function repeatstring(str,times){
  return str.repeat(3)
}
console.log(repeatstring("abc",3));
=================================================
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');
=============================================
const city=["London","India","Paris","Australia","Germany"]

console.log(city.includes("London",0))  //true
console.log(city.includes("India",1)) // true
console.log(city.includes("Australia",1)) // false

=============================================

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { apple: 3, banana: 2, orange: 1 }
=========================================

	const nums = [10, 20, 10, 30, 20, 10];

	const count=nums.reduce((acc,num)=>{
	  acc[num]= (acc[num] || 0)+1;
	  return acc
	},{})
	console.log(count)

for(const key in count){
  const times = count[key] === 1 ? 'time' : 'times';
  console.log(`${key} occurs ${count[key]} ${times}`);
}

=======================================================
const person={
  name:"Pradeep",
  age: 29
}
console.log(Object.keys(person)) // returns only keys
console.log(Object.values(person)) // returns only values
console.log(Object.entries(person))// key- values pair
console.log(Object.freeze(person)) // we cannot change or modify after this

console.log(person.hasOwnProperty("name")); returns true 
==================================================
/*array: [1,2,3,4,5,6]
input: 2, output[[1,2],[3,4],[5,6]], 
input: 5, output[[1,2,3,4,5],[6]]*/

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6];

console.log(chunkArray(arr, 2)); // [[1,2], [3,4], [5,6]]
console.log(chunkArray(arr, 5)); // [[1,2,3,4,5], [6]]
========================================================
========================================================
/*output : {
'25':[{ name: 'Alice', age: 25 },{ name: 'Charlie', age: 25 }]
'30':[{ name: 'Bob', age: 30 }]
}*/
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
];

const groupedByAge = {};

users.forEach(user => {
    const key = user.age;
    groupedByAge[key] = groupedByAge[key] || [];
    groupedByAge[key].push(user);
});

console.log(groupedByAge);
         and 
		 
=================================================
function foo(){
  console.log(1)
}
const cn=function foo(){
  console.log(2)
}
foo()
//1 
==================================================
// 2,3,5,7,11,13
function checkPrime(num){
   for(var i=2;i<num;i++){
       if(num%i==0) return false
      
   }
   return true
}

for (var j=1;j<=15;j++){
    if(checkPrime(j)){
        console.log(j)
    }
}
===================================================
Find the Difference Between Two Arrays

function difference(arr1,arr2){
  const set2=new Set(arr2);
  return arr1.filter(item=> !set2.has(item))
}

difference([1,2,3,4],[2,4])  // 1,3
==============================================
const str = "Hello, world!";
console.log(str.includes("world")); // true
console.log(str.includes("test"));  // false

=================================================
const str = "Hello, world!";
console.log(str.indexOf("world") !== -1); // true
console.log(str.indexOf("test") !== -1);  // false
=================================================

const email = "test@example.com";
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(pattern.test(email)); // true
==================================================

function squareroot(num){
  return Math.sqrt(num)
}
console.log(squareroot(25))

//op 5
===================================================
function max(...numbers) {
  return Math.max(...numbers);
}

console.log(max(4, 8, 5));  // Output: 8
==================================================
function printVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const result = [];

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      result.push(char);
    }
  }

  console.log(result.join(', '));
}

// Example usage:
printVowels("hellow world"); // Output: e, o, o
     0r
	 
function printVowels(str) {
  const matches = str.match(/[aeiou]/gi); // 'g' = global, 'i' = case-insensitive

  if (matches) {
    console.log(matches.join(', '));
  } else {
    console.log("No vowels found.");
  }
}

// Example usage:
printVowels("hellow world"); // Output: e, o, o
======================================================
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

async function asyncFunction() {
  console.log('Async Start');
  await null;
  console.log('Async End');
}

asyncFunction();

console.log('End');

o/p: 

Start
Async Start
End
Promise
Async End
Timeout
============================================================

let arr = [1, 2, 3, 3, 5, 6, 8, 9, 20];

// Remove duplicates
let uniqueArr = [...new Set(arr)];

// Find the max
let max = Math.max(...uniqueArr);

// Remove the max from the array
uniqueArr = uniqueArr.filter(num => num !== max);

// Find the second highest
let secondMax = Math.max(...uniqueArr);

console.log(secondMax); // Output: 9
============================================
const obj = { name: "Pradeep", age: 27, place: "udupi" };
const result = [obj];

console.log(result);
// Output: [{ name: "Pradeep", age: 27, place: "udupi" }]
===============================================

     splice method in array
	 
	 array.splice(start, deleteCount, item1, item2, ...)
	 
	 let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.splice(1, 2); // Removes 2 items starting from index 1
console.log(fruits); // Output: ["Apple", "Orange"]


let colors = ["Red", "Blue"];
colors.splice(1, 0, "Green", "Yellow"); // Insert at index 1 without deleting
console.log(colors); // Output: ["Red", "Green", "Yellow", "Blue"]


let numbers = [1, 2, 3, 4];
numbers.splice(1, 2, 9, 8); // Removes 2 items at index 1 and adds 9, 8
console.log(numbers); // Output: [1, 9, 8, 4]

     note: modifys orriginal array
	 
===============================================
 
    slice method in array
	
	array.slice(start, end)
start: The index to begin extraction (inclusive).

end: The index to stop extraction (exclusive). Optional.
	
	let colors = ["Red", "Green", "Blue", "Yellow"];
let slicedColors = colors.slice(1, 3); // from index 1 to 2 (not 3)
console.log(slicedColors); // Output: ["Green", "Blue"]

let numbers = [10, 20, 30, 40, 50];
let result = numbers.slice(2);
console.log(result); // Output: [30, 40, 50]



let fruits = ["Apple", "Banana", "Mango", "Orange"];
let lastTwo = fruits.slice(-2); // Starts 2 from the end
console.log(lastTwo); // Output: ["Mango", "Orange"]
	 
	 note: this will not modify original array
================================================

const arr1=[1,2,3,4,5,6]

const arr2=[7,8,9,10];
const merged=arr1.concat(arr2)
console.log(merged)  //  [1,2,3,4,5,6,7,8,9,10]

  or
  
const arr1=[1,2,3,4,5,6]

const arr2=[7,8,9,10];
const merged=[...arr1,...arr2]
console.log(merged)  //  [1,2,3,4,5,6,7,8,9,10]


const arr1=[1,2,3,4,5,6]

const arr2=[7,8,9,10];
const merged=arr1 + arr2
console.log(merged)  // [1,2,3,4,5,67,8,9,10]  // last elements are merged in each array 67


const arr1=[1,2,3,4,5,6]

const arr2=[7,8,9,10];
const merged=[arr1,arr2]
console.log(merged)  // [ [ 1, 2, 3, 4, 5, 6 ], [ 7, 8, 9, 10 ] ] will create two sepaate array
============================================================


function abc(arr){
let total=0;
   for(var i=0; i<arr.length;i++){
       total += arr[i];
   }
  return total;
}

const arr=[1,2,3,4,5]
abc(arr) // sum 15

==================================
function memoadd(){
let cache={}
 return function(n){
 
     if (n in cache){
	   console.log("from cache");
	   return cache[n];
	 } else {
	   console.log("calculating again");
	   cache[n]= n+10;
	   return cache[n];
	 }
 }
}

const add=memoadd();
add(5);
====================================
const arr=[1,2,3,4,5];
let result=0;
for (let i=0;i<arr.length;i++){

   result += arr[i];
}
console.log(result);   sum 15
====================================
currying

function add(a){
    return function(b){
        return a + b;
    }
}
console.log(add(5)(5))
====================================

function outer(){
    let count=0;
    
    return function inner(){
        count++
        return count
    }
    
}

const counter1=outer();
console.log(counter1()) //1
console.log(counter1())//2

const counter2=outer();
console.log(counter2())//1
console.log(counter2())//2
================================

const obj={
    name:"pradeep",
    greet:function(){
        console.log(`hell0 ,${this.name}`)
    }
}

obj.greet()

const newgreet=obj.greet;
newgreet()

hell0 ,pradeep
hell0 ,undefined

    solution
	
	we can use bind method 
	const newgreet = obj.greet.bind(obj);
newgreet(); // hell0 ,pradeep

=============================
let f="8";
let a=1;
console.log((+f)+a+1)  //10
==================================

javascript methods

https://www.linkedin.com/feed/update/urn:li:groupPost:8571393-7347823330550280192?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA9Bj9EB9mKrGS8STUPtA26clFDMfDGdUgI

https://www.linkedin.com/posts/rahul-choudhary-py_javascript-ugcPost-7348594216983265280-7-eZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA9Bj9EB9mKrGS8STUPtA26clFDMfDGdUgI

https://www.linkedin.com/posts/amankumar2k24_javascript-is-asynchronous-or-synchronous-activity-7349995998431072258-rMdW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA9Bj9EB9mKrGS8STUPtA26clFDMfDGdUgI

https://www.linkedin.com/posts/vipul-kumar-kewat-1b5a48277_java-script-notes-activity-7350043204882169856-4vN5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA9Bj9EB9mKrGS8STUPtA26clFDMfDGdUgI

https://www.linkedin.com/posts/dharamgfx_js-activity-7353076873653899267-0pQC?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA9Bj9EB9mKrGS8STUPtA26clFDMfDGdUgI

https://www.linkedin.com/posts/arunsharma021_javascript-concept-activity-7355149204345753600-ZZuk?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA9Bj9EB9mKrGS8STUPtA26clFDMfDGdUgI

https://www.linkedin.com/posts/vinothkumar-j-dev_master-and-crack-the-interview-activity-7355105111083307008-Pwdb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA9Bj9EB9mKrGS8STUPtA26clFDMfDGdUgI


https://www.linkedin.com/posts/theabdul-rehman345_new-react-hooks-19-activity-7355816863504736260-o2ZQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA9Bj9EB9mKrGS8STUPtA26clFDMfDGdUgI

https://www.linkedin.com/feed/update/urn:li:groupPost:10487081-7353048821502787584?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA9Bj9EB9mKrGS8STUPtA26clFDMfDGdUgI
===================================