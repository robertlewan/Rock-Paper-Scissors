// Get user choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Invalid input');
  }
}

// Get random computer choice
const getCompChoice = () => {
  let compInput;
  let choice = Math.floor(Math.random()*3);
  switch (choice) {
    case 0:
      return compInput = 'rock';
      break;
    case 1:
      return compInput = 'paper';
      break;
    case 2:
      return compInput = 'scissors';
      break;
  }
}

const determineWinner = (userInput, compInput) => {
  if (userInput === 'bomb') {
    return console.log('You cheated');
  } else if (userInput === compInput) {
    return console.log('Tie');
  } else {
    if (userInput === 'rock') { //If user choose rock
      if (compInput === 'paper') {
        return console.log('You lose');
      } else {
        return console.log('You win');
      }
    }
    if (userInput === 'paper') { //If user choose paper
      if (comInput === 'scissors') {
        return console.log('You lose');
      } else {
        return console.log('You win');
      }
    }
    if (userInput === 'scissors') {//If user choose scissor
      if (compInput === 'rock') {
        return console.log('You lose');
      } else {
        return console.log('You win');
      }
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  console.log(`You choose ${userChoice}`);
  let compChoice = getCompChoice();
  console.log(`Computer chooses ${compChoice}`);
  determineWinner(userChoice,compChoice);
}
playGame();