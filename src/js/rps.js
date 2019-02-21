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

        else if(playerChoice === 'Rock' && computerChoice === 'Scissors' ) {
            return 'Win'
        }

        else  {
            return 'Loss'
        }   
        
        
    }

      
 
}




// function computerChoice() {
//     let choices = ['Rock','Paper','Scissors']
//     let randomizer = Math.floor(Math.random() * 3)
//     return choices[randomizer]
// }
