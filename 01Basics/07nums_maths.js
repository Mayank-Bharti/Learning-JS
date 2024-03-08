const score = 400
    console.log(score)

const balance = new Number(100) // when we write this line-4 and 5 in browser console then we get
    console.log(balance) //protype of number like we can convert number to string function etc....


console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 123.8966
const other = 23.8966
const number = 1123.8966

console.log(otherNumber.toPrecision(3))
console.log(number.toPrecision(3))
console.log(other.toPrecision(3))

//go to console of web browser and write Number , then when again we write Number. (we get many properties of number)

const hundreds = 1000000
 console.log(hundreds.toLocaleString('en-IN'))
 console.log(hundreds.toLocaleString())

// +++++++++++++ Maths +++++++++++++++++++++++++++++

 console.log(Math)//when we write this line to browser console then all functions of maths appears
 console.log(Math.abs(-4))
 console.log(Math.round(4.6))
 console.log(Math.ceil(4.2))//4.2=5
 console.log(Math.floor(4.9))//4.9=4
 console.log(Math.min(4, 3, 6, 8))//3 is minimum
 console.log(Math.max(4, 3, 6, 8))//8 is maximum

console.log(Math.random())//always come in between 0 and 1
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)// for range from 1 to 10 ,for making game where we want random
                                              //number generation eg: ludo 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // formula of finding random number in any range 
                                                              //like here for min=10 to max=20