

function sayMyName(){
console.log("p");
console.log("r");
console.log("a");
console.log("d");
console.log("i");
console.log("p");

}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2

}

const result = addTwoNumbers(2,4)
// console.log("Result:",result);

//function loginUserMessage(username){
function loginUserMessage(username = "sam"){

    if(username === undefined){
        console.log("pleace enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("pradip"));
// console.log(loginUserMessage());


function calculatateCartPrice(...num1){
    return num1

}
// console.log(calculatateCartPrice(200, 400,500,2000))

const user = {
    username: "pradip",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "subha",
    price: 399
})

const myNewArrat =[200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArrat))
console.log(returnSecondValue([200,400,500,600]));
