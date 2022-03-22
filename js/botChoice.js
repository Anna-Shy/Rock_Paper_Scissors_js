export const getBotChoice = () => {
  const choices = ["r", "p", "s"];
  const getRandomNumber = Math.floor(Math.random() * 3);

  return choices[getRandomNumber];
};

export const convertLetter = (letter) => {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
};
