//we cannot changes datatype directly
//like 
var arr = [1,2,3,4];
// var arr2 = arr;
// arr.pop()           //we cannot do like this
//instead of this we can change state as

arr = [1,2];

// console.log(arr);

// reference variables cannot be copy directly hence use SPREAD OPERATOR 
//Eg - 
// var state = [1,2,3,4,5];
// var copy = [...state];     //array get copied
// copy.pop();
// console.log(state);
// console.log(copy);

//In case of objects we cannot change directly
var state = {name:"harsh",age:24};
// state.name = "Harshita";      react not to do this

var copy = {...state}  //copy this 
copy.name = "Harshita";   //it is acceptable
state = copy;             //now copy to state it is acceptable in REACT for changing values

// !imp - we cannot change state directly for that we have to create one copy and then paste into the state


//destructuring
//don't make use of an property like
state.age;
state.age;
state.age;
state.age;
state.age;
state.age;
state.age;
state.age;
// dont use like this in website or in production level code
//instead of writing like this 
// use -
var obj = {name:"harsh",age:24};
const {age} = obj;

//another example
var objee = {name:"harsh",age:24, email:"lalalllalal@gmail.com"};
const {email} = objee; //here is object hence used {}, if there is array then use []

//another complicated example
var object = {
    name: "string",
    social: {
        facebook: {
            first: "haaah",
            sec: "asdasda",
        },
    },
};

//use -
const {sec} = object.social.facebook   //here go upto facebook


//access in order
var arr = [12, function(){ console.log("Hi"); }];
const [first,seconddd] = arr;
console.log(seconddd);


//skip one method use ,,
var party = [123 , function(){}, 123.211]
const [one,,three] = party;
console.log(one);
console.log(three);

