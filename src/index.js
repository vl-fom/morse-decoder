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

function fromMorse(str) {
  return (str === ' ') ? ' ': MORSE_TABLE[str];
}

function decode(expr) {
  let str = [];
  for (let i = 0; i < (expr.length / 10); i++) {
    str.push(expr.slice(10 * i, 10 * (i + 1)))
  }
  for (let j = 0; j < str.length; j++) {
    var sStr = '';
    if (str[j] !== '**********') {
      for (let i = 0; i < 10; i += 2) {
        if (str[j].slice(i, i + 2) === '10') {
          sStr += '.';
        } else if (str[j].slice(i, i + 2) === '11') {
          sStr += '-';
        }
      }
      str[j] = sStr;       
    } else {
      str[j] = ' ';
    }
  }
  return str.map(fromMorse).join('')
}

module.exports = {
    decode
}
