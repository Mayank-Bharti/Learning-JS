//reduce function
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const arr = [1, 2, 3, 4, 5]
const initial=0;
//0+1+2+3+4+5
const sum = arr.reduce((acc, curr) => acc + curr, initial)
console.log(sum)
const sum1 = arr.reduce((acc, curr) => { 
    console.log(`acc: ${acc}, curr: ${curr}`);
    return acc + curr     
}, initial)
console.log(sum1)

const shoppingcart =[
    {
        itemname: 'apple',
        price: 10
    },
    {
        itemname: 'banana',
        price: 5
    },
    {
        itemname: 'orange',
        price: 8
    }
]
const totalprice=shoppingcart.reduce((acc,item)=>{
     return acc + item.price
}, 0)

console.log(totalprice)