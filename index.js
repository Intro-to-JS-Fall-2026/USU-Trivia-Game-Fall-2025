// Write your functions here:
export function round3(points) {
    let gainPoints = 15;
    let newTotal = points + gainPoints;
    let answer = 'THISTLE';
    let guess = prompt("What is the name of USU's new LIVE Mascot?").trim().toUpperCase();
    if (guess === answer) {
        alert(`Correct! You gained ${gainPoints} points. That brings your total from ${points} to ${newTotal}!`);
        return points += gainPoints;
    } else {
        alert(`Incorrect. Your total points is still ${points}`);
        return points;
    }
}
// 1) Each function should accept points as an input
// 2) Each function should display a prompt quizzing the user on the correct answer to a piece of USU trivia (You choose the trivia question)
// 3) If they answer correctly, return the input points + however many points you feel they deserve for being correct. 
// 4) Otherwise, return the original score
// 5) Name your function according to the guidelines on canvas (e.g. round1, round2, etc.)
// If you need more guidence, feel free to check index.html to see the main flow of the program.