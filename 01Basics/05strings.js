const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); this is outdated and not use in modern days
//nowadays we use backtrace(``) because here comes string interpolation in which we make place holders 
//where we can fill any variables in curly braces{} example is given below:
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Mayank_Bharti')

 console.log(gameName[0]);
 console.log(gameName.__proto__);


 console.log(gameName.length);
 console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)// if we give negative value to substring then it ignores negative value and starts with 0 but no give error.
console.log(newString);

const anotherString = gameName.slice(-8, 4)//slice mein negative value bhi de sakte h eg. (-8,4)or (0,4) bhi de sakte h
console.log(anotherString);

const newStringOne = "   mayank    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));