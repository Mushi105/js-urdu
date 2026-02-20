// Prmitive
//call back value is ka memory ka refernce hota hia 


// Non Primitive or refernce type


const score=100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTyemp = null


console.log("Mubashir Hasan");


const accountId=243242342
let name='Mubashir Hasan'
var city='Karachi'
datatype='test'
let variable;
var cityvar;
//console.table([accountId,name,city,datatype,variable,cityvar])

/*

Prefer not to use var
becasue of issue in block scope and funation  scope

*/



// Primititve
// 7 type String, Number, Boolean, Null, Undefince, Symbol
//BigInt
// Array Object Function



const id = Symbol('123')
const anotherId=Symbol('123')

console.log(id);
const bigNumber = 12323131n
console.log(bigNumber);

console.log(typeof bigNumber);


const heros = ["Imam Zaman", "Hussain", "Ali"];
let myObj=
{
    name:"Mubashir",
    age:22,


}


//console.log(myObj);
const myFunction= function(){
    console.log("Mubashir Hasan");
    
}

console.log(typeof myFunction);
