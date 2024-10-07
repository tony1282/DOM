const images = document.querySelectorAll('.image img');

const getChoiceUser = (e) => {
    const image = e.target;  
    const choiceUser = image.getAttribute('data-id'); 
    const imageUser = image.src;  

    const userChoiceDisplay = document.getElementById('userChoiceImg');
    userChoiceDisplay.src = imageUser;

 
    const computerChoice = getComputerChoice();
    const computerChoiceDisplay = document.getElementById('computerChoiceImg');
    computerChoiceDisplay.src = `./${computerChoice}.jpg`; 

  
    play(choiceUser, computerChoice);
}


const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const play = (userChoice, computerChoice) => {
    const resultDisplay = document.querySelector('.result span');
    let result;

    if (userChoice === computerChoice) {
        result = 'Empate';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'Usuario';
    } else {
        result = 'Computadora';
    }

  
    resultDisplay.textContent = result;
}


images.forEach(image => image.addEventListener('click', getChoiceUser));
