/* memory :- 
there are two type of memry 
1.> stack
2.> heap



stack:-----> copy
heap:->>>>>>> refrence
*/
let nameOne = "Himanshu"
let nameTwo = nameOne
nameTwo ="Gaurav"

// console.log(nameOne);
// console.log(nameTwo);



let myAddress = {
    street:  "Diwanganj",
    name: "himanshu",
    number: 8757643800


}
 
let YourAddress = myAddress

YourAddress.name = "gaurav"

console.log(myAddress.name);
console.log(YourAddress.name);