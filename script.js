var generatePasswordButton = document.getElementById("generate");
var copyToClipBoardButton = document.getElementById("copytoclipboard");

let confirmLower = "abcdefghijklmnopqrstuvwxyz".split();
let confirmUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split();
let confirmSpecial = "!@#$%^&*()<>?+=".split();
let confirmNumbers = "123456789".split();


function generatePassword(){

    userName = parseInt(prompt ("How many characters do you want?"))

    lowerCaseArray = confirm("Will this contain lowercase letters?");
    upperCaseArray = confirm("Will this contain uppercase letters?");
    specialCharArray = confirm("Will this contain special characters?");
    numberArray = confirm("Will this contain numbers?");
    

    if (userName < 6 || userName > 290 || isNaN(userName)) {
        alert ("Please choose betweeen 6 - 290 characters")
    
    } 

}; generatePassword()



function writePassword() {
    
    let passwordPool = [];
    console.log(passwordPool)


if (confirmSpecial && confirmNumbers && confirmLower && confirmUpper) {
    choices = confirmSpecial.concat(confirmNumbers, confirmLower, confirmUpper);
}
// Else if for 3 positive options
else if (confirmSpecial && confirmNumbers && confirmLower) {
    choices = confirmSpecial.concat(confirmNumbers, confirmLower);{
    passwordPool.push(onlyconfirmSpecial[i] + confirmNumber[i] + confirmlower[i])}
}
else if (confirmSpecial && confirmNumbers && confirmUpper) {
    choices = confirmSpecial.concat(confirmNumbers, confirmUpper);
}
else if (confirmSpecial && confirmLower && confirmUpper) {
    choices = confirmSpecial.concat(confirmLower, confirmUpper);
}
else if (confirmNumbers && confirmLower && confirmUpper) {
    choices = confirmNumbers.concat(confirmLower, confirmUpper);
}
// Else if for 2 positive options 
else if (confirmSpecial && confirmNumbers) {
    choices = confirmSpecial.concat(confirmNumbers);
} else if (confirmSpecial && confirmLower) {
    choices = confirmSpecial.concat(confirmLower);
} else if (confirmSpecial && upperCaseArray) {
    choices = confirmSpecial.concat(confirmUpper);
}
else if (confirmNumbers && confirmlower) {
    choices = confirmNumbers.concat(confirmLower);
} else if (confirmNumbers && confirmUpper) {
    choices = confirmNumbers.concat(confirmUpper);
} else if (confirmLower && confirmUpper) {
    choices = confirmLower.concat(confirmUpper);
}
// Else if for 1 positive option
else if (confirmSpecial) {
    choices = confirmSpecial;
}
else if (confirmNumbers) {
    choices = confirmNumber;
}
else if (confirmLower) {
    choices = confirmLower;
}
else if (confirmUpper) {
    choices = confirmUpper;
    
}; console.log(writePassword)
   


    let finalPassword = [];

    for (let i = 0; i < userName; i++) {
        var randomPassword = Math.floor(Math.random(confirmLower[i] + confirmUpper[i] + confirmNumbers[i] + confirmSpecial[i])) + 1;
        finalPassword.join(passwordPool[randomPassword])
        
        
        
        console.log(randomPassword)

        
        
    }
};  writePassword() 
      

function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}