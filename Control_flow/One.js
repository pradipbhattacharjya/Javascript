//if

// const isUserloggedIn = true

// if (2 ==="2"){
//     console.log("executed");
// }
//<,>, <=,>=, ==, !=, ===, !==

// const isUserloggedIn = true
// const temperature = 41

// if (temperature === 41) {
//     console.log("less than 50");
// }else {
//     console.log("temperature is greater than 50");
// }


// const score = 200

// if(score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }


// const balance = 1000

// // if(balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");

// } else if (balance < 750) {
//     console.log("less then 750");
// }else if (balance < 900) {
//        console.log("less then 900");
// }else{
//     console.log("less then 1200");
// }


const isUserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserloggedIn && debitCard) {
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}