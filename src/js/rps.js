function Rps() {

   this.computerChoice = function () {
        let choices = ['Rock','Paper','Scissors']
        let randomizer = Math.floor(Math.random() * 3)
        return choices[randomizer]
    }

    this.playGame = function (playerChoice, computerChoice) {
        if(playerChoice === computerChoice) {
            return ('Draw')
        }
        else if(( playerChoice === 'Rock' && computerChoice === 'Scissors' ) ||
                ( playerChoice === 'Paper' && computerChoice === 'Rock' ) ||
                ( playerChoice === 'Scissors' && computerChoice === 'Paper')) {
            return ('Win')
        }
        else  {
            return ('Loss')
        }  
    }  
}

document.addEventListener('DOMContentLoaded', () => {
    let rps  = new Rps
    let result = document.querySelector('.result')

    const rock = document.querySelector('.rock')
    const paper = document.querySelector('.paper')
    const scissors = document.querySelector('.scissors')

    rock.addEventListener('click', function() { 
        computerChoice = rps.computerChoice()
        result.innerHTML = rps.playGame('Rock',computerChoice)
    })

    paper.addEventListener('click', function() {
        computerChoice = rps.computerChoice() 
        result.innerHTML = rps.playGame('Paper',computerChoice)
    })
    
    scissors.addEventListener('click', function() {
        computerChoice = rps.computerChoice() 
        result.innerHTML = rps.playGame('Scissors',computerChoice)
    })
})