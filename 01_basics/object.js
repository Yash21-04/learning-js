// // const Sym = Symbol(123)


// // const Jsuser = {
// //     name : "Yash",
// //     [Sym] : "myvalue1",
// //     email : "Yashshaileshojha9915@gmail.com",
// //     clg : "DSATM",
// //     USN : "1DT23IS189",
// //     Branch : "ISE",
// //     Section : "C",
// //     "Floor" : "3rd"

// // }
// // // console.log(Jsuser);
// // // Jsuser.email ="yash1234@gmail.com"
// // // console.log(Jsuser);
// // // Object.freeze(Jsuser)
// // // Jsuser.email="Yash0987@gmail.com"
// // // console.log(Jsuser);
// // console.log(Jsuser["Floor"]); // This is Important 

// // Jsuser.greeting1 = function(){
// //     console.log("hello js user");
    
// // }
// // Jsuser.greeting2 = function(){
// //     console.log(`Hello js user, ${this.name}`);
    
// // }
// // console.log(Jsuser.greeting1());
// // console.log(Jsuser.greeting2());


// const regularuser =  {}
//     regularuser.name= "Mohan",
//     regularuser.email= "some@microsoft.com",
//     regularuser.number= "12212937490"

// console.log(regularuser);

// const unknown = {
//     fullname:{
//         username:{
//             firstname: "Yash",
//             lastname: "Ojha"
//         }
//     }
// }
// console.log(unknown.fullname.username.lastname);

const obj1 = { 1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}
// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2}
console.log(obj4);
