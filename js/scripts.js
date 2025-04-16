const inputBarElement = document.getElementById('input-bar');
const gameBoardElement = document.getElementById('game-board');
const formElement = document.getElementById('form');
const messageElement = document.getElementById('message');

const allWords = ['zara'];
const characters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

let secretWord = '';
let tries = 5;
let currentRow = 0;

const selectAleatoryWord = () => {
  const aleatoryNumber = Math.floor(Math.random() * allWords.length);
  const aleatoryWord = allWords[aleatoryNumber];
  return aleatoryWord;
};

const createGameBoard = () => {
  secretWord = selectAleatoryWord();

  for (let i = 0; i < tries; i++) {
    const boxGroup = document.createElement('div');
    boxGroup.classList.add('container');
    for (let j = 0; j < secretWord.length; j++) {
      const boxElement = document.createElement('div');
      boxElement.classList.add('box');
      boxGroup.append(boxElement);
    }
    gameBoardElement.append(boxGroup);
  }
};
createGameBoard();

const includeLettersInBox = () => {
  for (let i = 0; i < secretWord.length; i++) {
    gameBoardElement.children[currentRow].children[i].textContent =
      inputBarElement.value[i];
  }
  currentRow++;
};

const includeWord = event => {
  event.preventDefault();

  if (inputBarElement.value.length === secretWord.length) {
    messageElement.textContent = '';
  } else {
    messageElement.textContent = `Word must have ${secretWord.length} letters`;
  }
  confirmValidateCharacters();
  event.target.reset();
};

const confirmValidateCharacters = () => {
  const charactersSecretWord = secretWord.split('');
  const charactersInputWord = inputBarElement.value.split('');

  for (let i = 0; i < secretWord.length; i++) {
    //letra correcta
    if (charactersInputWord[i] === charactersSecretWord[i]) {
      gameBoardElement.children[currentRow].children[i].classList.add(
        'box-green'
      );
    } //BUCLE para leer la palabra
    else if (
      //la letra no está puesta ya
      secretWord.includes(charactersInputWord[i])
    ) {
      gameBoardElement.children[currentRow].children[i].classList.add(
        'box-yellow'
      );
    } else {
      gameBoardElement.children[currentRow].children[i].classList.add(
        'box-grey'
      );
    }
  }

  includeLettersInBox();
};

formElement.addEventListener('submit', includeWord);
