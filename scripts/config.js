function openForm (event){
  const selectedPlayerId = +event.target.dataset.playerid
  editedPlayer = selectedPlayerId
  modal.style.display = "block"
  backdrop.style.display = "block"
}

function closeForm(){
  modal.style.display = "none"
  backdrop.style.display = "none"
  form.firstElementChild.classList.remove('error')
  errMessage.textContent = ""
  const input = document.getElementById('userName')
  input.value = ''
}

function submitPlayer(event){
  event.preventDefault()
  const formData = new FormData(event.target)
  const enteredPlayerName = formData.get("userName").trim()

  if(!enteredPlayerName){
    event.target.firstElementChild.classList.add('error')
    errMessage.textContent = 'Please enter a name'
    return
  }
  const updatedPlayerData = document.getElementById('player-' + editedPlayer + "-data")
  updatedPlayerData.children[1].textContent = enteredPlayerName
  players[editedPlayer-1].name = enteredPlayerName
  console.log(players)

  closeForm()
}