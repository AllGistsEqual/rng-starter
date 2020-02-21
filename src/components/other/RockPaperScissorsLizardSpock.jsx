import React, { useState } from 'react'
import { Text, Button } from 'react-native'

const RockPaperScissorsLizardSpock = () => {
    const [score, setScore] = useState({ player: 0, opponent: 0, draw: 0 })
    const [turn, setTurn] = useState('❓ VS ❓')
    const [message, setMessage] = useState('Let\'s play')

    const hands = [
        { icon: '✊', name: 'Rock' },
        { icon: '✋', name: 'Paper' },
        { icon: '✌️', name: 'Scissors' },
        { icon: '👌', name: 'Lizard' },
        { icon: '🖖', name: 'Spock' },
    ]

    const getOpponentChoice = () => hands[Math.floor(Math.random() * hands.length)]

    const getWinner = (playerChoice, opponentChoice) => {
        const winningScheme = {
            Rock: ['Scissors', 'Lizard'],
            Scissors: ['Paper', 'Lizard'],
            Paper: ['Rock', 'Spock'],
            Lizard: ['Paper', 'Spock'],
            Spock: ['Rock', 'Scissors'],
        }

        if (playerChoice === opponentChoice) {
            setScore({ ...score, draw: score.draw + 1 })
            return 'Draw'
        }

        if (winningScheme[playerChoice].indexOf(opponentChoice) !== -1) {
            setScore({ ...score, player: score.player + 1 })
            return 'Victory'
        }

        setScore({ ...score, opponent: score.opponent + 1 })
        return 'Defeat'
    }

    const handleChoice = (choice) => {
        const opponent = getOpponentChoice()
        const result = getWinner(choice.name, opponent.name)
        setTurn(`${choice.icon} VS ${opponent.icon}`)
        setMessage(result)
    }

    return (
        <>
            <Text>{`Score Player: ${score.player} | Opponent: ${score.opponent} | Draw: ${score.draw} | `}</Text>

            <Text style={{ fontSize: 42, marginTop: 20 }}>{turn}</Text>

            <Text style={{ fontSize: 23, marginBottom: 20 }}>{message}</Text>

            <Text>Choose your Hand:</Text>

            {hands.map((hand) => (
                <Button key={hand.name} title={`${hand.icon} ${hand.name}`} onPress={() => handleChoice(hand)} />
            ))}
        </>
    )
}

export default RockPaperScissorsLizardSpock
