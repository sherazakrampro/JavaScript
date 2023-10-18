const User = {
  _email: "sheraz@chatgpt.com",
  _password: "abc123456",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const sheraz = Object.create(User);
console.log(sheraz.email);
