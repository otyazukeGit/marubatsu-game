import React, {useEffect} from 'react'
import styled from 'styled-components'
import {ActionType} from '../redux/actions'
import {initialStateType, SelectItemsType} from '../redux/initialState'
import {selectItem, setResult, retryGame} from '../redux/actions'
import {MarubatsuBox} from './MarubatsuBox'
import {Pane} from '../UIkit/Pane'

type Props = {
	state: initialStateType,
	dispatch: React.Dispatch<ActionType>
}

export const Marubatsu:React.FC<Props> = (props) => {
	const selectCnt = props.state.selectedItems.filter(v => v.item !== '').length
	const itemType = selectCnt % 2 === 0 ? 'circle' : 'cross'
	
	const choosePosition = (selected: boolean, index: number) => {
		if(selected) return  // It has already bean selected.
		props.dispatch(selectItem(index, itemType))
	}

	const reset = () => {
		props.dispatch(retryGame())
	}
	
	useEffect(
		() => {
			const checkItemType = selectCnt % 2 !== 0 ? 'circle' : 'cross'
			const result = checkResult(props.state.selectedItems, checkItemType)
			const player = checkItemType === 'circle' ? props.state.user.userName : 'CPU'
			if(result) {
				props.dispatch(setResult(player + ' Won!', checkItemType == 'circle' ? 'USER' : 'CPU'))
			} else {
				if(selectCnt == 9){
					props.dispatch(setResult('Draw!', 'DRAW'))
				} else if (itemType === 'cross'){
					let choice = -1
					while(choice < 0){
						let random = Math.round(Math.random() * 10)
						if(random == 10) random = 0
						if(random !== 9 && props.state.selectedItems[random].selected === false) choice = random
					}
					choosePosition(false, choice)
				}	
			}
		}
		, [selectCnt]
	)

	return (
		<Main>
			<Pane 
				finish={props.state.finish} 
				msg={props.state.resultMessaage} 
				reset={() => reset()}
			/>
			<Container className="Container">
				<h3>Results</h3>
				<GameRecords>
					{props.state.gameRecord.map((record:{winner:'USER'|'CPU'|'DRAW', count:number}) => 
						<Record key={record.winner}>
							<div>{record.winner == 'USER' ? props.state.user.userName : record.winner}</div>
							<div>{'：' + record.count}</div>
						</Record>
					)}
				</GameRecords>
				<div>please click any one Box.</div>
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
		</Main>
	)
}

const checkResult = (selectedItems: SelectItemsType[], itemType: string) => {
	const positionNumbers = [1, 2, 4, 8, 16, 32, 64, 128, 256]
	const itemValue = itemType === 'circle' ? '◯' : '✕'
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

const Main = styled.main`
	@media screen and (min-width:800px){
		width: 80vw;
	}
`
const Container = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
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
`
const Record = styled.div`
	display: flex;
	margin-right: 20px;
`
const GameRecords = styled.div`
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: space-around;
	width: 300px;
	margin-bottom:30px;
`

