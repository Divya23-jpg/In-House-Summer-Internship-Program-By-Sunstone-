// Company Employee System

// ! Employee (parent class)
class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  work() {
    console.log("Employee:");
  }

  showDetails() {
    console.log(`${this.id}, ${this.name} `);
  }
}

const emp = new Employee(101, "Divya Kumawat");
emp.work();
emp.showDetails();

// ! 2.Developer (Inherits Employee)

class Developer extends Employee {
  constructor(id, name, language) {
    super(id, name);
    this.language = language;
  }

  work() {
    console.log("Developer is working");
  }

  writeCode() {
    console.log(`${this.name} writes code in ${this.language}`);
  }
}

// const dev=new Developer(1,"Divya","JS");
// dev.showDetails();
// dev.writeCode();
// dev.work();

// !3. FrontendDeveloper (inherits Developer) 
class FrontendDeveloper extends Developer {
  constructor(id, name, language, framework) {
    super(id, name, language);
    this.framework = framework;
  }

  buildui() {
    console.log("Frontened Developer is building UI..");
  }

  work() {
    console.log("FrontendDeveloper");
  }

  writeCode() {
    console.log(
      `${this.id} ,${this.name} ,${this.language} , ${this.framework} `,
    );
  }
}

const front = new FrontendDeveloper(101, "Divya", "JS", "React");
front.work();
front.writeCode();
front.buildui();

class Manager extends Employee {
  constructor(id, name, teamsize) {
    super(id, name);
    this.teamsize = teamsize;
  }

  conductMetting() {
    console.log(`${this.id}, ${this.name} ,${this.teamsize}`);
  }
  work() {
    console.log("Manager");
  }
}

const m = new Manager(101, "Rohan", 10);
m.work();
m.conductMetting();
