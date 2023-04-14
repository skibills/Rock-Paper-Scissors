const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Start the Game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");

        });
    };
    //Play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
        //Reset shake between choices
        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });
    //Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option =>{
            option.addEventListener('click', function() {
            //Computer Choice
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];

            //Update Images
            setTimeout(() =>{
            //Here is where we are calling and comparing hands
            compareHands(this.textContent, computerChoice);
            //Update hand images
              playerHand.src = `./assets/${this.textContent}.png`;
              computerHand.src = `./assets/${computerChoice}.png`;
            }, 2000);

            //Shake animation
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
            });
        });       
    };

    const UpdateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice)=> {
        //Update Text
        const winner = document.querySelector('.winner');
        //Check for Tie
        if(playerChoice === computerChoice){
            winner.textContent = 'DRAW!'
            return;
        }
        //Check for 'Rock'
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins!'
                pScore++;
                UpdateScore();
            }else{
                winner.textContent = 'Computer Wins';
                cScore++;
                UpdateScore();
                return;
            }
        }
        //Check for 'Paper'
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins'
                cScore++;
                UpdateScore();
            }else{
                winner.textContent = 'Player Wins!';
                pScore++;
                UpdateScore();
                return;
            }
        }
        //Check for 'Scissors'
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins'
                cScore++;
                UpdateScore();
            }else{
                winner.textContent = 'Player Wins!';
                pScore++;
                UpdateScore();
                return;
            }
        }
    }

    //To call all inner functions
    startGame();
    playMatch();
};

//Start the game function
game();
