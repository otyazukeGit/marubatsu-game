import React from 'react'
import styled from 'styled-components'

type PaneType = {
	finish:boolean,
	msg: string
}

export const Pane = (props:PaneType) => {

	return (
		<BasePane finish={props.finish} className="BasePane">
			<FrontPane className="FrontPane">
				<Message className="Message">{props.msg}</Message>
			</FrontPane>
		</BasePane>
	)
}

const BasePane = styled.div<{finish:boolean}>`
	display: ${props => props.finish ? "block" : "none"};
	position: relative;
	margin: 0;
`
const FrontPane = styled.div`
	position: absolute;
	height: 80vh;
	/* height: 100%; */
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	/* background-color: #c1c0b9; */
	/* background-color: black;
	opacity: 0.5; */
	background-color: rgba(0,0,0, 0.5);  /*  */
	top: 0;
	left: 0;
	margin: 0;
`
const Message = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	width: 100%;
	/* background-color: black; */
	background-color: green;
	font-size: 32px;
	color: white;
`
