function estUneVoyelle(lettre) {
    return "aeiouy".includes(lettre);
}

function compterVoyelles(mot) {
    let compteur = 0;
    for(let i = 0; i < mot.length; i++) {
        if(estUneVoyelle(mot[i]))
            compteur++;
    }
    return compteur;
}

console.log(compterVoyelles("bonjour"));
console.log(compterVoyelles("framboise"));