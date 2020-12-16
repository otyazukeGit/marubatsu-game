import {defaultInputValidate, defaultState, initialStateType} from './initialState'
import {ActionType} from './actions'
import {defaultItems} from './initialState'

export const reducer = (state: initialStateType, action: ActionType) => {
	let newUser
	let newValidateItem
	switch(action.type){
		case 'selectItem':
			console.log('selectItem');
			const newItem = state.selectedItems[action.selectIndex]
			newItem.selected = true
			newItem.itemType = action.itemType
			newItem.item = action.itemType === 'circle' ? '○' : '✕'
			const newSelectedItems = state.selectedItems
			newSelectedItems.splice(action.selectIndex,1,newItem)
			return Object.assign({}, state, {...state, selectedItems:newSelectedItems})

		case 'setResult':
			console.log('setResult');
			return Object.assign({}, state, {...state, resultMessaage:action.msg, finish:true})

		case 'signIn':
			console.log('signIn');
			newUser = state.user
			newUser.auth = true;
			newUser.userName = action.userName
			return Object.assign({}, state, {...state, user:newUser, inputValidate: Object.assign({}, defaultInputValidate)} )

		case 'signOut':
			console.log('signOut');
			const newState = Object.assign({}, JSON.parse(JSON.stringify(defaultState)), {isOpen: true})
			return Object.assign({}, newState)

		case 'retryGame':
			return Object.assign({}, state, {...state, resultMessaage:'', finish:false, selectedItems:JSON.parse(JSON.stringify(defaultItems)) })

		case 'closeModal':
			return Object.assign({}, state, {...state, isOpen:false })
	
		case 'inputValidateSignUp':
			newValidateItem = Object.assign({}, JSON.parse(JSON.stringify(defaultInputValidate)) )  // clear validation states.
			newValidateItem.signUp[action.item].error = true
			newValidateItem.signUp[action.item].message = action.msg
			return Object.assign({}, state, {...state, inputValidate:newValidateItem })
	
		case 'inputValidateSignIn':
			newValidateItem = Object.assign({}, JSON.parse(JSON.stringify(defaultInputValidate)) )  // clear validation states.
			newValidateItem.signIn[action.item].error = true
			newValidateItem.signIn[action.item].message = action.msg
			return Object.assign({}, state, {...state, inputValidate:newValidateItem })
	
		default:
			return state
	}
}
