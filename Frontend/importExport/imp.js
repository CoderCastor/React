//we are making component in React like
//simply component means part of a page
//like sidebar , navbar, cart, landing page

//we storing these components in separate files and for showing
//on single page we are joining them together hence we are
//using import and export in react

// like   navbar in file1
// sidebar in file2
//cart in file3

// so export all these thing from each files
//export file1,file2,file3

//and import in main file
//import navbar,sidebar,cart


//There are two ways for export 




//method 1

// function Cart(){

// }

// export default Cart;
//export default <functionNameForExport>
//In this method we can export only one function
//import this with 
// import Cart from ./filename




// method 2   - named export
// export function sidebar(){

// }

// export function navbar(){

// }

//we can export multiple files from it
//for importing
//import {sidebar,navbar} from "./filename"






//arrow function Implicit return
//fat arrow fucntion  ---  () is fat   => arrow
//fat arrow  ()=>
const abcd = () => {

}
const sdcd = ()=> {

}
const asda = ()=>{

}
//abcd();  //function call



//fat arrow function with one parameter
// const dsba = (val)=>{
//     console.log(val);
// }
// dsba(12);

// if there is only one parameter then remove fat write -
const fgds = val => {
    console.log(val);
    
}
fgds(43);
//when only there is one parameter



//another case
const fsda = ()=>32;  //it will return value after calling function
// const fsda = ()=>{32}; do not use brackets 
//if used brackets then return with keyword
//const fsda = ()=>{ return 32};

// like 
console.log(fsda()+1);   //output is 33


//return string
const sdsdfs = ()=>"tejas";
console.log("hello "+sdsdfs());   //#hello tejas

// return object  --> tricky
// const sda()=>{name:"rahul"} ---> compiler gets confuse {} treat as body
// hence use ()
const sda = () => ({name: "rahul"});
const dsa = () => ({name: "radhika",age : 32});




