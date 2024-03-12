//singleton

//object literals


//Object.create
const mySym = Symbol("key1")


const JsUser = {
    name: "pradip",
    "Full name": "Pradip Bhattacharjya",
    [mySym]: "mykey1",
    age: 18,
    location: "Kolkata",
    email: "bhattacharjyapradip41@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}
// myArray = ["h", "i"]
// myArray[1]

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["Full name"])
console.log(JsUser[mySym])



JsUser.email ="pradipbhattacharjya12@gmal.com"
// Object.freeze(JsUser)
JsUser.email ="pradipbhattacharjya123@gmal.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Jsuser");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
