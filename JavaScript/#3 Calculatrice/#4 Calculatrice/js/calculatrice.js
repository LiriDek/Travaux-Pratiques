/**
 * CALCULATRICE
 * -------------------------------------
 */

// Demande un premier nombre à l'utilisateur
// Number() renverra NaN s'il ne peut pas convertir en entier : Not a Number
let number1 = Number(prompt("Entrer un premier nombre"));

// Demande une opération à l'utilisateur
let operation = prompt("Entrer une opération (+, -, *, /)");

// Demande un second nombre à l'utilisateur
let number2 = Number(prompt("Entrer un deuxième nombre"));

// Initialisation du résultat à zéro
let resultat = null;

/* if (operation === '+') {
    // Si "operation" est égal au signe "+"
    resultat = number1 + number2;
}
else if (operation === '-') {
    // Si "operation" est égal au signe "-"
    resultat = number1 - number2;
}
else if (operation === '*') {
    // Si "operation" est égal au signe "*"
    resultat = number1 * number2;
}
else if (operation === '/') {
    // Si "operation" est égal au signe "/"
    resultat = number1 / number2;
}
else {
    document.write("Attention, votre opérateur est inexacte !");
    console.log("Attention, votre opérateur est inexacte !");
} */

/* if (operation == '+') {
    // Si "operation" est égal au signe "+"
    resultat = number1 + number2;
}
else {
    if (operation == '-') {
        // Si "operation" est égal au signe "-"
        resultat = number1 - number2;
    }
    else {
        if (operation == '*') {
            // Si "operation" est égal au signe "*"
            resultat = number1 * number2;
        }
        else {
            if (operation == '/') {
                // Si "operation" est égal au signe "/"
                resultat = number1 / number2;
            }
            else {
                document.write("Attention, votre opérateur est inexacte !");
                console.log("Attention, votre opérateur est inexacte !");
            }
        }
    }
} */

// Vérifie si la variable "operateur" est EGALE aux valeurs des cases
// On ne peut pas vérifie une différence, une supériorité ou une infériorité
switch(operation) {
    case '+':
        resultat = number1 + number2;
        break;
    case '-':
        resultat = number1 - number2;
        break;
    case '*':
        resultat = number1 * number2;
        break;
    case '/':
        resultat = number1 / number2;
        break;
    default:
        document.write("Attention, votre opérateur est inexacte !");
        console.log("Attention, votre opérateur est inexacte !");
}

// Vérifie si la variable "resultat" est différente de "null", dans ce cas,
// on affiche l'opération et son résultat. Sinon, on affiche rien.
if (resultat != null) {
    document.write(`${number1} ${operation} ${number2} = ${resultat}`);
    console.log(`${number1} ${operation} ${number2} = ${resultat}`);
}