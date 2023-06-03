const range = document.getElementById("length-range");
const valueNumber = document.getElementById("number");
const PasswordInput = document.getElementById("Password-input");
const lowerCaseBtn = document.getElementById("lowercase");
const upperCaseBtn = document.getElementById("uppercase");
const numberBtn = document.getElementById("numbers");
const symbolBtn = document.getElementById("symbols");
const checkLogo1 = document.getElementById("check1");
const checkLogo2 = document.getElementById("check2");
const checkLogo3 = document.getElementById("check3");
const checkLogo4 = document.getElementById("check4");
const strengthtext = document.querySelector(".strength");
const strengthbox1 = document.getElementById("box1");
const strengthbox2 = document.getElementById("box2");
const strengthbox3 = document.getElementById("box3");
const strengthbox4 = document.getElementById("box4");
const copy = document.querySelector(".copy-div");
const copied = document.querySelector(".copied");
var passwordField = document.getElementById("Password-input");
let lowerActive = 0;
let upperActive = 0;
let symbolActive = 0;
let numberActive = 0;
let strength = 0;

upperCaseBtn.addEventListener("click", function () {
  if (upperActive == 0) {
    upperActive++;
    strength++;
    upperCaseBtn.style.backgroundColor = "#A4FFAF";
    upperCaseBtn.style.border = "none";
    checkLogo1.style.display = "inline";
  } else {
    upperActive--;
    strength--;
    upperCaseBtn.style.backgroundColor = "";
    upperCaseBtn.style.border = "";
    checkLogo1.style.display = "";
  }
});
lowerCaseBtn.addEventListener("click", function () {
  if (lowerActive == 0) {
    lowerActive++;
    strength++;
    lowerCaseBtn.style.backgroundColor = "#A4FFAF";
    lowerCaseBtn.style.border = "none";
    checkLogo2.style.display = "inline";
  } else {
    lowerActive--;
    strength--;
    lowerCaseBtn.style.backgroundColor = "";
    lowerCaseBtn.style.border = "";
    checkLogo2.style.display = "inline";
  }
});

numberBtn.addEventListener("click", function () {
  if (numberActive == 0) {
    numberActive++;
    strength++;
    numberBtn.style.backgroundColor = "#A4FFAF";
    numberBtn.style.border = "none";
    checkLogo3.style.display = "inline";
  } else {
    numberActive--;
    strength--;
    numberBtn.style.backgroundColor = "";
    numberBtn.style.border = "";
    checkLogo3.style.display = "";
  }
});

symbolBtn.addEventListener("click", function () {
  if (symbolActive == 0) {
    symbolActive++;
    strength++;
    symbolBtn.style.backgroundColor = "#A4FFAF";
    symbolBtn.style.border = "none";
    checkLogo4.style.display = "inline";
    console.log(strength);
  } else {
    symbolActive--;
    strength--;
    symbolBtn.style.backgroundColor = "";
    symbolBtn.style.border = "";
    checkLogo4.style.display = "none";
  }
});

function strengthsize(strengthsize) {
  if (strengthsize == 1) {
    strengthtext.innerHTML = "TOO WEAK!";
    strengthbox1.style.backgroundColor = "#F64A4A";
    strengthbox1.style.border = "none";
    strengthbox2.style.backgroundColor = "";
    strengthbox2.style.border = "";
    strengthbox3.style.backgroundColor = "";
    strengthbox3.style.border = "";
    strengthbox4.style.backgroundColor = "";
    strengthbox4.style.border = "";
  } else if (strengthsize == 2) {
    strengthtext.innerHTML = "WEAK";
    strengthbox1.style.backgroundColor = "#FB7C58";
    strengthbox1.style.border = "none";
    strengthbox2.style.backgroundColor = "#FB7C58";
    strengthbox2.style.border = "none";
    strengthbox3.style.backgroundColor = "";
    strengthbox3.style.border = "";
    strengthbox4.style.backgroundColor = "";
    strengthbox4.style.border = "";
  } else if (strengthsize == 3) {
    strengthtext.innerHTML = "MEDIUM";
    strengthbox1.style.backgroundColor = "#F8CD65";
    strengthbox1.style.border = "none";
    strengthbox2.style.backgroundColor = "#F8CD65";
    strengthbox2.style.border = "none";
    strengthbox3.style.backgroundColor = "#F8CD65";
    strengthbox3.style.border = "none";
    strengthbox4.style.backgroundColor = "";
    strengthbox4.style.border = "";
  } else if (strengthsize == 4) {
    strengthtext.innerHTML = "STRONG";
    strengthbox1.style.backgroundColor = "#A4FFAF";
    strengthbox1.style.border = "none";
    strengthbox2.style.backgroundColor = "#A4FFAF";
    strengthbox2.style.border = "none";
    strengthbox3.style.backgroundColor = "#A4FFAF";
    strengthbox3.style.border = "none";
    strengthbox4.style.backgroundColor = "#A4FFAF";
    strengthbox4.style.border = "none";
  } else {
    strengthtext.innerHTML = "";
    strengthbox1.style.backgroundColor = "";
    strengthbox1.style.border = "";
    strengthbox2.style.backgroundColor = "";
    strengthbox2.style.border = "";
    strengthbox3.style.backgroundColor = "";
    strengthbox3.style.border = "";
    strengthbox4.style.backgroundColor = "";
    strengthbox4.style.border = "";
  }
}
function generatePassword(length) {
  let characters = "";
  let password = "";

  if (lowerActive == 1) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (upperActive == 1) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (symbolActive == 1) {
    characters += '!@#$%^""&*()';
  }
  if (numberActive == 1) {
    characters += "0123456789";
  }
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}
function handleButtonClick() {
  var passwordLength = range.value;
  var generatedPassword = generatePassword(passwordLength);
  strengthsize(strength);
  passwordField.value = generatedPassword;
  copied.innerHTML = ""
}

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordField.value);
  copied.innerHTML = "COPIED"
});

var generateButton = document.getElementById("btn");
generateButton.addEventListener("click", handleButtonClick);

range.addEventListener("input", () => {
  valueNumber.textContent = range.value;
});

range.oninput = function () {
  const valueSlider = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #A4FFAF 0%, #A4FFAF " +
    valueSlider +
    "%, #18171F " +
    valueSlider +
    "%, #18171F 100%)";
};
