const allCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const onlyAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const alphaNumeric = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const alphaSymbol = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
const btn = document.getElementById("generateBtn");
const passwordField1 = document.getElementById("password_1");
const passwordField2 = document.getElementById("password_2");
const checkBoxNumber = document.getElementById("numberTgl");
const checkBoxSymbol = document.getElementById("symbolTgl");
let password1 = "";
let password2 = "";
let length;



btn.addEventListener("click", passwordGenerator);

function passwordGenerator() {
    
    let visibleBtn = document.querySelectorAll(".psw");
    visibleBtn.forEach(field => field.style.visibility = "visible");
    password1 = password();
    passwordField1.textContent = password1;
    addCopyBtn(passwordField1)

    password2 = password();
    passwordField2.textContent = password2;
    addCopyBtn(passwordField2)
}

function password() {
    let randomPassword = "";
    length = document.getElementById("pswLength").value;
    for (let i = 1; i <= parseInt(length); i++) {
        randomPassword += randomChar();
    }
    return randomPassword;
}

function randomChar() {
    let randomCharIndex;
    if (checkBoxNumber.checked && checkBoxSymbol.checked) {
        randomCharIndex = Math.floor(Math.random() * allCharacters.length);
        return allCharacters[randomCharIndex];
    }
    else if (checkBoxSymbol.checked) {
        randomCharIndex = Math.floor(Math.random() * alphaSymbol.length);
        return alphaSymbol[randomCharIndex];
    }
    else if (checkBoxNumber.checked) {
        randomCharIndex = Math.floor(Math.random() * alphaNumeric.length);
        return alphaNumeric[randomCharIndex];
    }
    else {
        randomCharIndex = Math.floor(Math.random() * onlyAlpha.length);
        return onlyAlpha[randomCharIndex];
    }
}

function addCopyBtn(pswField) {
    let newCopyBtn = document.createElement("button");
    newCopyBtn.className = "copyBtn";
    newCopyBtn.innerHTML = '<img src="/copy.png" alt="copy" width="16px"></img>';
    pswField.appendChild(newCopyBtn);
    newCopyBtn.addEventListener("click", () => {
        let copiedText = pswField.textContent;
        navigator.clipboard.writeText(copiedText).then(() => {
            newCopyBtn.style.width = "40px"
            newCopyBtn.style.left = "87%"
            newCopyBtn.textContent = "copied!"
        })
    })
}