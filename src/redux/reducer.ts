import {initialStateType} from './initialState'
import {SelectItem, SetResultMessage} from './actions'

type actionType = SelectItem | SetResultMessage  // | .. | ..


export const reducer = (state: initialStateType, action: actionType) => {
	switch(action.type){
		case 'selectItem':
			const itemValue = action.itemType === 'circle' ? '○' : '✕'
			const newSelectedItems = state.selectedItems
			newSelectedItems.splice(action.selectIndex,1,itemValue)
			// console.log('newSelectedItems: ', newSelectedItems);
			return Object.assign({}, state, {...state, selectedItems:newSelectedItems})
		case 'setResultMessage':
			return Object.assign({}, state, {...state, resultMessaage:action.msg})

		default:
			return state
	}
}
