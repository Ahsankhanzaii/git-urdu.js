const accountId = 14356
let  accountgmail = "ahsan@google.com"
var accountpassword = "676767"
accountcity = "tandoadam"
let accountprovince = "sindh"

//accountId="2"// not allowed

  accountgmail = "ah@google.com"
 accountpassword = "686868"
accountcity = "hyderabad"

console.table([accountId,accountgmail,accountpassword,accountcity,accountprovince])
/*prefer not to use var cause of issue in block scope & functional scope*/
console.log(accountId);