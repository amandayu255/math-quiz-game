const readlineSync = require('readline-sync'); // handle user input

let score = 0;
const totalQuestions = 5;
let currentQuestion = 0;

function startGame() {
    console.log("Welcome to the Math Quiz Game!");
    nextQuestion();
}

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)]; // randomly pick out one of the operations

    let correctAnswer;
    switch (operation) {
        case '+':
            correctAnswer = num1 + num2;
            console.log(`Question ${currentQuestion + 1}: What is ${num1} + ${num2}?`);
            break;
        case '-':
            correctAnswer = num1 - num2;
            console.log(`Question ${currentQuestion + 1}: What is ${num1} - ${num2}?`);
            break;
        case '*':
            correctAnswer = num1 * num2;
            console.log(`Question ${currentQuestion + 1}: What is ${num1} * ${num2}?`);
            break;
        case '/':
            correctAnswer = num1;
            const adjustedNum1 = num1 * num2; // make sure that the product is divisible and results in an integer answer
            console.log(`Question ${currentQuestion + 1}: What is ${adjustedNum1} / ${num2}?`);
            break;
    }
    return correctAnswer;
}

function checkAnswer(userAnswer, correctAnswer) {
    if (parseInt(userAnswer) === correctAnswer) { // convert user input (string) into an integer and then see if matches to the correct answer
        console.log("Correct!");
        score++;
    } else {
        console.log(`Wrong! The correct answer was ${correctAnswer}.`);
    }
}

function nextQuestion() {
    if (currentQuestion < totalQuestions) {
        const correctAnswer = generateQuestion();
        const userAnswer = readlineSync.question(`Your answer: `);
        checkAnswer(userAnswer, correctAnswer);
        currentQuestion++;
        nextQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    console.log(`Game Over! Your score is ${score} out of ${totalQuestions}.`);
}

startGame();
