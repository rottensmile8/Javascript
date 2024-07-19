const accountId = 9814167965
let accountEmail = "rakesh99@gmail.com"
var accountPassword = "12345"
acoountCity = "Pokhara"
let accountState;

//accountId = 2 {not allowed to change const}


accountEmail = "ab@ds.com"
accountPassword = "54321"
accountCity = "Dharan"

console.log(accountId);

/*
Prefer not to use var 
because of issue in bloack scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])