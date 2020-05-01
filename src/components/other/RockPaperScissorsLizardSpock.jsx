import React, { useState } from 'react'
import { Text, ImageBackground, StyleSheet } from 'react-native'
import background from '../../../assets/game_background.png'
import IconButton from '../global/ui/IconButton'

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
            <Text>{`Player: ${score.player} | Draw: ${score.draw} | Opponent: ${score.opponent}`}</Text>

            <Text style={{ fontSize: 42, marginTop: 20 }}>{turn}</Text>

            <Text style={{ fontSize: 23, marginBottom: 20 }}>{message}</Text>

            <Text>Choose your Hand:</Text>

            <ImageBackground
                source={background}
                style={styles.imageBackground}
            >
                {hands.map((hand) => (
                    <IconButton
                        key={hand.name}
                        icon={hand.icon}
                        size={42}
                        customStyles={{
                            ...styles.hands,
                            ...styles[`hand${hand.name}`],
                        }}
                        onPress={() => handleChoice(hand)}
                    />
                ))}
            </ImageBackground>

        </>
    )
}

const diameter = 380
const circleRadius = 40

const styles = StyleSheet.create({
    imageBackground: {
        width: diameter,
        height: diameter,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    hands: {
        position: 'absolute',
        width: circleRadius * 2,
        height: circleRadius * 2,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    handRock: {
        top: diameter * 0.233 - circleRadius,
        left: diameter / 2 - circleRadius,
    },
    handPaper: {
        top: diameter * 0.445 - circleRadius,
        left: diameter * 0.223 - circleRadius,
    },
    handScissors: {
        bottom: diameter * 0.237 - circleRadius,
        left: diameter * 0.328 - circleRadius,
    },
    handLizard: {
        top: diameter * 0.445 - circleRadius,
        right: diameter * 0.223 - circleRadius,
    },
    handSpock: {
        bottom: diameter * 0.237 - circleRadius,
        right: diameter * 0.328 - circleRadius,
    },
})

export default RockPaperScissorsLizardSpock
