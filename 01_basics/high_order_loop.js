// const arr = [1,2,3,4,5,6]
// for (const num of arr) {
//     console.log(num);
    
// }
const greeting = "hello World"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
    
}

//Maps
const map = new Map()
map.set('IN', "india")
map.set('US',"USA")
map.set('UK',"UNITED KINGDOM")

// console.log(map);
for (const [key,Value] of map) {
    // console.log(key,':-',Value);
    
}
const myobject = {
    cpp : 'c++',
    js: 'javascript',
    py: 'python',
    swift: 'swift by apple'

}

for (const key in myobject) {
   console.log(`${key} is shortcut for ${myobject[key]}`);
//    
}

const myarr = ["js","ruby","python","cpp","C"]

for (const key in myarr) {
//    console.log(myarr[key]);
   
}

//for each loop
const coding = ["js","java","cpp","python","ruby"]
// coding.forEach(function(val){
//     console.log(val);
    
// })
// coding.forEach((item) => {
//     console.log(item);
    
// })
// function printarray(item) {
//     console.log(item);
    
// }

// coding.forEach(printarray)
coding.forEach((item , index,arr) =>{
    console.log(item,index,arr);
    
})