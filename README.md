# Math Quiz Game

A simple command-line math quiz game implemented in Node.js. This game generates random math problems involving operations such as addition, subtraction, multiplication, and division, and keeps track of the user's score.

## Features

- Randomly generates math problems
- Supports addition, subtraction, multiplication, and division operations
- Keeps track of the player's score
- Provides feedback on correct and incorrect answers

## Installation

1. Clone the repository or download the code files.

    ```sh
    git clone https://github.com/amandayu255/math-quiz-game.git
    ```

2. Initialize a new Node.js project (if not already done).

    ```sh
    npm init -y
    ```

3. Install the `readline-sync` package.

    ```sh
    npm install readline-sync
    ```

## Usage

1. Run the Math Quiz game.

   ```sh
   npm run start
   ```

2. Follow the on-screen prompts to answer the math questions.

    - The game will start with a welcome message: `Welcome to the Math Quiz Game!`
    - You will be asked a series of random math questions involving addition, subtraction, multiplication, or division.
    - For each question, type your answer and press `Enter`.

3. Receive feedback for each question.

    - If your answer is correct, you will see the message: `Correct!`
    - If your answer is incorrect, you will see the message: `Wrong! The correct answer was X.`, where `X` is the correct answer.

4. View your final score.

    - After answering all the questions, the game will display your total score in the format: `Game Over! Your score is Y out of 5.`, where `Y` is the number of correct answers you provided.


