const inputBarElement = document.getElementById('input-bar');
const gameBoardElement = document.getElementById('game-board');

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

    for (let i = 0; i < inputBarElement.value.length; i++){
      gameBoardElement.children[0].children[i].textContent = inputBarElement.value[i]
    }
}

const includeWord = () => {
  console.log(gameBoardElement.children[0]);
  
  if (event.key === 'Enter' && inputBarElement.value.length === gameBoardElement.children[0].length){
    includeLettersInBox()
    }
    
    
  }
  


document.addEventListener('keypress', includeWord)
