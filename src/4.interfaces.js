var basic = function (firstName, lastName, ID) {
    console.log("************************");
    console.log(firstName);
    console.log(lastName);
    console.log(ID);
};
basic("Ishara", "madusanka", "1");
//second exmaple
var second = function (firstName, lastName, ID) {
    console.log("************************");
    console.log(firstName);
    console.log(lastName);
    console.log(ID);
};
// second("Ishara","Madusnka","123") type error
second("Ishara", "Madusnka", 12);
//third example
var third = function (user) {
    console.log("************************");
    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.id);
};
third({
    firstName: "Ishara",
    lastName: "Madusanka",
    id: "123",
});
//fourth example
var fourth = function (user) {
    console.log("************************");
    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.id);
};
fourth({
    firstName: "Ishara",
    lastName: "Madusanka",
    id: 1234,
});
var fifth = function (user) {
    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.id);
};
var user1 = {
    firstName: "Ishara",
    lastName: "Madusanka",
    id: 12345,
};
fifth(user1);
