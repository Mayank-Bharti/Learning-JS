const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

 marvel_heros.push(dc_heros)

 console.log(marvel_heros);//it takes whole array of dc_heros as an elements ["thor","Ironman","spiderman",["superman", "flash", "batman"]]
 console.log(marvel_heros[3][1]);//this is not a good syntax//flash

 const allHeros = marvel_heros.concat(dc_heros) 
  console.log(allHeros);//['thor','Ironman','spiderman',  [ 'superman', 'flash', 'batman' ], 'superman','flash','batman']

const all_new_heros = [...marvel_heros, ...dc_heros] //spread operator=> ...=>kanch ka glass lo aur drop kar do to wo spread ho gya

 console.log(all_new_heros);//['thor','Ironman','spiderman',  [ 'superman', 'flash', 'batman' ], 'superman','flash','batman']
const a=all_new_heros.flat(Infinity)
 console.log(a); //[
//   'thor',      'Ironman',
//   'spiderman', 'superman',
//   'flash',     'batman',
//   'superman',  'flash',
//   'batman'
// ]
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //infinity is depth means they can see how many array
                                                       //is inside one array and convert to single array , we can also give count of depth in place of infinity
console.log(real_another_array);//[1,2,3,4,5,6,7,6,7,4,5]



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting //[] //key value se array banao

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//[100,200,300]

//read more about isArray,fromArray and ofArray