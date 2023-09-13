export {};

//Basic data types
//Number
let x: number = 10;
console.log(x);
console.log(typeof x);

//string
let name: string = "TypeScript";

//boolean
let value: boolean = true;

//undefined
let u: undefined = undefined;
let y;
console.log(y);

//null
let n: null = null;
let r = null;
console.log(r);

//other datatypes
//Arrays
let list1: number[] = [1, 2, 3];
console.log(list1);
let list2: Array<number> = [1, 2, 3];
console.log(list2);

//tuple
let tuple1: [number, String]; //declare
tuple1 = [10, "ishra"];
//tuple1 = ["chill", 5]; this gives compiler error
console.log(tuple1);
console.log(tuple1[1].substring(1)); //tuple1[0] cannot access substring method. that is accurate intellisense

//enum
enum Color {
  red,
  green,
  yellow,
}
let c: Color = Color.red;
console.log(c); //can access the position

//can give first index as 1 and others will increament according to that. if not can give different values to position
enum Color1 {
  red = 1,
  green = 5,
  yellow = 6,
}
console.log("Color1", Color1.red);
console.log("Color1", Color1.green);
console.log(typeof Color1);

const colorName: String = Color1[5];
const colorPosition: number = Color1.green;
console.log(colorName); //can get value also other than position
console.log(colorPosition);

//unknown
//if the incomming value don't know we can use unknown and it will auto assign type

const notKnow: unknown = 4;
const notKnow2: unknown = "hello";
console.log(notKnow);
console.log(typeof notKnow2);
console.log(typeof notKnow);

//force to check types. otherwise cannot access to type properties like below
// notKnow2.toUppercase() if the type of unknown cannot do any operation like this

//any
//just like unknown . but there is no any type safety. must avoid if possible.this will violate the typescript main feature. typechecking
const notKnow3: any = "hello";
const upper: String = notKnow3.toUpperCase();
console.log(typeof notKnow3);
console.log(upper);

//void

const myFunction = () => {
  console.log("hello");
};

const myFunction1 = (): void => {
  console.log("hello");
};

const myFunction2 = (): number => {
  return 1;
};

console.log(typeof myFunction);
console.log(typeof myFunction1);
myFunction1();
console.log(myFunction2());

//union type
//can have multiple types for one variable

let man: number | boolean | string | Array<number>;
man = 1;
console.log(typeof man, man);
man = true;
console.log(typeof man, man);
man = "Ishara";
console.log(typeof man, man);
man = [1, 2, 3];
console.log(man);

//if try intellisense only show last assigned type options
man.push(4);
console.log(man);
