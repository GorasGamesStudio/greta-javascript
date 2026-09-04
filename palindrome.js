function estMemeLettre(lettreA, lettreB) {
    return lettreA === lettreB;
}

function estPalindrome(mot) {
    let valid = true;
    // Compare every letter until end of word or invalid
    for (let i = 0; i < mot.length && valid; i++) {
        console.log("Compare " + mot[i] + " & " +mot[mot.length - 1 - i]);
        if (estMemeLettre(mot[i], mot[mot.length - 1 - i]))
            valid = true;
        else
            valid = false;
    }
    
    return valid;
}

console.log(estPalindrome("kayak"));
console.log(estPalindrome("bonjour"));
console.log(estPalindrome("radar"));
console.log(estPalindrome("ressasser"));
console.log(estPalindrome("exceptionnel"));