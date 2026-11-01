// Nelson - Round 1: USU Trivia
// This function asks a trivia question and awards 10 points for a correct answer.

export function round1(points) {
    let answer = prompt("What is the name of Utah State University's mascot?");

    if (answer !== null && answer.trim().toLowerCase() === "big blue") {
        alert("Correct! You earned 10 points.");
        return points + 10;
    } else {
        alert("Incorrect! Your score stays the same.");
        return points;
    }
}