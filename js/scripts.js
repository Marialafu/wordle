const inputBarElement = document.getElementById('input-bar');
const gameBoardElement = document.getElementById('game-board');
const formElement = document.getElementById('form');
const messageElement = document.getElementById('message');
const winOrLose = document.getElementById('win-or-lose')

const allWords = ['zara'];

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
    //sumando aquí la row no funciona se sigue pintando
  } else {
    messageElement.textContent = `Word must have ${secretWord.length} letters`;
    //poner que no pase a la siguiente fila, que se mantenga en esa.
  }
  
  confirmValidateCharacters();
  event.target.reset();
};

const confirmValidateCharacters = () => {

  for (let i = 0; i < secretWord.length; i++) {
    if (inputBarElement.value[i] === secretWord[i]) {
      gameBoardElement.children[currentRow].children[i].classList.add(
        'box-green'
      );
      secretWord.replace(i, '*')
    }
  }
  
  for (let i = 0; i < secretWord.length; i++){
  if (secretWord.includes(inputBarElement.value[i]) && !gameBoardElement.children[currentRow].children[i].classList.contains('box-green')) {
  gameBoardElement.children[currentRow].children[i].classList.add(
  'box-yellow')
  
  } else if (
    !gameBoardElement.children[currentRow].children[i].classList.contains('box-green') && 
    !gameBoardElement.children[currentRow].children[i].classList.contains('box-yellow'))
    {
      gameBoardElement.children[currentRow].children[i].classList.add(
      'box-grey');
   }
  }

  includeLettersInBox();
  defineIfWinOrLose();
};


const defineIfWinOrLose = () => {
  
  if (inputBarElement.value === secretWord){
    winOrLose.textContent = 'YOU WIN'
    formElement.remove()
  } else if (currentRow >= tries){
    winOrLose.textContent = 'YOU LOSE'
    formElement.remove()
  }
  
}

formElement.addEventListener('submit', includeWord);
