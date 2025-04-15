const inputBarElement = document.getElementById('input-bar');
const gameBoardElement = document.getElementById('game-board');
const formElement = document.getElementById('form')

//intentos como variable para poder cambiarlo?
const allWords = ['zara', 'hola'];
const characters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'

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
  let childrenValue = 0;
  for (let i = 0; i < inputWordLength; i++){
    //como cambiar el children según la palabra ya esté completa
    gameBoardElement.children[childrenValue].children[i].textContent = inputBarElement.value[i]
    childrenValue++
  }
}

const includeWord = (event) => {
  event.preventDefault()
  const wordLength = gameBoardElement.children[0].childElementCount

  if (inputBarElement.value.length === wordLength){
    includeLettersInBox()
  } else {
    const wrongMessage = document.createElement('p');
    wrongMessage.textContent = `Word must have ${wordLength} letters`
    gameBoardElement.append(wrongMessage);
  }
  confirmValidateCharacters()
}

const confirmValidateCharacters = () => {
  //cambiar según el children
  const boxElement = gameBoardElement.children[0].children[0]
  
  
  for (const character of inputBarElement.value.toUpperCase()){  
    if (characters.includes(character)){
      boxElement.classList.add('box-yellow');
      console.dir(boxElement)
    }
  }
  
}

formElement.addEventListener('submit', includeWord)
