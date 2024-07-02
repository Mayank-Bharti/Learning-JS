//before there is only one method to execute JS which is in browser engine and in browser when we run this ,then max global object is window
//so we capture all event of window like click,capture,etc...

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this); //This is outside the current scope , so output is {}

//  function chai(){
//     let username = "hitesh"
//     console.log(this.username); //output : undefined  because this is used inside object not function
//     console.log(this); //reference of  object global
// }

//  chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); //output:undefined
//     console.log(this);//reference of  object global
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this); //output:{}
    console.log(this.username);//output:undefined
}


 chai()

const addTwo = (num1, num2) => {
    return num1 + num2
}

//const addTwo = (num1, num2) =>  num1 + num2 //implicit return

// const addTwo = (num1, num2) => ( num1 + num2 ) //this technique is used in react

//const addTwo = (num1, num2) => ({username: "hitesh"}) //object return karne ke liye parenthesis mein rap karna padega


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach() //forEach(iske andar arrow function or normal function de sakte h)