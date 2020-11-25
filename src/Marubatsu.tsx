import React, {useEffect, useReducer, useState} from 'react'
// import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { initialState } from './redux/initialState'
import { reducer } from './redux/reducer'
import {selectItem, setResultMessage} from './redux/actions'
import {MarubatsuBox} from './MarubatsuBox'
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

export const Marubatsu:React.FC = () => {
	console.log('==========================================');
	const [state, dispatch] = useReducer(reducer, initialState)
	const selectCnt = state.selectedItems.filter(v => v !== '').length
	console.log('cnt: ', selectCnt);
	// console.log('state: ', state);
	const itemType = selectCnt % 2 === 0 ? 'circle' : 'cross'

	const choosePosition = (index: number) => {
		dispatch(selectItem(index, itemType))
	}

	// let resultMessage = 'a'
	useEffect(
		() => {
			console.log('useEffect()');
			console.log('itemType: ', itemType);
			let result
			// if(selectCnt > 0){
				// resultMessage = 'b'
				const checkItemType = selectCnt % 2 !== 0 ? 'circle' : 'cross'
				result = checkResult(state.selectedItems, checkItemType)
				// result = checkResult(state.selectedItems, itemType)
				console.log('result: ', result);
				// const player = itemType === 'circle' ? 'Player 1' : 'Player 2'
				const player = checkItemType === 'circle' ? 'Player 1' : 'Player 2'
				// if(result) alert(player + ' Won!')
				if(result) dispatch(setResultMessage(player + ' Won!'))
			// }
		}
		// , [selectCnt, state.selectedItems, itemType, dispatch, setResultMessage]  // OK all
		// , [           state.selectedItems, itemType, dispatch, setResultMessage]  // OK 1
		// , [selectCnt,                      itemType, dispatch, setResultMessage]  // OK 1
		// , [selectCnt, state.selectedItems,           dispatch, setResultMessage]  // OK 1
		// , [selectCnt, state.selectedItems, itemType,           setResultMessage]  // OK 1
		// , [selectCnt, state.selectedItems, itemType, dispatch                  ]  // OK 1
		// , [           state.selectedItems,           dispatch, setResultMessage]  // NG 2
		// , [selectCnt, state.selectedItems,                     setResultMessage]  // OK 2
		// , [selectCnt, state.selectedItems                                      ]  // OK 3 
		// , [           state.selectedItems,                     setResultMessage]  // NG 3  -> selectCnt 必須っぽい
		, [selectCnt                                      ]  // OK 4 selectCntだけで検知. 確かにレンダリングで変わっているけど。state変更拾えていない？
		)

	return (
		<Container>
			{state.resultMessaage}
			<Area>
				{state.selectedItems.map((item:string, index:number) => (
					// <Box key={index} onClick={() => setSelectedItems(prev => prev.splice(index,1,1))}>{item == 1 ? '○' : '✕'}</Box>
					<MarubatsuBox 
						key={index} 
						index={index}
						// onClick={() => dispatch(selectItem(index, itemType))
						// dispatch={dispatch}
						choosePosition={choosePosition}
						selected={true}
					>
						{item}
					</MarubatsuBox>
				))}
			</Area>
		</Container>
	)
}

const positionNumbers = [1, 2, 4, 8, 16, 32, 64, 128, 256]

const checkResult = (selectedItems: string[], itemType: string) => {
	console.log('checkResult() ----------------');
	console.log('selectedItems: ', selectedItems);
	console.log('itemType: ', itemType);

	const itemValue = itemType === 'circle' ? '○' : '✕'
	const selectedPosition = selectedItems.map((v, i) => v === itemValue ? positionNumbers[i] : 0)
	console.log('selectedPosition: ', selectedPosition);

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

const toggleItem = (selectedItems:any, setSelectedItems:any, index:number) => {
	let newItems = selectedItems
	console.log('newItems: ', newItems);
	newItems.splice(index, 1, 1)
	console.log('newItems: ', newItems);
	setSelectedItems(newItems)
}

// const BoxField = (props:any) => {
// 	return <div></div>
// }

const Container = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	margin: 0 auto;
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
`

