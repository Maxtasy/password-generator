bigLetters = [];
for (let i = 65; i <= 90; i++) {
    bigLetters.push(String.fromCharCode(i));
}

smallLetters = [];
for (let i = 97; i <= 122; i++) {
    smallLetters.push(String.fromCharCode(i));
}

numbers = [];
for (let i = 48; i <= 57; i++) {
    numbers.push(String.fromCharCode(i));
}

special = [];
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

function generatePassword() {
    const passwordOutput = document.querySelector("#passwordOutput");
    const length = document.querySelector("#length").valueAsNumber;
    const useCapital = document.querySelector("#useCapital").checked;
    const useNumbers = document.querySelector("#useNumbers").checked;
    const useSpecial = document.querySelector("#useSpecial").checked;

    let selection = smallLetters.slice();

    if (useCapital) selection = selection.concat(bigLetters);
    if (useNumbers) selection = selection.concat(numbers);
    if (useSpecial) selection = selection.concat(special);

    generatedPassword = "";

    for (let i = 0; i < length; i++) {
        randomNumber = Math.floor((Math.random() * selection.length));
        generatedPassword += selection[randomNumber];
    }

    passwordOutput.textContent = generatedPassword;
}