//when we call function then element inside function is argument 
//when we define function then element inside function is paramater
//!username =>username===undefined
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

     let result = number1 + number2
     return result
    // return number1 + number2
}

const result = addTwoNumbers(3, 5)

 console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

 console.log(loginUserMessage("hitesh"))
 console.log(loginUserMessage("mayank"))


function calculateCartPrice(val1, val2, ...num1){ //here ... is rest operator after printing two values is go inside val1 and val 2 and remaining become array of num1
    return num1
}

 console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));