// Loops in object

let obj = {
    name:"chintu",
    age:20,
    status:true
}

// for.. in loop

for(let key in obj){
    console.log(key, typeof key);
    // console.log(obj.key);
    console.log(obj[key]);
    
    
    
}