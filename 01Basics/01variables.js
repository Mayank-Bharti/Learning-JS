//difference between text file and js file:
// Both has not much difference , both is treat as source file but in js file some word or syntax has some
//special meaning but in text file ,there is no word with special meaning.
//Every programming language come with their own extension
//every thing is inside the software that we have to take input or print output ,that software is called compiler/interpreter
//for many years js software is hided in browser console
//deno.js and node.js is most popular environment for js file 
//Ryan Dahl is inventor of both node and deno
//Github and git is used for making our portfolio
const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])