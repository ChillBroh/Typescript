"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Basic data types
//Number
var x = 10;
console.log(x);
console.log(typeof x);
//string
var name = "TypeScript";
//boolean
var value = true;
//undefined
var u = undefined;
var y;
console.log(y);
//null
var n = null;
var r = null;
console.log(r);
//other datatypes
//Arrays
var list1 = [1, 2, 3];
console.log(list1);
var list2 = [1, 2, 3];
console.log(list2);
//tuple
var tuple1; //declare
tuple1 = [10, "ishra"];
//tuple1 = ["chill", 5]; this gives compiler error
console.log(tuple1);
console.log(tuple1[1].substring(1)); //tuple1[0] cannot access substring method. that is accurate intellisense
//enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["yellow"] = 2] = "yellow";
})(Color || (Color = {}));
var c = Color.red;
console.log(c); //can access the position
//can give first index as 1 and others will increament according to that. if not can give different values to position
var Color1;
(function (Color1) {
    Color1[Color1["red"] = 1] = "red";
    Color1[Color1["green"] = 5] = "green";
    Color1[Color1["yellow"] = 6] = "yellow";
})(Color1 || (Color1 = {}));
console.log("Color1", Color1.red);
console.log("Color1", Color1.green);
console.log(typeof Color1);
var colorName = Color1[5];
var colorPosition = Color1.green;
console.log(colorName); //can get value also other than position
console.log(colorPosition);
//unknown
//if the incomming value don't know we can use unknown and it will auto assign type
var notKnow = 4;
var notKnow2 = "hello";
console.log(notKnow);
console.log(typeof notKnow2);
console.log(typeof notKnow);
//force to check types. otherwise cannot access to type properties like below
// notKnow2.toUppercase() if the type of unknown cannot do any operation like this
//any
//just like unknown . but there is no any type safety. must avoid if possible.this will violate the typescript main feature. typechecking
var notKnow3 = "hello";
var upper = notKnow3.toUpperCase();
console.log(typeof notKnow3);
console.log(upper);
//void
var myFunction = function () {
    console.log("hello");
};
var myFunction1 = function () {
    console.log("hello");
};
var myFunction2 = function () {
    return 1;
};
console.log(typeof myFunction);
console.log(typeof myFunction1);
myFunction1();
console.log(myFunction2());
//union type
//can have multiple types for one variable
var man;
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
