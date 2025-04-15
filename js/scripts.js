const inputBarElement = document.getElementById('input-bar');
const gameBoardElement = document.getElementById('game-board');

const allWords = ['zara', 'hola'];

const selectAleatoryWord = () => {
  const aleatoryNumber = Math.floor(Math.random() * allWords.length);
  const aleatoryWord = allWords[aleatoryNumber];
  return aleatoryWord;
};

const createGameBoard = () => {
  const boxGroup = document.createElement('div');
  for (let i = 0; i < selectAleatoryWord().length; i++) {
    const boxElement = document.createElement('div');
    boxElement.classList.add('box');
    boxGroup.append(boxElement);
  }
  gameBoardElement.append(boxGroup);
};
createGameBoard();
