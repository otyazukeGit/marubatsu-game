import {initialStateType} from './initialState'
// import {SelectItemType, SetResultType, SignInType, SignOutType} from './actions'
import {ActionType} from './actions'



export const reducer = (state: initialStateType, action: ActionType) => {
	let newUser
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

		case 'setResult':
			return Object.assign({}, state, {...state, resultMessaage:action.msg, finish:true})

		case 'signIn':
			newUser = state.user
			newUser.auth = true;
			newUser.userName = action.userName
			return Object.assign({}, state, {...state, user:newUser})

		case 'signOut':
			newUser = state.user
			newUser.auth = false;
			newUser.userName = ''
			return Object.assign({}, state, {...state, user:newUser})

		default:
			return state
	}
}
