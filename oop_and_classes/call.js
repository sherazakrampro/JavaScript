function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username); // The call() method of Function instances calls this function with a given this value and arguments provided individually.

  this.email = email;
  this.password = password;
}

const user = new createUser("sheraz", "sheraz@example.com", "12345");
console.log(user);
