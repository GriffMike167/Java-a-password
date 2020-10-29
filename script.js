

let confirmLower = "abcdefghijklmnopqrstuvwxyz".split();
let confirmUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split();
let confirmSpecial = "!@#$%^&*()<>?+=".split();
let confirmNumbers = "123456789".split();
lowerCaseArray = confirm("Will this contain lowercase letters?");
upperCaseArray = confirm("Will this contain uppercase letters?");
specialCharArray = confirm("Will this contain special characters?");
numberArray = confirm("Will this contain numbers?");
let userName = prompt ("How many characters do you want?")
var number = 120;





function writePassword() {
if (confirmSpecial && confirmNumbers && confirmLower && confirmUpper) {
    choices = confirmSpecial.concat(confirmNumbers, confirmLower, confirmUpper);
}
// Else if for 3 positive options
else if (confirmSpecial && confirmNumbers && confirmLower) {
    choices = confirmSpecial.concat(confirmNumbers, confirmLower);
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
};
    var password = []; 
        // Start random selection variables:
        // Random selection for all variables: 
        for (var i = 0; i < number; i++) {
            var pickChoices = choices[Math.floor(Math.random() * choices.length)];
            password.push(pickChoices);
        } 
        console.log(password)
} writePassword()
      

function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}