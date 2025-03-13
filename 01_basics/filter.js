const arr = [1,2,3,4,5,6,7,8,9,10]

// const newarr = arr.filter( (num)=>(num<6 && num>2) )
// console.log(newarr);
// const newarrr = arr.filter( (num)=> {
//     return num>5
// } )
// console.log(newarrr);

// Map

const mynum = [1,2,3,4,5,6,7,8,9,10]

// const new_arr = mynum.map( (num)=> num +10)
// console.log(new_arr);

const new_arr1 = mynum.
                map( (num)=> num*5).
                map( (num)=> num +1)
// console.log(new_arr1);


// reduce

const arr2 = [1,2,3,4,5,6,7,8,9]
// const totalsum = arr2.reduce(function(acc,curval){
//     console.log(`acc is ${acc} and curval is ${curval}`);
    
//     return acc +curval;
// },0)
const totalsum = arr2.reduce( (acc,curval)=> acc + curval ,0)
console.log(totalsum);
