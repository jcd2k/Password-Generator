// DOM elements

const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const lettersEl = document.getElementById('letters');
const numbersEl = document.getElementById('numbers');
const punctuationEl = document.getElementById('punctuation');
const symbolsEl = document.getElementById('symbols');
const mixedcaseEl = document.getElementById('mixed-case');
const generateEl = document.getElementById('generate-btn');
const clipboardEl = document.getElementById('clipboard');

const randomOp = {
    letters: getRandomLetter,
    number: getRandomNumber,
    punctuation: getRandomPunctuation,
    symbol: getRandomSymbol
};

// Password generation listen

generateEl.addEventListener('click', () function {
    const length = lengthEl.value;
    const hasLetters = lettersEl.checked;
    const hasNumbers = numbersEl.checked;
    const hasPunc = punctuationEl.checked;
    const hasSymbols = symbolsEl.checked;
    const hasMixedCase = mixedcaseEl.checked;

    passwordEl.innerText = generatePassword(
        hasLetters,
        hasNumbers,
        hasPunc,
        hasSymbols, 
        hasMixedCase,
        length
    );
});

// Password generation

function generatePassword(letters, numbers, punctuation, symbols, mixed) {
    let generatedPassword = '';

    const typeCount = letters + numbers + punctuation + symbols + mixed;

    const typeArr = [letters, numbers, punctuation, symbols, mixed];
}


// Password Generator Functions

function getRandomLetter() {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const mixedletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if mixedcaseEl.checked {
        return letters[Math.floor(Math.random() * letters.length)];
    else {
        retrun mixedletters[Math.floor(Math.random() * mixedletters.length)];
    }
    }
}

function getRandomNumber() {
    const numbers = '1234567890'
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomPunctuation() {
    const punctuation = '.!,?'
    return numbers[Math.floor(Math.random() * punctuation.length)];
}

function getRandomSymbol() {
    const symbols = '@#$%&*^_-'
    return numbers[Math.floor(Math.random() * symbols.length)];
}