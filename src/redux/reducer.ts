import {initialStateType} from './initialState'
import {SelectItemType, SetResultMessage} from './actions'

type ActionType = SelectItemType | SetResultMessage  // | .. | ..


export const reducer = (state: initialStateType, action: ActionType) => {
	switch(action.type){
		case 'selectItem':
			const newItem = state.selectedItems[action.selectIndex]
			newItem.selected = true
			newItem.itemType = action.itemType
			newItem.item = action.itemType === 'circle' ? '○' : '✕'
			const newSelectedItems = state.selectedItems
			newSelectedItems.splice(action.selectIndex,1,newItem)
			// console.log('newSelectedItem: ', newSelectedItem);
			return Object.assign({}, state, {...state, selectedItems:newSelectedItems})

		case 'setResultMessage':
			return Object.assign({}, state, {...state, resultMessaage:action.msg})

		default:
			return state
	}
}
