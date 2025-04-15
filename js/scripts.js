const inputBarElement = document.getElementById('input-bar');
const gameBoardElement = document.getElementById('game-board');
const formElement = document.getElementById('form')

const allWords = ['zara', 'hola'];

const selectAleatoryWord = () => {
  const aleatoryNumber = Math.floor(Math.random() * allWords.length);
  const aleatoryWord = allWords[aleatoryNumber];
  return aleatoryWord;
};
console.log(selectAleatoryWord());

const createGameBoard = () => {
  for (let i = 0; i < 5; i++){
    const boxGroup = document.createElement('div');
    boxGroup.classList.add('container')
   for (let i = 0; i < selectAleatoryWord().length; i++) {
      const boxElement = document.createElement('div');
      boxElement.classList.add('box');
      boxGroup.append(boxElement);
    }
    gameBoardElement.append(boxGroup);
  }
}
createGameBoard();


const includeLettersInBox = () => {
  let inputWordLength = inputBarElement.value.length
  for (let i = 0; i < inputWordLength; i++){
    gameBoardElement.children[0].children[i].textContent = inputBarElement.value[i]
  }
}

const includeWord = (event) => {
  event.preventDefault()

  if (inputBarElement.value.length === gameBoardElement.children[0].childElementCount){
    includeLettersInBox()
  } else {
    const wrongMessage = document.createElement('p');
    wrongMessage.textContent = `Word must have ${inputBarElement.value.length} letters`
    gameBoardElement.append(wrongMessage);
  } 
}

document.addEventListener('submit', includeWord)
