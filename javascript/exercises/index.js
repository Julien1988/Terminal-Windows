const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

function executeScript(exerciseName) {
    if (!exerciseName) {
        const exercises = getAvailableExercises();
        console.log(chalk.yellow('Exercises disponibles:'));
        exercises.forEach((exercise, index) => {
            console.log(chalk.yellow(`${index + 1}. ${exercise}`));
        });
        const selectedExerciseIndex = getUserInput('Entre le nombre de l\'exercise que tu veux lancer:');
        const selectedExercise = exercises[selectedExerciseIndex - 1];
        // console.log(chalk.yellow(`Lancement de "${selectedExercise}"...`));
        executeScript(selectedExercise);
    } else {
        const scriptPath = path.join(__dirname, exerciseName, 'index.js');
        if (!fs.existsSync(scriptPath)) {
            console.log(chalk.red(`Erreur: Le script "${exerciseName}" n'a pas été trouver`));
        } else {
            console.log(chalk.yellow(`Execution de "${exerciseName}"...`));
            require(scriptPath);
        }
    }
}

function getAvailableExercises() {
    const exerciseDirectories = fs.readdirSync(__dirname, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
    return exerciseDirectories;
}

function getUserInput(prompt) {
    const readlineSync = require('readline-sync');
    return readlineSync.questionInt(prompt);
}

executeScript(process.argv[2]);