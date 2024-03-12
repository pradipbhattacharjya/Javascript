// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Pradip"
tinderUser.isLoggedIn =false


// console.log(tinderUser);

const regularUser = {
    email: "prsdipbhattacharjya41@gmail.com",
    fullname: {
        Userfullname:{
            firstname: "pradip",
            lastname: "Bhattacharjya"

        }
    }
}

// console.log(regularUser.fullname.Userfullname.firstname);

const Object1 = {1: "a", 2: "b"}
const Object2 = {3: "a", 4: "b"}
const Object4 = {5: "a", 6: "b"}

// const Object3 = {Object1,Object2}
// const Object3 = Object.assign({}, Object1, Object2, Object4)

const Object3 = {...Object1, ...Object2, ...Object4}
console.log(Object3);


const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
]

users[1].email
console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));