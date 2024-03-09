//Ctrl+space =>all values or properties of vs code are opened.
// array
//when we initialize arr in console browser then we get again protype and properties of arr
const Number=[0,1,2,3,4,5]
console.log(Number) //[0,1,2,3,4,5]

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) 
console.log(myArr2); //[1,2,3,4]
console.log(myArr[1]);//1

// Array methods

 myArr.push(6) //6 is push at last of array
 console.log(myArr) //[0,1,2,3,4,5,6]
 myArr.push(7) 
 console.log(myArr) //[0,1,2,3,4,5,6,7]
 myArr.pop()
 console.log(myArr)//last elements of array get removed [0,1,2,3,4,5,6]

 myArr.unshift(9) //we have to shift every value of array and 9 is place in first position
                  //so for large value its take much time and space.So unshift is very bad for programmers
                  //But for any work which i need data to appear in first in array,we have to use it because before 
                  //optmisation ,work is priority.
 console.log(myArr) //[9,0,1,2,3,4,5,6]
 myArr.shift() //it removes first elements of array
 console.log(myArr)//[0,1,2,3,4,5,6]

 console.log(myArr.includes(9));//false
 console.log(myArr.includes(3));//true
 console.log(myArr.indexOf(3));//3
 console.log(myArr.indexOf(9));//-1
 
 const newArr = myArr.join()

 console.log(myArr);//[0,1,2,3,4,5,6]
 console.log( newArr);//0,1,2,3,4,5,6
 console.log(typeof(myArr));//object
 console.log(typeof(newArr));//string


// slice, splice

//Main difference between slice and splice is that when we slice then original array won't change or 
//sliced part will also there in original array.

//But when we do splice then part of spliced array is removed from original array which is given below

//One more visibility difference is , this is not main difference , in slice ending range value is not included 
//and in splice it also included.

console.log("A ", myArr);//A [0,1,2,3,4,5,6]
const myn1 = myArr.slice(1, 3)
console.log(myn1);//[1,2]
console.log("B ", myArr);//B [0,1,2,3,4,5,6]


const myn2 = myArr.splice(1, 3)
console.log(myn2);    // [1,2,3]
console.log("C ", myArr); //C [0,4,5,6]