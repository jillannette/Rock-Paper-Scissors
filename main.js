const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') 
    return userInput
 else 
     console.log('Your answer must be either rock, paper or scissors');
}
   
      function getComputerChoice () {
          randomNumber = (Math.floor(Math.random() * 3))  
      if (randomNumber === 1) {
              console.log("The computer's answer is 'rock'")
       } else if (randomNumber === 2) { 
              console.log("The computer's answer is 'paper'")
      } else 
          console.log("The computer's answer is 'scissors'")
      }
    function determineWinner (userChoice, computerChoice) {
        //  determineWinner = ('getUserChoice' && 'getComputerChoice')
    if (userChoice===computerChoice) 
    console.log('No winner determined.  The game is a tie.')
    else if (userChoice === 'rock' && computerChoice === 'paper') 
        console.log("The computer wins!") 
    else 
    console.log("You win!")
    if ('getUserChoice' === 'paper' && 'getComputerChoice' === 'rock')
    console.log("You win!")
    else 
    console.log('Computer wins!')
    if ('getUserChoice' === 'scissors' && 'getComputerChoice' === 'paper')
    console.log("You win!")
    else 
    console.log ("Computer wins!")
    }
    determineWinner();
    function playGame () {
        let userChoice = getUserChoice() 
            console.log(`"Your answer is ${getUserChoice}"`)
        let getComputerChoice = (Math.floor(Math.random() * 3)) 
            console.log(`"The computer chose ${getComputerChoice}"`)    
 }
  function getComputerChoice () {
      randomNumber = (Math.floor(Math.random() * 3))  
  if (randomNumber === 1) {
          console.log("The computer's answer is 'rock'")
   } else if (randomNumber === 2) { 
          console.log("The computer's answer is 'paper'")
  } else 
      console.log("The computer's answer is 'scissors'")
  }
function determineWinner (userChoice, computerChoice) {
    if (userChoice===computerChoice) 
console.log('No winner determined. The game is a tie.')
    else if (userChoice==='rock' && computerChoice==='paper') 
    console.log("The computer wins!") 
else if (userChoice==='rock' && computerChoice==='scissors')
console.log("You win!")
else if ('getUserChoice' === 'paper' && 'getComputerChoice' === 'rock')
console.log("You win!")
else if ('getUserChoice' === 'paper' && 'getComputerChoice' === 'scissors')
console.log('Computer wins!')
else if ('getUserChoice' === 'scissors' && 'getComputerChoice' === 'paper')
console.log("You win!")
else if ('getUserChoice' === 'scissors' && 'getComputerChoice' === 'rock')
console.log ('Computer wins!')
else if ('getUserChoice' === 'rock' && 'getComputerChoice' === 'paper')
console.log('Computer wins!')
else if ('getUserChoice' === 'rock' && 'getComputerChoice' === 'scissors')
console.log("You win!")

}
function playGame () {
    let userChoice = getUserChoice('rock', 'paper', 'scissors')
    console.log(userChoice);
    let computerChoice = getComputerChoice()
    console.log(computerChoice)
playGame();
}
