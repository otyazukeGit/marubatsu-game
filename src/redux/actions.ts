// import {initialStateType} from './initialState'

export type SelectItemType = {type: 'selectItem', selectIndex: number, itemType: ''|'circle'|'cross'}
export type SetResultMessage = {type: 'setResultMessage', msg: string}

export const selectItem = (selectIndex: number, itemType: ''|'circle'|'cross'):SelectItemType => {
	return {type: 'selectItem', selectIndex:selectIndex, itemType:itemType}
}
export const setResultMessage = (msg: string):SetResultMessage => {
	return {type: 'setResultMessage', msg:msg}
}
