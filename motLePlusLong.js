function longueurDuMot(mot) {
    return mot.length;
}

function obtenirMotLePlusLong(motA, motB) {
    if(longueurDuMot(motA) > longueurDuMot(motB)) {
        return motA;
    }
    else
        return motB;
}

function main(phrase)
{
    let mots = phrase.split(" ");
    let motLePlusLong = "";
    
    for (let i = 0; i < mots.length; i++) {
        motLePlusLong = obtenirMotLePlusLong(motLePlusLong, mots[i]);
    }
    
    return motLePlusLong;
}

console.log(main("Bonjour, nous cherchons le mot le plus long de cette phrase à rallonge"));
console.log(main("Quel sera le mot le plus long de cette phrase"));