//If we want to know more about object then go to console of browser and type this=> const obj1 = {1: "a", 2: "b"} and after that after typing obj1 we get every properties of object

//Singleton using constructor

const tinderUser = new Object() //This is singleton object
//const tinderUser = {} // This is non-singleton object and both line 3 and 4 has same output: {} (empty curly braces)
console.log(tinderUser); //Output:{}
tinderUser.id = "123abc"
tinderUser.name = "Mayank"
tinderUser.isLoggedIn = false

console.log(tinderUser); //Output:{ id: '123abc', name: 'Mayank', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

 console.log(regularUser.fullname.userfullname.firstname); //Object ke andar object ka accessing using dot
 console.log(regularUser.fullname?.userfullname.firstname); //agar full name h to ye karo nahi to ye karo. This syntax is used in api integration. If this syntax won't there then we use if-else
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

 //const obj3 = { obj1, obj2 } //output:{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
 //const obj3 = Object.assign( {},obj1, obj2,obj4)//output:{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }   Object.assign():The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
                                                  // We take {} because in merging more than two object we need {} as a syntax. Agar ye nahi bhi denge to sari value obj1 mein jayegi. We won't get error but it is not good syntax.
//const obj3 = Object.assign(obj1, obj2) //output:{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } Here we won't need {}
const obj3 = {...obj1, ...obj2,...obj4} //Again spread operator in object //output://{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' } //here we won't write extra parenthesis
//const obj3 = {...obj1, ...obj2}//output:{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3);



//Array of many objects from data base:

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email )//Array ka first value i.e one object and where i accessed email //output:h@gmail.com

console.log(tinderUser); //output:{ id: '123abc', name: 'Mayank', isLoggedIn: false }

 console.log(Object.keys(tinderUser)); //tinderUser object ki sari keys//output:[ 'id', 'name', 'isLoggedIn' ] //datatype:array
 console.log(Object.values(tinderUser)); //output:[ '123abc', 'Mayank', false ] //datatype:array
 console.log(Object.entries(tinderUser)); //output:[ [ 'id', '123abc' ], [ 'name', 'Mayank' ], [ 'isLoggedIn', false ] ]

 console.log(tinderUser.hasOwnProperty('isLoggedIn')); //output:true


 //+++++++++++++++++++++++++++++Next_Lecture_of_object+++++++++++++++++++++++++++++++++++++++++

 //Destructuring the object
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor //This is method to access course instructor but for clean code

//Another syntax for accessing this is given below:
//This is destructuring of object and this method is mostly used in react.js:
const {courseInstructor} = course
    console.log(courseInstructor); //Output:hitesh
const {courseInstructor: instructor} = course
    console.log(instructor); //Output:hitesh


//JSON and API aage ke lec mein padhenge detail se:

// Given below is json:
//ye object nahi h kyunki object ka naam hota h ye json h and in json both keys and values are in string
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//api array ke form mein call hota h
//This is also json
//hamesha object json format mein hi bhejna hota h
[
    {},
    {},
    {}
]

//Apna kam kisi ke head pe dalna is api.