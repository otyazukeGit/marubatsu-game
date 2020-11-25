import React, { Dispatch, FC } from 'react'
import styled, {css} from 'styled-components'
// import {selectItem, SelectItemType} from './redux/actions'

type Props = {
	key: number,
	index: number,
	// dispatch: React.Dispatch<SelectItemType>,
	choosePosition:(index: number) => void,
	selected: boolean,
	// children: string,  // React.FC include children?: React.ReactNode
}

export const MarubatsuBox:React.FC<Props> = (props) => {

	return (
	<Box selected={true} onClick={() => props.choosePosition(props.index)}>
		{props.children}
	</Box>
	)
}

// const Container = styled.div<{ visibleWeek: boolean}>`
// 	display: ${props => ( props.visibleWeek ? 'flex' : 'none!important' )};
const Box = styled.div<{selected: boolean}>`
	display: flex;
	border: solid 1px #2792c3;
	justify-content: center;
	align-items: center;
	font-size: 32px;
	${props => props.selected && css`
		&:hover {
			background-color: #c1e4e9;
		}
	`}

`
