// Write a program to greet a person based on their gernder (if else)
// let a = "man"
// let b = "women" 
// let c = "women"
// if (c === a) {
//     console.log ("Hlo mr")
// } else if (c===b){
//     console.log("Hlo ms")
// }else{
//     console.log("Hlo")
// }

// function greetPerson(name, gender) {
//     if (gender.toLowerCase() === 'male') {
//         console.log(`Hello Mr. ${name}`);
//     } else if (gender.toLowerCase() === 'female') {
//         console.log(`Hello Ms. ${name}`);
//     } else {
//         console.log(`Hello ${name}`);
//     }
// }
// greetPerson("Sonu","male");
// greetPerson("Gaurav","female");
// greetPerson('abc',"other")



// Write a Program that counts from 1 to 1000 and prints (for loop)
// let answer =0
// for (let i=0; i<=100; i++){
//     answer = answer +i
// }
// console.log(answer)


// Write a program to print all even no in an array

// let myArray = [22,29,46,7,102,4,9,80]
// const evenno = myArray.length
// for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i]%2==0) {
//         console.log(myArray[i])
//     }
    
// }

// Write a program to print biggest no in an array
// const myArray = [22,85,78,888,95,54]
// const biggestno = Math.max(...myArray)
// console.log(biggestno)


// write a program to select 
const users = [{firstname : "Rahul",
    gender : 'Male'
},{
    firstname : 'gaurav',
    gender: 'female'
},
{
    firstname : 'sunita',
    gender : 'female'
}]
for (let i = 0; i < users.length; i++) {
    if (users[i] ["gender"]=="female") {  
        console.log(users[i] ['firstname'])
    }
    
}