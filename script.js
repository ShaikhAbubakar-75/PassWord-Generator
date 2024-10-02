const length = document.querySelector('#length-input')
const upper = document.querySelector('#uppercase')
const lower = document.querySelector('#lowercase')
const number = document.querySelector('#number')
const symbol = document.querySelector('#symbol')

const generateBtn = document.querySelector('#gn-btn')
const copyBtn = document.querySelector('#copy-btn')
const textField = document.querySelector('#text-field')

const copyText = document.querySelector('.copy-text')

upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
lowerCase = 'abcdefghijklmnopqrstuvwxyz';
numberChar = '0123456789';
symbolChar = '!@#$%^&*()_+[]{}|;:,.<>?';

generateBtn.addEventListener('click', () => {

    let allChars = '';
    if (upper.checked) allChars += upperCase;
    if (lower.checked) allChars += lowerCase;
    if (number.checked) allChars += numberChar;
    if (symbol.checked) allChars += symbolChar;

    let password = '';
    if (allChars.length > 0) {
        for (let i = 0; i < length.value; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars[randomIndex];
        }
    } else {
        password = 'Select at least one option!';
    }
    console.log(password)
    textField.value = password
    copyText.value = ''
    
    copyBtn.addEventListener('click', () => {
        

        navigator.clipboard.writeText(textField.value)
            .then(() => copyText.textContent = "Password copied to clipboard!")
            .catch(() => alert("Failed to copy password!"));
    })
})

