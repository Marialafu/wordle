const inputBarElement = document.getElementById('input-bar');
const gameBoardElement = document.getElementById('game-board');
const formElement = document.getElementById('form');
const messageElement = document.getElementById('message');
const winOrLose = document.getElementById('win-or-lose')

const allWords = [  
  'antiguedad'
];

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

const defineIfWinOrLose = () => {
  
  if (inputBarElement.value === secretWord){
    winOrLose.textContent = 'YOU WIN'
    formElement.remove()
  } else if (currentRow >= tries){
    winOrLose.textContent = 'YOU LOSE'
    formElement.remove()
  }
  
}

const includeLettersInBox = () => {
  for (let i = 0; i < secretWord.length; i++) {
    gameBoardElement.children[currentRow].children[i].textContent =
      inputBarElement.value[i];
  }
  currentRow++;
};

const confirmValidateCharacters = () => {
  let changedWord = secretWord
  console.log(changedWord);
  

  for (let i = 0; i < secretWord.length; i++) {
    let inputLetter = inputBarElement.value[i]
    const currentBox = gameBoardElement.children[currentRow].children[i]

    if (inputLetter === changedWord[i]) {
      currentBox.classList.add(
        'box-green'
      );
      changedWord = changedWord.replace(changedWord[i], '*')
    }
  }
  console.log(changedWord);
  
  
  for (let i = 0; i < secretWord.length; i++){
    let inputLetter = inputBarElement.value[i]
    const currentBox = gameBoardElement.children[currentRow].children[i]

  if (!currentBox.classList.contains('box-green')){

    if (changedWord.includes(inputLetter)) {
    currentBox.classList.add(
    'box-yellow')

    //explicación
    const currentLetterPosition = changedWord.indexOf(inputLetter)
    const currentLetter = changedWord.charAt(currentLetterPosition)
    changedWord = changedWord.replace(currentLetter, '*')
    console.log(changedWord);
    
    
    } else if (
      !currentBox.classList.contains('box-green'))
      {currentBox.classList.add('box-grey')}
    }

}
  includeLettersInBox();
  defineIfWinOrLose();
};

const includeWord = event => {
  event.preventDefault();

  if (inputBarElement.value.length === secretWord.length) {
    messageElement.textContent = '';
    confirmValidateCharacters();
  } else {
    messageElement.textContent = `Word must have ${secretWord.length} letters`;
  }
  
  event.target.reset();
};


formElement.addEventListener('submit', includeWord);
