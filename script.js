let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (value1, value2) => {
    return Math.abs(value1 - value2);
};

const compareGuesses = (human, computer, target) => {
    if (getAbsoluteDistance(target, human) < getAbsoluteDistance(target, computer)) {
        return true;
    } else if (getAbsoluteDistance(target, human) > getAbsoluteDistance(target, computer)) {
        return false;
    } else {
        return true;
    }
};

const updateScore = winner => {
    if (winner === "human") {
        humanScore++;
    } else if (winner === "computer") {
        computerScore++;
    }
};

const advanceRound = () => {
    currentRoundNumber++;
};