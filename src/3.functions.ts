const function1 = (): void => {
  console.log("Hello world");
};
function1();

const function2 = (): number => {
  return 1;
};
console.log(function2());

const function3 = (number: number): void => {
  console.log(`Number is ${number}`);
};

function3(10);
// function3("eh"); this will give a type error cause parameter type is number

//optional parameters
//optional parameters always come after the required parametere
const function4 = (number: number, name?: String): void => {
  name
    ? console.log(`Number is ${number}, name is ${name}`)
    : console.log(`Number is ${number}`);
};

function4(10);
function4(10, "Ishara");

//default parameters
const function5 = (num: number, name: String = "Ishara") => {
  console.log(`Number is ${num}, Name is ${name}`);
};
function5(15);
function5(15, "madusanka");
