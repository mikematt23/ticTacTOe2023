function resetGame(){
  activePlayer = 0
  currentRound = 0
  gameOverElement.style.display = 'none'
  draw.innerHTML = "You won <span>player name</span>!"
  
  let gameBoardIndex = 0
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      gameData[i][j] = 0  
      const gameBoardItem =gameBoardElenment.children[gameBoardIndex]
      gameBoardItem.textContent = ''
      gameBoardItem.classList.remove('disabled')
      gameBoardIndex++
    }
  }
}

function startNewGame (){
  if(players[0].name === "" || players[1].name === ""){
    alert("you must enter a player name for both players")
    return
  }
    gameArea.style.display ="block"
    activeGamePlayerName.textContent = players[activePlayer].name
    resetGame()
}

function switchPlayer (){
  if(activePlayer === 0){
    activePlayer++
   }else{
    activePlayer--
   }
   activeGamePlayerName.textContent = players[activePlayer].name
}

function selectGameField (event){
   const selectedField = event.target

   if(selectedField.textContent.length === 1){
    return 
   }

   selectedField.textContent = players[activePlayer].symbol
   selectedField.classList.add('disabled')
   
   const selectedColumn = +selectedField.dataset.col -1
   const selectedRow = +selectedField.dataset.row -1

   gameData[selectedRow][selectedColumn] = activePlayer + 1

 
   switchPlayer()
   currentRound++
   const winnerID = checkForGameOver()
   endGame(winnerID)
}

function checkForGameOver (){
  for(let i = 0; i < 3; i++){
    if(
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] && 
      gameData[i][1] === gameData[i][2]
      ){
      return gameData [i][0]
     }
  }

  for(let i = 0; i < 3; i++){
    if(
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] && 
      gameData[0][i] === gameData[2][i]
      ){
      return gameData [0][i]
     }
  }

  if(
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1]&&
    gameData[1][1] === gameData[2][2]
  ){
    return gameData[0][0]
  }

  if(
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1]&&
    gameData[1][1] === gameData[2][0]
  ){
    return gameData[0][2]
  }
  
  if(currentRound === 9){
    return -1
  }

  return 0
}

function endGame(winnerId){
  if(winnerId === 1 ){
    gameOverElement.style.display ="block"
    winnerName.textContent = players[0].name
  }else if(winnerId === 2){
    gameOverElement.style.display ="block"
    winnerName.textContent = players[1].name
  }else if(winnerId === -1){
    gameOverElement.style.display ="block"
    draw.textContent = "No Winner"
  }else if(winnerId === 0){
    return
  }
}