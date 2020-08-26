// array of lowercase letters
var lowercaseL = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// array of upercase letters
var uppercaseL = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// array of numbers
var numerics = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// array of special characters
var specialChar = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // promt user for password criteria
  var pLen = parseInt(
    prompt("Please send valid lenght btween 8 and 128 for your password lenght")
  );
  if (!isNaN(pLen) && pLen >= 8 && pLen <= 128) {
    var lcase = confirm(
      "Do you want your password to include lowercase letters?"
    );
    var ucase = confirm(
      "Do you want your password to include uppercase letters?"
    );
    var numeric = confirm("Do you want your password to include numerics?");
    var specialCharacter = confirm(
      "Do you want your passowrd to include special characters?"
    );
    if (lcase || ucase || numeric || specialCharacter) {
      var password = generatePassword(pLen ,lcase, ucase, numeric, specialCharacter);
      var passwordText = document.querySelector("#password");

      passwordText.value = password;
    } else {
      var passwordText = document.querySelector("#password");
      passwordText.value =
        "Please choose at least one from lowercase, uppercase, numeric or special character for your password type!";
    }
  } else {
    var passwordText = document.querySelector("#password");
    passwordText.value =
      "Please provide a valid number between 8 and 128 for your password length!";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generatePassword function
function generatePassword(plen, lcase, ucase, numeric, specialCharacter) {
  var joinedArray = [];
  if(lcase){
    joinedArray = joinedArray.concat(lowercaseL);
  }
  if(ucase){
    joinedArray = joinedArray.concat(uppercaseL);
  }
  if(numeric){
    joinedArray = joinedArray.concat(numerics);
  }
  if(specialCharacter){
    joinedArray = joinedArray.concat(specialChar);
  } 
  var joinedArrayLen = joinedArray.length; 
var pass = [];
for(i=0; i < plen; i++){
 pass[i] = joinedArray[Math.floor(Math.random()*joinedArrayLen)]; 
}
pass = pass.join('');
return pass;
}
