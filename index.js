export function round4(points) {
  const answer = prompt("Round 4: What is the name of USU's mascot?");
  if (answer !== null && answer.trim().toLowerCase() === "big blue") {
    alert("Correct! +10 points");
    return points + 10;
  }
  alert("Sorry, the correct answer is Big Blue.");
  return points;
}
