import React, {useEffect, useReducer, useState} from 'react'
import styled from 'styled-components'
import { defaultItems } from './redux/initialState'
import {ActionType} from './redux/actions'
import {initialStateType, SelectItemsType} from './redux/initialState'
import {selectItem, setResult, retryGame} from './redux/actions'
import {MarubatsuBox} from './MarubatsuBox'
import {Pane} from './Pane'

type Props = {
	state: initialStateType,
	dispatch: React.Dispatch<ActionType>
}

export const Marubatsu:React.FC<Props> = (props) => {
	const selectCnt = props.state.selectedItems.filter(v => v.item !== '').length
	// console.log('cnt: ', selectCnt);
	// console.log('state.finish: ', props.state.finish);
	const itemType = selectCnt % 2 === 0 ? 'circle' : 'cross'
	
	const choosePosition = (selected: boolean, index: number) => {
		if(selected) return  // It has already bean selected.
		console.log('choosePosition - itemType: ', itemType);
		props.dispatch(selectItem(index, itemType))
	}

	const reset = () => {
		props.dispatch(retryGame())
	}
	
	useEffect(
		() => {
			let result
			const checkItemType = selectCnt % 2 !== 0 ? 'circle' : 'cross'
			result = checkResult(props.state.selectedItems, checkItemType)
			const player = checkItemType === 'circle' ? 'Player 1' : 'Player 2'
			if(result) {
				props.dispatch(setResult(player + ' Won!'))
			} else if (itemType === 'cross'){
				let choice:number = -1
				while(choice < 0){
					let random = Math.round(Math.random() * 10)
					console.log('random: ', random);
					if(random == 10) random = 0
					if(random !== 9 && props.state.selectedItems[random].selected === false) choice = random
				}
				console.log('choice: ', choice);
				choosePosition(false, choice)
			}
		}
		, [selectCnt]
	)

	return (
		<div>
			<Pane 
				finish={props.state.finish} 
				msg={props.state.resultMessaage} 
				reset={() => reset()}
			/>
			<Container className="Container">

				{/* {state.resultMessaage} */}
				<Area>
					{props.state.selectedItems.map((items:SelectItemsType, index:number) => (
						<MarubatsuBox 
							key={index} 
							index={index}
							choosePosition={choosePosition}
							selected={items.selected}
							itemType={items.itemType}
						>
							{items.item}
						</MarubatsuBox>
					))}
				</Area>
			</Container>
		</div>
	)
}

const checkResult = (selectedItems: SelectItemsType[], itemType: string) => {
	const positionNumbers = [1, 2, 4, 8, 16, 32, 64, 128, 256]
	const itemValue = itemType === 'circle' ? '○' : '✕'
	const selectedPosition = selectedItems.map((v, i) => v.item === itemValue ? positionNumbers[i] : 0)

	// rows
	if(selectedPosition[0] + selectedPosition[1] + selectedPosition[2] == 7) return true
	if(selectedPosition[3] + selectedPosition[4] + selectedPosition[5] == 56) return true
	if(selectedPosition[6] + selectedPosition[7] + selectedPosition[8] == 448) return true
	// columns
	if(selectedPosition[0] + selectedPosition[3] + selectedPosition[6] == 73) return true
	if(selectedPosition[1] + selectedPosition[4] + selectedPosition[7] == 146) return true
	if(selectedPosition[2] + selectedPosition[5] + selectedPosition[8] == 292) return true
	// diagonal
	if(selectedPosition[0] + selectedPosition[4] + selectedPosition[8] == 273) return true
	if(selectedPosition[6] + selectedPosition[4] + selectedPosition[2] == 84) return true
	return false
}

const Container = styled.div`
	display:flex;
	flex-direction: column;
	/* flex-direction: row; */
	align-items: center;
	justify-content: center;
	min-height: 80vh;
	margin: auto auto;
`
const Area = styled.div`
	display: grid;
	grid-template:
	" area area area" 100px
	" area area area" 100px
	" area area area" 100px
	/ 100px 100px 100px
	;
	/* grid-gap: 1px; */
	/* min-height: 100vh; */
`

