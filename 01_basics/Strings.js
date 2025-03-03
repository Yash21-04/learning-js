const name = "yash"
const repocount = 16
 //console.log(name + repocount + "value");

 // console.log(`hello my name is ${name} and my repo count is ${repocount}`);
// it is string interpolation

const gameName = new String('Yash')
// console.log(gameName);
// console.log(typeof(gameName));
// console.log(gameName[3]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));
const newString = gameName.substring(0,3)
const anotherString = gameName.slice(-3,3)
console.log(newString);
console.log(anotherString);
const newString1 = "     yash     "
console.log(newString1);
console.log(newString1.trim());


const url = "https://yash.com/yash%21Ojha"
console.log(url.replace('%21' ,' '));

    




