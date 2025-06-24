const accountId = 1232132
let accountEmail = "priyanshu@gmai.com"
var accountPassword = "1234abcd"
accountCity = "Delhi"

let accountState ;
// accountId = "1232132abcd"; // Reassigning a new value to accountId
accountEmail = "sneha@gmail.com"
accountPassword = "1234xyz"
accountCity = "Mumbai"


console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

/*
Prefer not to use var, use let or const instead
Use const for variables that should not be reassigned
*/


console.table({ accountId, accountEmail, accountPassword, accountCity });
console.log(accountState);
