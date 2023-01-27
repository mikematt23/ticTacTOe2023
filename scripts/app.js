const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]

let editedPlayer = 0
let activePlayer = 0
let currentRound = 0 

const players = [
  {
    name:"",
    symbol : "X"
  },
  {
    name:"",
    symbol: "O"
  }
]

const modal = document.getElementById('config-overlay')
const backdrop = document.getElementById("backdrop")
const form = document.querySelector('form')
const errMessage = document.getElementById('config-err')
const listElements = document.querySelectorAll('#game-board li')
const gameBoardElenment = document.getElementById("game-board")
const gameOverElement = document.getElementById("game-over")
const winnerName = document.querySelector("#game-over span")
const draw = document.querySelector("#game-over h2")

const activeGamePlayerName = document.getElementById("active-player-name")


const changePlayer1 = document.getElementById("edit-player-1")
const changePlayer2 = document.getElementById("edit-player-2")
const startNewGameBtn = document.getElementById("start-game-btn")
const closeFormBtn = document.getElementById('close')

const gameArea = document.getElementById("active-game")

changePlayer1.addEventListener('click',openForm)
changePlayer2.addEventListener("click",openForm)
form.addEventListener('submit',submitPlayer)

closeFormBtn.addEventListener('click',closeForm)
backdrop.addEventListener('click',closeForm)

startNewGameBtn.addEventListener("click",startNewGame)

for(const listElement of listElements){
  listElement.addEventListener("click", selectGameField)
}
console.log(typeof listElements)
