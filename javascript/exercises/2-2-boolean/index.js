//! N'UTILISE PAS IF OU ELSE


// Crée une fonction appellé `isEvenorOdd` qui prend comme arguments une valeur.
// La fonction retourne vrai si le nombre et paire et faux si il est impaire















// Crée une fonction appellé 'findLargest' qui prend comme arguments deux paramètres.
// Paramètres: nombre1, nombre2
// 
// Retourne vrai si le nombre1 est supérieur a nombre2
// retourne faux si nombre1 est inférieur ou égal a nombre2













// Crée une fonction appellé 'isEqual' qui prend comme arguments deux paramètres.
// Paramètres: nombre1, nombre2
// 
// Retourne vrai si le nombre1 est équivalent/égal au nombre2
// retourne faux si le nombre1 n'est pas équivalent/égal au nombre2












// FIN DE L'EXERCICE. NE PAS MODIFIER

const chalk = require("chalk");

function check(variable, variableName, expectedValue) {

    checkVariableValue(variable, expectedValue) ?
        console.log(chalk.green(`✓ ${variableName}: ${expectedValue}.`)) :
        console.log(chalk.red(`✗ ${variableName}: reçu ${variable} expecté ${expectedValue}`));

}

function checkVariableValue(variable, expectedValue) {
    return variable == expectedValue;
}

console.log(chalk.blue("Check fonction 'isEvenorOdd'..."));
try {
    check(isEvenorOdd(4), "isEvenorOdd(4)", true);
    check(isEvenorOdd(8), "isEvenorOdd(8)", true);
    check(isEvenorOdd(34), "isEvenorOdd(34)", true);
    check(isEvenorOdd(55), "isEvenorOdd(55)", false);
    check(isEvenorOdd(49), "isEvenorOdd(49)", false);
} catch {
    console.log(chalk.red("Une erreur est survenue. Est-ce que la fonction 'isEvenorOdd' existe?"));
}


console.log("");
try {
    console.log(chalk.blue("Check fonction 'findLargest'..."));
    check(findLargest(4, 16), "findLargest(4, 16)", false);
    check(findLargest(20, 9), "findLargest(20, 9)", true);
    check(findLargest(40, 40), "findLargest(40, 40)", false);
    check(findLargest(8, 56), "findLargest(8, 56)", false);
    check(findLargest(100, 96), "findLargest(100, 96)", true);
    check(findLargest(18, 2), "findLargest(18, 2)", true);
    check(findLargest(2, 2), "findLargest(2, 2)", false);
} catch {
    console.log(chalk.red("Une erreur est survenue. Est-ce que la fonction 'findLargest' existe?"));
}

console.log("");
try {

    console.log(chalk.blue("Check fonction 'isEqual'..."));
    check(isEqual(16, 16), "findLargest(16, 16)", true);
    check(isEqual(20, 9), "findLargest(20, 9)", false);
    check(isEqual(40, 40), "findLargest(40, 40)", true);
    check(isEqual(8, 56), "findLargest(8, 56)", false);
    check(isEqual(100, 96), "findLargest(100, 96)", false);
    check(isEqual(18, 18), "findLargest(18, 18)", true);
    check(isEqual(2, 2), "findLargest(2, 2)", true);
} catch {
    console.log(chalk.red("Une erreur est survenue. Est-ce que la fonction 'isEqual' existe?"));
}