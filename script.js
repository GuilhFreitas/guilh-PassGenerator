// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let passLength = "";
let lowerAllow = true;
let upperAllow = true;
let numAllow = true;
let speAllow = true;

// Function to prompt user for password options
function getPasswordOptions() {
  passLength = prompt("Please enter the length of your password from 10 to 64 characters:");
  while (passLength < 10 || passLength > 64 || isNaN(passLength)){
    passLength = prompt("Your password cannot be that length. Please enter the length of your password from 10 to 64 characters:");
  }
  lowerAllow = confirm("Would you like your password to contain lowercase characters?");
  upperAllow = confirm("Would you like your password to contain uppercase characters?");
  numAllow = confirm("Would you like your password to contain numbers?");
  speAllow = confirm("Would you like your password to contain special characters?");
  // console.log(`passLength: ${passLength}
  // lowerAllow: ${lowerAllow}
  // upperAllow: ${upperAllow}
  // numAllow: ${numAllow}
  // speAllow: ${speAllow}`);
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);