//for iterate object

// for in ==> loop is used for object

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
//

for (const key in myObject) {
    console.log(key);
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

//for in ==> used in array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);
}

for (const key in programming) {
    console.log(programming[key]);
}

//for in ==> used in map... it is not iterable

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
