class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const teacherOne = new Teacher("sheraz", "sheraz@teacher.com", "123abc");

teacherOne.logMe();

const userOne = new User("SherazAkram");

userOne.logMe();

console.log(teacherOne instanceof User);
