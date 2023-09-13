class Employee {
  private empName: String;

  constructor(name) {
    this.empName = name;
  }

  public hello() {
    console.log(`Hello ${this.empName}`);
  }

  public job(jobname: String) {
    console.log(`Your job is ${jobname}`);
  }
  public mySchool() {
    console.log("School from parent");
  }
}

let emp1 = new Employee("Ishara");
emp1.hello();
emp1.mySchool();

//inheritance
class Manager extends Employee {
  private schoolName: string;
  constructor(name, school) {
    super(name);
    this.schoolName = school;
  }

  public mySchool() {
    console.log("School from child");
  }
}

let emp2 = new Manager("Madusanka", "Richmond");
emp2.hello();
emp2.job("Manager");
emp2.mySchool();
