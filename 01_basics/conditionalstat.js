const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
let age
readline.question("Enter your age: ", (age) => {
  
    if(age<18){
        console.log("not eligible to Vote");
        
    }
    else{
        console.log("Eligible to Vote");
        
    }
    readline.close();
});




``