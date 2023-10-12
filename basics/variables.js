const accountId = 6824102
let accountEmail = "sherazakram.pro@gmail.com"
var accountPassword = "8543210"
accountCity = "Gujrat"
let accountState;

// accountId = 2 // not allowed


accountEmail = "abc@gmail.com"
accountPassword = "68246973"
accountCity = "Islamabad"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) 