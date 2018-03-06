// -voyelles & consonnes- //

function nbVoyelles(mot) {

    var voyelles = 0;

    for (var i = 0; i < mot.length; i++) {
        if (mot[i] === "a" || mot[i] === "e" || mot[i] === "i" || mot[i] === "o" || mot[i] === "u" || mot[i] === "y") {
            voyelles++;
        }
    }

    return voyelles;
}

function nbConsonnes(mot) {

    var consonnes = mot.length - nbVoyelles(mot);

    return consonnes;
}


// -inverser- //

function inverser(mot) {

    var motInverse = "",
        i = mot.length - 1;

    for (i; i >= 0; i--) {
        motInverse += mot[i];
    }

    return motInverse;
}


// -palindrome- //

function palindrome(mot) {

    var motPalindrome = "",
        inversion = inverser(mot);

    if (inversion.toLowerCase() === motSaisi.toLowerCase()) {
        motPalindrome = (mot + " est un palindrome.");
    } else {
        motPalindrome = (mot + " n'est pas un palindrome.");
    }

    return motPalindrome;
}


// -leet speak- //

function leeterMot(mot) {

    var motLeeted = "";

    for (i = 0; i <= mot.length - 1; i++) {
        motLeeted += leeterLettre(mot[i]);
    }

    return motLeeted;
}

function leeterLettre(lettre) {

    var lettreLeeted = lettre;

    switch (lettre.toLowerCase()) {
        case "a":
            lettreLeeted = "4";
            break;
        case "b":
            lettreLeeted = "8";
            break;
        case "e":
            lettreLeeted = "3";
            break;
        case "i":
            lettreLeeted = "1";
            break;
        case "s":
            lettreLeeted = "5";
            break;
    }

    return lettreLeeted;
}


// -0- //

var motSaisi = prompt("Entrez un mot");

console.log("Il y a " + nbVoyelles(motSaisi) + " voyelles et " + nbConsonnes(motSaisi) + " consonnes dans le mot " + motSaisi + ".");

console.log(motSaisi + " à l'envers s'écrit " + inverser(motSaisi) + ".");

console.log(palindrome(motSaisi));

console.log(motSaisi + " s'écrit " + leeterMot(motSaisi) + " en Leet Speak.");
