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

//export the function
export {round2};