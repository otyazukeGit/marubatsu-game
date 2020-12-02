import React from 'react'
import Modal from 'react-modal'
import { ActionType } from '../redux/actions'
import { SimpleButton } from './SimpleButton'
import { closeModal } from '../redux/actions'

type Props = {
	dispatch: React.Dispatch<ActionType>,
	isOpen: boolean,
	msg: string
}

const customStyles = {
	content : {
		top        : '40%',
		left       : '40%',
		height     : '20%',
		width      : '20%',
		backgroundColor: "#f9f9f9",
	}
}

export const BasicModal:React.FC<Props> = (props) => {

	return (
		<Modal 
			isOpen={props.isOpen}
			onRequestClose={() => props.dispatch(closeModal())}
			style={customStyles}
		>
			{props.msg}
			<SimpleButton label={"OK"} onClick={() => props.dispatch(closeModal())}></SimpleButton>
		</Modal>
	)

}
