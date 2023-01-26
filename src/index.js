const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decoded = '';
    let currentLetter = '';
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === '1') {
            currentLetter += '-';
        } else if (expr[i] === '0') {
            currentLetter += '.';
        } else {
            currentLetter = '';
        }
        if (currentLetter.length === 10) {
            for (const letter in MORSE_TABLE) {
                if (MORSE_TABLE[letter] === currentLetter) {
                    decoded += letter;
                }
            }
            currentLetter = '';
        }
    }
    return decoded;
}

module.exports = {
    decode
}
