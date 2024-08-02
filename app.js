const readlineSync = require('readline-sync'); // handle user input

class MathQuiz {
    // initialize game 
    constructor() {
        this.score = 0;
        this.totalQuestions = 5;
        this.currentQuestion = 0;
    }
    
    start() {
        console.log("Welcome to the Math Quiz Game!");
        this.nextQuestion();
    }

    generateQuestion() {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operations = ['+', '-', '*', '/'];
        const operation = operations[Math.floor(Math.random() * operations.length)];

        switch (operation) {
            case '+':
                this.correctAnswer = num1 + num2;
                console.log(`Question ${this.currentQuestion + 1}: What is ${num1} + ${num2}?`);
                break;
            case '-':
                this.correctAnswer = num1 - num2;
                console.log(`Question ${this.currentQuestion + 1}: What is ${num1} - ${num2}?`);
                break;
            case '*':
                this.correctAnswer = num1 * num2;
                console.log(`Question ${this.currentQuestion + 1}: What is ${num1} * ${num2}?`);
                break;
            case '/':
                this.correctAnswer = num1;
                const adjustedNum1 = num1 * num2;
                console.log(`Question ${this.currentQuestion + 1}: What is ${adjustedNum1} / ${num2}?`);
                break;
        }
    }

    // checks if user input and the actual correct answer matches
    checkAnswer(answer) {
        if (parseInt(answer) === this.correctAnswer) {
            console.log("Correct!");
            this.score++;
        } else {
            console.log(`Wrong! The correct answer was ${this.correctAnswer}.`);
        }
    }

    nextQuestion() {
        if (this.currentQuestion < this.totalQuestions) {
            this.generateQuestion();
            const userAnswer = readlineSync.question(`Your answer: `);
            this.checkAnswer(userAnswer);
            this.currentQuestion++;
            this.nextQuestion();
        } else {
            this.endGame();
        }
    }

    endGame() {
        console.log(`Game Over! Your score is ${this.score} out of ${this.totalQuestions}.`);
    }
}

const game = new MathQuiz();
game.start();
