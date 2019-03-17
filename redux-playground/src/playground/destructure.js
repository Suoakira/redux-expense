console.log("redux 101")
// object destructuting

const person = {
    name: "steve",
    age: 23, 
    location: {
        city: "london",
        temp: 92
    }
}

const { name , age } = person
console.log(`${name} is ${age}`)



// array destructuring

const address = ['12 George', `London`, `paris`]

const [street, city, zip] = address

console.log(street)