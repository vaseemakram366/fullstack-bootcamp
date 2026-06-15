// Object data type

// Non primitive
// collection of key value pair 
// Mutable
// {}
// Dynamic in size/length
// key -> string, value -> anything(interview)
// key -> unique, value -> can be duplicate(interview)

// CRUD

// 1. Create

let obj ={};
obj = {
    id:23,
    name:"love",
    hobby:["travelling", "singing", "training"],
    status: false,
    address: {
        city: "gurugram",
    },
};

// 2. Read

console.log(obj, typeof obj);

// bracket notation ex. obj["key"]
// dot notation ex. obj.key

// 3. Update

obj["status"] = true;
obj.name = "vaibhav"

// create a new key value pair
obj.email = "l@gmail.com"

console.log(obj);

delete obj["email"]
delete obj.id

console.log(obj);





