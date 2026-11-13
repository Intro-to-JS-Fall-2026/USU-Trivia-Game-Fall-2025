function round4(points) {
  const answer = prompt("Round 4: What is the name of USU's mascot?");
  if (answer !== null && answer.trim().toLowerCase() === "big blue") {
    alert("Correct! +10 points");
    return points + 10;
  }
  alert("Sorry, the correct answer is Big Blue.");
  return points;
}
//Function for Round2 (Nadine)
function round2(currentScore){
    //Take points as input (currentScore
    //Ask a USU themed trivia question
    let userGuess = prompt("What are students called at USU?").toLowerCase();

    //define the correct answer and assign points
    let correctAnswer = "aggies";
    let points = 5;

    //if the answer is correct, return the current score and plus newly added points
    if (userGuess === correctAnswer){
        return currentScore + points;
    }
    else{
        return currentScore;
    }

}


// Nelson - Round 1: USU Trivia
// This function asks a trivia question and awards 10 points for a correct answer.

function round1(points) {
    let answer = prompt("What is the name of Utah State University's mascot?");

    if (answer !== null && answer.trim().toLowerCase() === "big blue") {
        alert("Correct! You earned 10 points.");
        return points + 10;
    } else {
        alert("Incorrect! Your score stays the same.");
        return points;
    }
}
// Write your functions here:
function round3(points) {
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
//export the function
export {round1,round2,round3,round4};
// 1) Each function should accept points as an input
// 2) Each function should display a prompt quizzing the user on the correct answer to a piece of USU trivia (You choose the trivia question)
// 3) If they answer correctly, return the input points + however many points you feel they deserve for being correct. 
// 4) Otherwise, return the original score
// 5) Name your function according to the guidelines on canvas (e.g. round1, round2, etc.)
// If you need more guidence, feel free to check index.html to see the main flow of the program.
