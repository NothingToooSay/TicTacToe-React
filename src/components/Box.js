import React from 'react'
import style from '../styles/modules/Box.module.css'

function Box(props) {
	return (
		<div className={style.box} onClick={props.onClick}>
			{props.value}
		</div>
	)
}

export default Box
