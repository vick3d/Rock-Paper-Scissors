const { Rps } = require('../spec.helper')

describe('Rock Paper Scissors', () => {
    let rps = new Rps   
    const choices = ["Rock","Paper","Scissors"]

    it('computer is expected to make a choice', () => {
        expect(rps.computerChoice()).to.be.oneOf(choices)
    })

    let playerChoice1 = choices[0]
    let playerChoice2 = choices[1]
    let playerChoice3 = choices[2]
    
    it('Player chooses Rock and computer choice rock', () => {
        expect(rps.playGame(playerChoice1, "Rock")).to.equal("Draw")
    })

    it('Player choice Rock and computer choice Scissors', () => {
        expect(rps.playGame(playerChoice1, "Scissors")).to.equal("Win")
    })

    it('Player choice Rock and computer choice Paper', () => {
        expect(rps.playGame(playerChoice1, "Paper")).to.equal("Loss")
    })

    it('Player choice Paper and computer choice Paper', () => {
        expect(rps.playGame(playerChoice2, "Paper")).to.equal("Draw")
    })

    it('Player choice Paper and computer choice Rock', () => {
        expect(rps.playGame(playerChoice2, "Rock")).to.equal("Win")
    })

    it('Player choice Paper and computer choice Scissors', () => {
        expect(rps.playGame(playerChoice2, "Scissors")).to.equal("Loss")
    })

    it('Player choice Scissors and computer choice Scissors', () => {
        expect(rps.playGame(playerChoice3, "Scissors")).to.equal("Draw")
    })

    it('Player choice Scissors and computer choice Paper', () => {
        expect(rps.playGame(playerChoice3, "Paper")).to.equal("Win")
    })

    it('Player choice Scissors and computer choice Rock', () => {
        expect(rps.playGame(playerChoice3, "Rock")).to.equal("Loss")
    })

        
})