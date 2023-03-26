const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// Get the folder name from the command line arguments
const folderName = process.argv[2];

// Check if a folder name was provided
if (!folderName) {
    console.error(chalk.red("Erreur: Veuillez fournir un nom d'exercice en tant qu'argument."));
    process.exit(1);
}

// Get the full path to the folder
const folderPath = path.join(__dirname, folderName);

// Check if the folder exists
if (!fs.existsSync(folderPath)) {
    console.error(chalk.red(`Erreur: Exercice non trouvé: ${folderName}`));
    process.exit(1);
}

// Get the full path to the index.js file
const scriptPath = path.join(folderPath, 'index.js');

// Check if the script file exists
if (!fs.existsSync(scriptPath)) {
    console.error(chalk.red(`Erreur: Script not found in folder: ${folderName}`));
    process.exit(1);
}

// Read the script file contents
fs.readFile(scriptPath, 'utf8', (err, data) => {
    if (err) {
        console.error(chalk.red(`Erreur: Failed to read script file: ${err}`));
        process.exit(1);
    }

    // Execute the script
    try {
        eval(data);
    } catch (err) {
        console.error(chalk.red(`\nErreur: Une erreur est présente dans le code: \n\n${err}`));
        process.exit(1);
    }
});
