// Immediately Invoked Function Expressions (IIFE)=>jo function immediately execute ho jaye or real reason==> global scope ke pollution se problem hoti h kayi bar
// to us global scope ke variable ko hatane ke liye hamlog iife ka use kiya 


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //first parenthesis definition and second parenthesis execution call

( (name) => {
    //un named iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

//2 iife likhne ke liye semicolon lagate hai first iife ke second parenthesis ke baad 