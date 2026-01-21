const { Console } = require("console");

console.log("Hello")
let y=5;    //number
y=10;  //retinitialize   it's now string
//let y = 10;    //not possible can't Re-declare
console.log(y)


var a=5;
var a="ABC";   //Re-Declare
a=10;         //Re-Intiliaze
console.log(a);


const s = "CBA";
//s="KCM"  //Can't Re-Initialize
//const s= "KKK"  //Can't Re-Decclare
console.log(s);

const details = {                            //Object
    name: "ALX",
    designation: "Work",
    year: 2026,
    location:"Kolkata"
};

console.log(details);
console.log(typeof(details));                  //output: object
console.log(typeof(details.year));             //Number
console.log(Array.isArray(details));           //False


const arr = ['a', 'e', 'i', 'o', 'u'];

console.log(arr[0]);
console.log(arr[4]);
console.log(typeof(arr));               //object 
console.log(Array.isArray(arr));       //true
console.log(arr.indexOf('i'));
arr.push('k');   //add at the end of array
console.log(arr);
arr.unshift('first');   //adds as the beginning
console.log(arr);
console.log(arr.length);
arr.shift();   //removes the first element
arr.pop();  //removes last element
arr[0] = 'A';    //adding the data. existing will be overwritten
var slice = arr.slice(1,3);
console.log(slice);
slice = arr.slice(2);
console.log(slice);
slice = arr.slice();
console.log(slice);

const obj = {a:"aakash", b:3, c:9}
console.log("Hello" +obj);

const data = ["A", "B", "E", "F", "G"];
data.splice(2,0,"C","D");    //want to add C and D from second position...., why adding 0 there ?
                            //Because 0 means no elements will be deleted after insertion at that position and 
                            //if 1 then 1 will be deleted and 2 and so on...
console.log(data);


//Function

function add(x,y){
    return x+y;
}

console.log(add(3,5));


const number = 10;

if (number > 0){
    console.log("+ve");
}else{
    console.log("-ve");
}


const today = new Date();   //Date() is a predefined function for system time date and everything...

console.log(today);
console.log(today.getDay());    //3

switch (new Date().getDay()){     //3 
    case 0:
        day = "Sunday";
        break;

    case 1:
        day = "M";
        break;
    
    case 2:
        day = "T";
        break;

    case 9:
        day = "W";
        break;

    case 4:
        day = "T";
        break;

    case 5:
        day = "F";
        break;

    case 6:
        day = "S";
        break;

    default:
        day = "Select Valid Option ";
}

console.log(day);


const ok = ["okay", "oka", "ohkay"];

for (let i=0; i<ok.length; i++){
    console.log(ok[i]);
}


const f=[2,4,6];
f.forEach(fun);

function fun(element, index){
    console.log(index);
    console.log(element);
}

//or
const k=[1,2,3];

k.forEach(function(element, index){
    console.log("                "+index);
    console.log(element);
});

//while

let i=0, n=5;

while(i<n){
    console.log(i);
    i++;
}

//lamda : shorten the implementation

add2 = (a,b) => {return a+b};

console.log(add2(1,2));

add3 = (c,d) => {console.log(c+d);}

add3(3,4);


//try catch

n=10;
d="a";

try{
    console.log(n/d);
    console.log(p);  //forgot to define variable a
}catch(error){
    console.log('An error caught' +error);
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log("Executed");
}



const age = 15;

try{
    if(age>=18)
        console.log('Valid to vote...');
    else{
        throw new Error ('Not capable to vote'); //user-defined exception
    }
}
catch (error){
    console.log("error occured: " +error);
}
