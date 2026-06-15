// Array Data
// it is collection of different data type
// array has dynamic size/length
// contiguous/ordered memory allocation
// indexing
// Mutable -> inbuilt function that is used to change arr value
// non-primitive datatype

var arr = [1,true,"hello"];
console.log(arr);

arr.push(5);
console.log(arr);

// 1. create

var arr = [];
arr = [1,2,3]

//2. Read
console.log(arr, typeof arr);

// read specific position/ value
console.log(arr[1]);

// 3. Update
// add RHS/Ending ->[push]
arr.push(10);

console.log(arr);

// add LHS/Starting -> Unshift
arr.unshift(100);
console.log(arr);

arr[2] = 20;
console.log(arr);

// 4. Delete

// RHS pop()

arr.pop()
console.log(arr);

// LHS Shift()
arr.shift()
console.log(arr);







