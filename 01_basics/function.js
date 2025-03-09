// function myname(){
//     console.log("yash");
    
// }

// myname()

// function multiplyTwonumber(number1,number2){
//     // let result = number1*number2;
//     return number1*number2;
    
// }

// const Result = multiplyTwonumber(12,4)
// console.log("Result : ",Result);

// function logoutUserMessage(username){
//     if(username ==undefined){
//         console.log("Please enter Username");
//         return
//     }
//     return `${username} just logged out.`
// }

// console.log(logoutUserMessage());
// function number(...num1){
//     return num1
// }

// console.log(number(220,300,1089));

const student = {
    Name : "Yash",
    USN : "1DT23IS189",
    Branch: "Ise"
}

function StudentDetails(anyObject){
    console.log(`Student name is ${anyObject.Name} , Usn is ${anyObject.USN}, and Branch is ${anyObject.Branch}`);
    
}
StudentDetails(student)