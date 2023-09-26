const accountId = 12345
let accountEmail = "subhadipdas@google.com"
var accountPass = "1234"
accountCity = "Bangalore"
let accountState

// accountId = 23  ---- not allowed

accountEmail = "subhadip@apple.com"
accountPass = "1456"
accountCity = "Bengaluru"

console.log(accountId);

/* Never use var as it had problem with scope
Nowaday we generally use let and const only 

prefer not to use var
coz it has issue in block scope and fuctional scope*/

console.table([accountId, accountEmail, accountPass, accountCity, accountState])