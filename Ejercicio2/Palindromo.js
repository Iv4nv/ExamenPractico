function palindromo(word) {

    let invert = word
        .split('')
        .reverse()
        .join('');

    console.log(word);
    console.log(invert);

    return invert === word;

}

console.log("Es un palindormo? " + palindromo("RECONOCER"));