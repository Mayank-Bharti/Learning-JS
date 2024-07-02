//Block scope : we can defined inside a bolck of code like function,condition ,control flow ,etc..
//Global scope:Define globally
//problem in using var is when we define var first inside the block scope and changes globally , then also outside that block scope its values is value which is inside the block scope
//closure function : jo child function h wo parent function ke variable ko access kar leta h or andar ka function bahar ke variable ko access karta h
//console mein scope check karne ka tareeka and scope alag hai and node mein alag hai
var c = 300
let a = 300
const b=400
if (true) {
    let a = 10
    const b = 20
    var c=30
     console.log("INNER: ", c);
     console.log("inner: ", a);
     console.log("IN: ", b);
}



 console.log(a);
 console.log(b);
 console.log(c); //Examples of problem of var


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
     //console.log(website); //this is outside the  block scope i.e function two()

    two() // Reason of closure function 

}

 // one() //call to hoga par call hone ke baad koi console log one function mein to hai hi nahi and two function ko to access bina call kiye kar nahi sakte

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
         console.log(username + website);
    }
    // console.log(website); //out of scope 
}

 //console.log(username); //out of scope


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



//console.log(addTwo(5))  //it  won't access addTwo expression of function(num)
const addTwo = function(num){  //yaha function declare karne ke sath sath variable mein hold bhi kiye h//it is also a  function but sometime it is called expression . JS ke andar variable ka bahut bada role h function ko bhi hold kar leta h
    return num + 2
}
console.log(addTwo(5))