export {};

let num = 10;
// num = true cannot assign like this.cause num is number type
num = 15;
console.log(num);

//can declare variables without assigning values
let x;
x = 15;
console.log(x);

// let y: String = "Ishara";
// y = 10;
// console.log(y);
//above will print as js. but gives compiler error in watch
/*reason : TypeScript helps catch 
type errors during development, but once your code is transpiled to JavaScript and executed, 
JavaScript's dynamic typing rules apply, and you won't receive runtime type errors for s
uch assignments.*/

let y: String = "Ishara";
y = "chill";
console.log(y);
