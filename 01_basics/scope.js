const a = 300;
if (true) {
  let a = 120;
  const b = 15;
  console.log("Value of a inside if block : " + a); // local scope
  console.log("value of b inside if block: " + b);
}
console.log(a); // global scope
