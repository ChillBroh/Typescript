const basic = (firstName, lastName, ID) => {
  console.log("************************");
  console.log(firstName);
  console.log(lastName);
  console.log(ID);
};

basic("Ishara", "madusanka", "1");

//second exmaple
const second = (firstName: String, lastName: String, ID: number): void => {
  console.log("************************");
  console.log(firstName);
  console.log(lastName);
  console.log(ID);
};

// second("Ishara","Madusnka","123") type error
second("Ishara", "Madusnka", 12);

//third example
const third = (user) => {
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
const fourth = (user: {
  firstName: String;
  lastName: String;
  id: number;
}): void => {
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

//fiftth example with interface
interface User {
  firstName: String;
  lastName: String;
  id: number;
}

const fifth = (user: User): void => {
  console.log(user.firstName);
  console.log(user.lastName);
  console.log(user.id);
};

const user1 = {
  firstName: "Ishara",
  lastName: "Madusanka",
  id: 12345,
};
fifth(user1);
