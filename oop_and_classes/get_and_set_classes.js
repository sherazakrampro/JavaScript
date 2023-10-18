class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}sheraz`;
  }

  set password(value) {
    this._password = value;
  }
}

const sheraz = new User("sheraz@chatgpt.ai", "abc");
console.log(sheraz.email);
