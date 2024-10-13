console.log("Hello World!")
console.log("Hello Miss!")

var a = 5;
var b = 3;
var c = "Ujjawal ";
var d = "Divyanshu";

console.log(a + b -2)
 console.log(typeof a, typeof b, typeof c);

 console.log("Ujjawal " + "Divyanshu");

 console.log("For Variable Creation:-");
 var p = 5;
//  Old Method, Function-Scoped, allows re-declaration
 let _q = 6;
//  Block-scoped, doesn't allow re-declaration, prefered for modern JavaScript
 const $r = 45;
// Block scoped, constant value that can't be reassigned.

 console.log(p + _q + $r);
 {
     let p = 50;
     console.log(p);
 }

 console.log("OBJECTS:");

 let person = {
    "name":"Sweety",
    "job Code": 5600,
    "salary": 1000000,
    "is handsome": true
 };


console.log(person); 
person.salary = 500000;
console.log(person);



