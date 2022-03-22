import { getBotChoice, convertLetter } from "./botChoice.js";

let userScore = 0;
let botScore = 0;
const userScoreEL = document.getElementById("user-score");
const botScoreEL = document.getElementById("computer-score");

const resultEL = document.querySelector(".play__results");
const resetBtn = document.querySelector(".play__btn-reset");

const win = (userChoice, botChoice) => {
  userScore++;
  userScoreEL.innerHTML = userScore;
  botScoreEL.innerHTML = botScore;
  resultEL.innerHTML = `${convertLetter(userChoice)} vs. ${convertLetter(
    botChoice
  )} You've WON!`;
};

const lose = (userChoice, botChoice) => {
  botScore++;
  userScoreEL.innerHTML = userScore;
  botScoreEL.innerHTML = botScore;
  resultEL.innerHTML = `${convertLetter(userChoice)} vs. ${convertLetter(
    botChoice
  )} You've LOST!`;
};

export const gameLogic = (userChoice) => {
  const botChoice = getBotChoice();

  if (userScore < 3 && botScore < 3) {
    switch (userChoice + botChoice) {
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, botChoice);
        break;
      case "rp":
      case "ps":
      case "sr":
        lose(userChoice, botChoice);
        break;
    }
  } else {
    resultEL.innerHTML = "Round is over!";
  }
};

resetBtn.addEventListener("click", function () {
  userScore = 0;
  botScore = 0;

  userScoreEL.innerHTML = userScore;
  botScoreEL.innerHTML = botScore;
  resultEL.innerHTML = "Choice again!";
});