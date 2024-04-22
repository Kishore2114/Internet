console.log("Hello Javascript ")
console.log(1+2)
//const , var ,let
const pi=3.1415;
//pi=6.28
var x=1;
var y =1.4
var z="hello";
var a=[x,y,z];
console.log(a)
var lst = [1,"0",[1,2],4.8,true];
console.log(lst)
// var obj={
//     name:"Mr x",
//     job :"Hacker",
//     age:23,
//     address:"bengaluru"
// }
// console.log(obj)
// var phone={
//     name:"xiaomi 11i",
//     color:["black", "purple","white"],
//     company:"xiaomi",
//     size:["128GB","256GB"]
// }
// console.log(phone)
let str1='Hello';
let str2="world";
let str3=`hello 
world`;
console.log(str1)
console.log(str2)
console.log(str3)

let outcome=[[1,2,3,4,5,6],
             [2,3,4,5,6,7],
             [3,4,5,6,7,8],
             [4,5,6,7,8,9],
             [5,6,7,8,9,0],
             [6,7,8,9,0,1]]
console.log(outcome[4][3])

let D3=[
        [
            [1,2],
            [1,2]
        ],
        [
            [1,2],
            [1,2]
        ],
        [
            [1.2],
            [1,2]
        ]
    ]//3*2
let sum = 1 + 1.4; // 2.4
let dif = 1 - 1.4; // -0.4
let mul = 2 * 4; // 8
let div = 4 / 2; // 2
let mod = 5 % 2; // 1
let pow = 5 ** 2; // 25
let ex1 = 2 * (1 - 6 / 2); // -4
console.log(sum,dif,mul,div,mod,pow,ex1)

let isMore = 2 >= 4; // false
let isLess = 5 < 10; // true
let bool1 = isMore || isLess; // true
let bool2 = isMore && isLess; // false
let isEqual1 = 0 == '0';//true type conversion
let isEqual2 = 0 === '0'; //false no type conversio
let notEqual1 = 0 != '0'; //false
let notEqual2 = 0 !== '0'; //true
console.log(isMore,isLess,bool1,bool2,isEqual1,isEqual2,notEqual1,notEqual2)

let strs1 = 'Hello';
let strs2 = 'World';
let strs3 = str1 + ' ' + str2;//'Hello World'
let num = 42;
let str4 = `The answer to universe is ${num}.`;// The answer to universe is 42.
console.log(strs1,strs2,strs3,num,str4)

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1 + arr2; // '1, 23, 4'
// ... spread operator
let arr4 = [...arr1, ...arr2];// [1, 2, 3, 4]
console.log(arr1,arr2,arr3,arr4)

//objects
let obj1 = {
    name: 'Mr X',
    job: 'Hacker',
    salary: 1000,
    address: 'Bangaluru'
}
console.log(Object.keys(obj1)); // [name, job, salary, address]
let obj2 = {
    name: 'Mr X',
    job: 'Hacker',
    salary: 1000,
    address: 'Bangaluru'
}
console.log(Object.keys(obj2));
let isEq1 = obj1 == obj1; // false
let isEq2 = obj2=== obj2; // false
console.log(isEq1,isEq2)

