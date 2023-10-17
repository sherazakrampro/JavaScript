// ES6
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const user = new User("sheraz", "sheraz@gmail.com", "123");

console.log(user.encryptPassword());
console.log(user.changeUsername());

// behind the scene
function newUser(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

newUser.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
newUser.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const user1 = new newUser("ahmad", "ahmad@gmail.com", "123");

console.log(user1.encryptPassword());
console.log(user1.changeUsername());
