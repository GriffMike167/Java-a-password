// worked with tutor on redoing the assignemt based of notes taken throughout the week
// made changes to clean up and simplify for loops 
// made changes to copy to clipboard function to disply inside generator 
// made changes to arrary to simplify how it looks to read easier
// renamed variables to beable to follow if/else and functions easier
// tutor suggested doing it exactly how was shown as simply as possible instead 
// of trying to do too much 






let generatePasswordButton = document.getElementById("generate");


let pickLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
let pickUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
let pickSpecial = ['!','@','#','$','%','^','&','*','<','>','?','+',];
let pickNumbers = ["1","2","3","4","5","6","7","8","9",]


function generatePassword(){

    userPassword = parseInt(prompt ("How many characters do you want?"))

    
    if (userPassword < 6) {
        alert ("Please choose at least 6!"); return;
    
    } 
    if (userPassword > 240) {
        alert ("Please choose less that 240!"); return;
    }

    let lowerCaseQuestion = confirm("Will this contain lowercase letters?");
    let upperCaseQuestion = confirm("Will this contain uppercase letters?");
    let specialCharQuestion = confirm("Will this contain special characters?");
    let numberQuestion = confirm("Will this contain numbers?");

    if (specialCharQuestion && numberQuestion && lowerCaseQuestion && upperCaseQuestion === false) {
        alert("You must choose at least one character choice!"); return;
    }

    let questionOptions = {
        length: userPassword,
        specialCharactrers: specialCharQuestion,
        numeric: numberQuestion,
        lowerCase: lowerCaseQuestion,
        upperCase: upperCaseQuestion
    }

    return questionOptions;
}



function writePassword() {
    
    let options = generatePassword();
    console.log(options)
    
    let passwordPool = [];
    console.log(passwordPool)


    if (options.specialCharactrers) {
        for (let i = 0; i < pickSpecial.length; ++i) {
            passwordPool.push(pickSpecial[i]);
            
        }
    }

    if (options.numeric) {
        for (let i = 0; i < pickNumbers.length; ++i) {
            passwordPool.push(pickNumbers[i]);
            
        }
    }

    if (options.lowerCase) {
        for (let i = 0; i < pickLower.length; ++i) {
            passwordPool.push(pickLower[i]);
            
        }
    }

    if (options.upperCase) {
        for (let i = 0; i < pickUpper.length; ++i) {
            passwordPool.push(pickUpper[i]);
            
        }
    }

    let finalPassword = [];

    for (let i = 0; i < userPassword; ++i) {
        let randomPassword = Math.floor(Math.random() * Math.floor(passwordPool.length))
        finalPassword.push(passwordPool[randomPassword])
    }
        
        
    console.log(finalPassword)

    let lastFinal = finalPassword.join('');
    console.log(lastFinal)

    document.getElementById("display").textContent = lastFinal;

        
        
} 
    let password = "";

function copytoClipboard() {
    
    let passwordText = document.getElementById("display");
    
    password = writePassword();

    passwordText.value = password;


    
}

 generatePasswordButton = document.addEventListener("click", writePassword);
 


      

