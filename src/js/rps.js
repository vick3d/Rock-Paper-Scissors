function Rps() {

   this.computerChoice = function () {
        let choices = ['Rock','Paper','Scissors']
        let randomizer = Math.floor(Math.random() * 3)
        return choices[randomizer]
    }

    this.playGame = function (playerChoice, computerChoice) {
        if(playerChoice === computerChoice) {
            return 'Draw'
        }
        else if(( playerChoice === 'Rock' && computerChoice === 'Scissors' ) ||
                ( playerChoice === 'Paper' && computerChoice === 'Rock' ) ||
                ( playerChoice === 'Scissors' && computerChoice === 'Paper')) {
            return 'Win'
        }
        else  {
            return 'Loss'
        }  
    }  
}