const myNum = [1,2,3]
// const total = myNum.reduce(function(acc, curval){
//     console.log(`acc ${acc} curval ${curval}`)
//     return acc+curval
// },0)

const total = myNum.reduce((acc, curval)=>acc+curval,0)
console.log(total)


const soppingCart= [
    {itemname:'web',
        price:999
    },
    {itemname:'App',
        price:500
    },
    {itemname:'Data',
        price:1000
    },
    {itemname:'py',
        price:599
    },
]

const Total = soppingCart.reduce((acc, item)=>acc+item.price,0)
console.log(Total)



const myarry = [2,4,5]
const sum = myarry.reduce((acc, item)=>acc+item, 0)
console.log(sum)