// singleton: constructor ke through jo object banate h to singleton object banta h
// Object.create:This is constructor method to create object

// object literals: singleton nahi banta , ye bhi object ko declare karna ka tareeka h

const mySym = Symbol("key1") //unique data types

//object literals is given below:
//Array mein index ke through hi value ko access kar sakte h
//But in object we can use key and its value to access 
const JsUser = {
    name: "Mayank",
    "full name": "Mayank_Bharti",
    [mySym]: "mykey1", //symbol ke tarah use karna ke liye mySym ko square bracket mein likhte h nahi to ye string type h  mySym:'mykey1'
    age: 18,
    location: "Amethi",
    email: "mayank@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//There are two type to access object: one using dot and other using square bracket
 console.log(JsUser.email)
 console.log(JsUser["email"])
 //console.log(JsUser."full name") //But for accessing this object we have to use only bracket method ,ther is no other methods . So dot method is not used or wrong method and gives error.
 console.log(JsUser["full name"])
 console.log(JsUser[mySym]) //to print symbol data types
 console.log(typeof(JsUser[mySym])) //doubt: Abhi bhi type string hi de raha h??=> Answer: Type string hi iska batayega but agar JsUser print karenge to last mein aayega [Symbol(key1)]:'mykey1' and agar square bracket nahi denge to normal string ke tarah aayega
JsUser.email = "hitesh@chatgpt.com"
 //Object.freeze(JsUser) //Now we can't do changes in JsUser.
JsUser.email = "hitesh@microsoft.com"
 console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//If i have to reference same user , then we use this
}
// JsUser.greeting();
// JsUser.greetingTwo(); //Direct call bhi car sakte h

// console.log(JsUser.greeting()); //Return ke jagah pe print use karne pe kuch return to hoga na , isliye run karne Hello JS user and undefined aata h.
// console.log(JsUser.greetingTwo());

return JsUser.greeting(), JsUser.greetingTwo();