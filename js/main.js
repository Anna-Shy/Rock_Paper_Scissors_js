import { gameLogic } from "./gameLogic.js";

const rockEL = document.getElementById("rock");
const paperEL = document.getElementById("paper");
const scissorsEL = document.getElementById("scissors");


rockEL.addEventListener("click", function () {
  gameLogic("r");
});

paperEL.addEventListener("click", function () {
  gameLogic("p");
});

scissorsEL.addEventListener("click", function () {
  gameLogic("s");
});
