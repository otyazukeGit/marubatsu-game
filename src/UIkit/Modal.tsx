import React from 'react'
import Modal from 'react-modal'
import { ActionType } from '../redux/actions'
import { SimpleButton } from './SimpleButton'
import { closeModal } from '../redux/actions'
import styled from 'styled-components'

type Props = {
	dispatch: React.Dispatch<ActionType>,
	isOpen: boolean,
	msg: string
}

const customStyles = {
	content : {
		top        : '40%',
		left       : '40%',
		height     : '70px',
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
			ariaHideApp={false}
		>
			<Container>
				<Message>{props.msg}</Message>
				<SimpleButton label={"OK"} onClick={() => props.dispatch(closeModal())}></SimpleButton>
			</Container>
		</Modal>
	)

}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
`
const Message = styled.div`
	margin: 0 auto;
	margin-bottom: 10px;
`
