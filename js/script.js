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
  // Checks the user input is a valid password lenght or not
  if (!isNaN(pLen) && pLen >= 8 && pLen <= 128) {
    // Series of confirm function which gives the user to decide which password character types to include.
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
    /* Checks the response of the user for password character types. 
    The user should at least choose one. If the user at leaset choose one then the 
    generatepassowrd function is called to generate the password. */
    if (lcase || ucase || numeric || specialCharacter) {
      var password = generatePassword(
        pLen,
        lcase,
        ucase,
        numeric,
        specialCharacter
      );
      var passwordText = document.querySelector("#password");

      passwordText.value = password;
    } else {
      /* If the user doesn't choose one of lowercase letters, uppercase letters, 
      numerics and/or special characters for his/her password type an alert will tell that an error has occured */
      var passwordText = document.querySelector("#password");
      passwordText.value = "";
      alert(
        "Error:Please choose at least one of the following as your passowrd types - lowercase characters, uppercase characters, numerics, and/or special characters"
      );
    }
  } else {
    /* If the user doesn't choose a valid number between 8 and 128 as his/her passowrd length
       an alert will tell that the lenght chosen for the password length is invalid */
    var passwordText = document.querySelector("#password");
    passwordText.value = "";
    alert(
      "Error: Please provide a valid number between 8 and 128 for your password length!"
    );
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generatePassword function
function generatePassword(plen, lcase, ucase, numeric, specialCharacter) {
  /* joinedArray array will contain the array of elements from which we can choose as password character. 
 The series of if statements are used to generate this array based on users choice for the type of characters the password contains. */
  var joinedArray = [];
  if (lcase) {
    joinedArray = joinedArray.concat(lowercaseL);
  }
  if (ucase) {
    joinedArray = joinedArray.concat(uppercaseL);
  }
  if (numeric) {
    joinedArray = joinedArray.concat(numerics);
  }
  if (specialCharacter) {
    joinedArray = joinedArray.concat(specialChar);
  }
  var joinedArrayLen = joinedArray.length;
  // pass is an array that contains the actual password characters.
  var pass = [];
  actualPasswordgenerator();
  // The for loop that generates the password characters and populate to pass array
  function actualPasswordgenerator(){
  for (i = 0; i < plen; i++) {
    pass[i] = joinedArray[Math.floor(Math.random() * joinedArrayLen)];
  }
  // Check if password criteria is met or not
  if(lcase){
    if(!(pass.some(e => lowercaseL.indexOf(e) >= 0))){
      actualPasswordgenerator();
    }
  }
  if(ucase){
    if(!(pass.some(e => uppercaseL.indexOf(e) >= 0))){
      actualPasswordgenerator();
    }
  }
  if(numeric){
    if(!(pass.some(e => numerics.indexOf(e) >= 0))){
      actualPasswordgenerator();
    }
  }
  if(specialCharacter){
    if(!(pass.some(e => specialChar.indexOf(e) >= 0))){
      actualPasswordgenerator();
    }
  }
}
  
  // Joins the password characters as a string and return to the caller.
  pass = pass.join("");
  return pass;
}
