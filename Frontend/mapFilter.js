//map filter
// logical code


// both are use on array for operations and returns new array
//return new array is IMP

var arr = [1,2,3,4,5]
//map    perform something on each element and return new array
//inside map return is must

// arr.map(val =>{
//     return val*2;
// })
// we can write above code like --->
arr.map(val=>2*val);

const returnArray = arr.map(val=>2*val);
console.log(returnArray);

//returned array stored in returnArray
//return plays whole roll to place elements in new array


//USE CASE

//return elements by incrementing by 5 which are greater than 5

var state = [11,32,3,4,5,6,7,8,9,10,11,12,13,14,15];
var ans = state.map(ele => ele>5 ? ele+5 : ele)
console.log(state);
console.log(ans);



// !IMP -  in map and filter there is only one diff
//map returns all elements , count remains as it is
//filter can decrease the number of elements




//filter
var arr = [1,2,3,4,5,6];
const answer = arr.filter(ele => ele>4);
//here arr.filter(ele => <true/false>)
// condition either true or false
//if we write true then it simply copy the array by returning all elements
console.log(answer);    //#[5,6]

//USE CASE FILTER --------->

var info = [
    {name: "hritik",gender: "male"},
    {name: "manasi",gender: "female"},
    {name: "vansh",gender: "male"},
    {name: "sonal",gender: "female"}
];

const males = info.filter(ele => ele.gender === "male");
console.log(males);



