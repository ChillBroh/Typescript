var function1 = function () {
    console.log("Hello world");
};
function1();
var function2 = function () {
    return 1;
};
console.log(function2());
var function3 = function (number) {
    console.log("Number is ".concat(number));
};
function3(10);
// function3("eh"); this will give a type error cause parameter type is number
//optional parameters
//optional parameters always come after the required parametere
var function4 = function (number, name) {
    name
        ? console.log("Number is ".concat(number, ", name is ").concat(name))
        : console.log("Number is ".concat(number));
};
function4(10);
function4(10, "Ishara");
//default parameters
var function5 = function (num, name) {
    if (name === void 0) { name = "Ishara"; }
    console.log("Number is ".concat(num, ", Name is ").concat(name));
};
function5(15);
function5(15, "madusanka");
