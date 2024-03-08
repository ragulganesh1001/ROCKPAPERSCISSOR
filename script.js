const MOVE_BUTTONS =document.getElementsByClassName("moveoptions")
const result =document.getElementById("result")
const computerchoicetext = document.getElementById("computerchoice")
const choices =["rock","paper","scissor"]

Array.from(MOVE_BUTTONS).forEach(button => {
  button.addEventListener("click",function(){
    playgame(button)
  })
})

function playgame(button) {
  var yourmove = button.id
  if(yourmove == "rockbutton") {
    yourmove ="rock"
  }
  if(yourmove == "paperbutton") {
    yourmove ="paper"
  }
  if(yourmove == "scissorbutton") {
    yourmove ="scissor"
  }
  var computerchoice = choices[Math.floor(Math.random()*3)]
  computerchoicetext.innerHTML = "the computer chose" + computerchoice
  if (yourmove == computerchoice){
    result.innerHTML = "its a tie"
  }
  else if ((yourmove == "rock" && computerchoice == "scissor") || 
           (yourmove == "paper" && computerchoice == "rock") ||
           (yourmove == "scissor" && computerchoice == "paper"))
  {
    result.innerHTML = "you win"
  }
  else
  {
    result.innerHTML = "you lose"
  }
}