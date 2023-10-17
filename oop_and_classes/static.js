class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    // createId() is not accessible to other inherited classes because it's a static method
    return `123`;
  }
}

const sheraz = new User("sheraz");
// console.log(sheraz.createId())

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const ahmad = new Teacher("ahmad", "ahmad@example.com");
console.log(ahmad.createId());
