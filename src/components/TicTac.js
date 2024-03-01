import React, { useState } from 'react'
import style from '../styles/modules/TicTac.module.css'
import Box from './Box'
import PlayAgainBtn from './PlayAgainBtn'

function TicTac() {
	// State for storing the state of the cells of the playing field (values: 'X', 'O', null)
	const [input, setInput] = useState(Array(9).fill(null))
	// State to track current player (true: X, false: O)
	const [isXTurn, setIsXTurn] = useState(true)

	// Function to determine the winner
	const checkWinner = () => {
		const winnerIs = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]

		// Checking for a winner
		for (let value of winnerIs) {
			const [a, b, c] = value
			if (input[a] !== null && input[a] === input[b] && input[a] === input[c]) {
				return input[a] // Return of the winner
			}
		}
		return false // If there is no winner, false is returned
	}

	// Checking for a winner call a function
	const winner = checkWinner()

	// Function to determine a tie
	const checkTie = () => {
		if (input.every(value => value !== null)) {
			return <p className={style.tied}>Match Tied</p>
		}
	}

	const tie = checkTie()

	// Function for processing a click on a cell of the playing field
	function handleOnClick(index) {
		if (input[index] !== null || winner || tie) {
			// If the cell is already filled or there is a winner or a tie, nothing happens
			return
		}

		const updatedInput = [...input] // A copy of the current game state
		updatedInput[index] = isXTurn ? 'X' : 'O' // Setting a value to a cell
		setInput(updatedInput) // Game State Update
		setIsXTurn(!isXTurn) // Change current player
	}

	function handleReset() {
		// Resetting the values ​​of the playing field cells
		setInput(Array(9).fill(null))
	}
	return (
		<div className={style.container}>
			<div className={style.header}>Tic Tac Toe</div>

			{winner && !tie ? (
				<p className={style.win}>Congradulations! Player {winner} win</p>
			) : tie ? (
				<p className={style.tie}>OOPS! Match Tied</p>
			) : (
				<p className={style.player}>Current Player is: {isXTurn ? 'X' : 'O'}</p>
			)}

			<div className={style.board}>
				<div className={style.box1}>
					<Box onClick={() => handleOnClick(0)} value={input[0]} />
				</div>
				<div className={style.box2}>
					<Box onClick={() => handleOnClick(1)} value={input[1]} />
				</div>
				<div className={style.box3}>
					<Box onClick={() => handleOnClick(2)} value={input[2]} />
				</div>
				<div className={style.box4}>
					<Box onClick={() => handleOnClick(3)} value={input[3]} />
				</div>
				<div className={style.box5}>
					<Box onClick={() => handleOnClick(4)} value={input[4]} />
				</div>
				<div className={style.box6}>
					<Box onClick={() => handleOnClick(5)} value={input[5]} />
				</div>
				<div className={style.box7}>
					<Box onClick={() => handleOnClick(6)} value={input[6]} />
				</div>
				<div className={style.box8}>
					<Box onClick={() => handleOnClick(7)} value={input[7]} />
				</div>
				<div className={style.box9}>
					<Box onClick={() => handleOnClick(8)} value={input[8]} />
				</div>
			</div>

			{(winner || tie) && <PlayAgainBtn handleReset={handleReset} />}
		</div>
	)
}

export default TicTac
