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