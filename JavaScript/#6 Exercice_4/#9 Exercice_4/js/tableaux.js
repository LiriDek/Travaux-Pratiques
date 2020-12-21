/**
 * EXERCICE 4
 * -------------------------------------
 */

/**
 * Exercice 1
 */
document.write("<h2>Exercice 1</h2>");

let prenoms = ["Martine", "Jean", "Sarah", "Edmond", "Jacqueline"];
// document.write(prenoms);

// 0.
for(let i = 0; i < prenoms.length; i++) {
    document.write(`<p>${prenoms[i]}</p>`);
    // document.write("<p>" + prenoms[i] + "</p>");
}

document.write("<hr>");

// 1.
prenoms.splice(3, 1);

for(let i = 0; i < prenoms.length; i++) {
    document.write(`<p>${prenoms[i]}</p>`);
    // document.write("<p>" + prenoms[i] + "</p>");
}

document.write("<hr>");

// 2.
prenoms.unshift("Guillaume");

for(let i = 0; i < prenoms.length; i++) {
    document.write(`<p>${prenoms[i]}</p>`);
    // document.write("<p>" + prenoms[i] + "</p>");
}

document.write("<hr>");


/**
 * Exercice 2
 */
document.write("<h2>Exercice 2</h2>");

let courses = ["Lait", "Oeufs", "Farine", "Fouet", "Vanille"];
// document.write(courses);

// 1.
document.write("<ul>");

for (let index = 0; index < courses.length; index++) {
    document.write(`<li>${courses[index]}</li>`);
    // document.write("<li>" + courses[index] + "</li>");
}

document.write("</ul>");
document.write("<hr>");

// 2.
document.write("<ul>");

for (let index = 0; index < courses.length; index++) {

    // Vérifie si l'élément en cours est égal à "Lait" OU "Fouet"
    if (courses[index] === "Lait" || courses[index] === "Fouet") {
        document.write(`<li>${courses[index]}</li>`);
        // document.write("<li>" + courses[index] + "</li>");
    }
}

document.write("</ul>");
document.write("<hr>");


/**
 * Exercice 3
 */
document.write("<h2>Exercice 3</h2>");

let nombres = [5, 12, 67, 8, 23];
let compteur = 0;
let total = 0;

while(compteur < nombres.length) {
    // J'additionne la valeur de la variable "total"
    // avec la valeur en cours du tableau
    // J'affecte cette nouvelle valeur à ma variable "total"
    // total = total + nombres[compteur];
    total += nombres[compteur];

    compteur++;
}

document.write(total);