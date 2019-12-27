const characterAmountRange = document.querySelector("#characterAmountRange");
const characterAmountNumber = document.querySelector("#characterAmountNumber");

const passwordGeneratorForm = document.querySelector("#password-generator-form");

characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);

passwordGeneratorForm.addEventListener("submit", e => {
    e.preventDefault();
    const passwordDisplay = document.querySelector(".passwordDisplay");
    const passwordCharacterAmount = document.querySelector("#characterAmountNumber").valueAsNumber;
    const includeUppercase = document.querySelector("#includeUppercase").checked;
    const includeNumbers = document.querySelector("#includeNumbers").checked;
    const includeSymbols = document.querySelector("#includeSymbols").checked;

    const password = generatePassword(passwordCharacterAmount, includeUppercase, includeNumbers, includeSymbols);

    passwordDisplay.textContent = password;
});

function syncCharacterAmount(e) {
    const value = e.target.value;
    characterAmountRange.value = value;
    characterAmountNumber.value = value;
}

const bigLetters = [];
for (let i = 65; i <= 90; i++) {
    bigLetters.push(String.fromCharCode(i));
}

const smallLetters = [];
for (let i = 97; i <= 122; i++) {
    smallLetters.push(String.fromCharCode(i));
}

const numbers = [];
for (let i = 48; i <= 57; i++) {
    numbers.push(String.fromCharCode(i));
}

const special = [];
for (let i = 33; i <= 47; i++) {
    special.push(String.fromCharCode(i));
}
for (let i = 58; i <= 64; i++) {
    special.push(String.fromCharCode(i));
}
for (let i = 91; i <= 96; i++) {
    special.push(String.fromCharCode(i));
}
for (let i = 123; i <= 126; i++) {
    special.push(String.fromCharCode(i));
}

function generatePassword(passwordCharacterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let selection = smallLetters.slice();

    if (includeUppercase) selection = selection.concat(bigLetters);
    if (includeNumbers) selection = selection.concat(numbers);
    if (includeSymbols) selection = selection.concat(special);

    let generatedPassword = "";

    for (let i = 0; i < passwordCharacterAmount; i++) {
        randomNumber = Math.floor((Math.random() * selection.length));
        generatedPassword += selection[randomNumber];
    }

    return generatedPassword;
}