let leftButton = document.getElementById("left-arrow");
let rightButton = document.getElementById("right-arrow");

let leftBox = document.getElementById("box1")
let rightBox = document.getElementById("box2")

let leftBasket = 100;
let rightBasket = leftBasket-100;
leftBox.innerText = leftBasket
rightBox.innerText = rightBasket

rightButton.addEventListener('click',()=>{
    if(leftBasket>0)
    {
        leftBasket--;
        rightBasket++;
        leftBox.innerText = leftBasket
        rightBox.innerText = rightBasket
    }
})

leftButton.addEventListener('click',()=>{
    if(rightBasket>0)
    {
        leftBasket++;
        rightBasket--;
        leftBox.innerText = leftBasket
        rightBox.innerText = rightBasket
    }
})