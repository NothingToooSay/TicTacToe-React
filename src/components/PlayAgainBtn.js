import React from 'react'
import style from '../styles/modules/PlayAgainBtn.module.css'

function PlayAgainBtn(props) {
	return (
		<div className={style.playAgain}>
			<button className={style.playBtn} onClick={props.handleReset}>
				Play Again
			</button>
		</div>
	)
}

export default PlayAgainBtn
