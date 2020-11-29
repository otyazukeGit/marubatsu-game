import React from 'react'
import styled, {css} from 'styled-components'
import {Colors} from './Colors'

type Props = {
	key: number,
	index: number,
	choosePosition:(selected: boolean, index: number) => void,
	selected: boolean,
	itemType: ''|'circle'|'cross'
}

export const MarubatsuBox:React.FC<Props> = (props) => {

	return (
	<Box 
		selected={props.selected} 
		bg_color={Colors[props.itemType]}
		onClick={() => props.choosePosition(props.selected, props.index)}>
		{props.children}
	</Box>
	)
}

const Box = styled.div<{selected: boolean, bg_color: string}>`
	display: flex;
	background-color: ${props => props.bg_color};
	border: solid 1px black;
	justify-content: center;
	align-items: center;
	font-size: 32px;
	${props => props.selected ? css`
		&:hover {
			cursor: not-allowed;
		}
	` : `
		&:hover {
			background-color: #c1e4e9;
			cursor: pointer;
		}
	`}
`


