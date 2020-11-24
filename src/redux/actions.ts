// import {initialStateType} from './initialState'

export type SelectItem = {type: 'selectItem', selectIndex: number, itemType: string}
export type SetResultMessage = {type: 'setResultMessage', msg: string}

export const selectItem = (selectIndex: number, itemType: string):SelectItem => {
	return {type: 'selectItem', selectIndex:selectIndex, itemType:itemType}
}
export const setResultMessage = (msg: string):SetResultMessage => {
	return {type: 'setResultMessage', msg:msg}
}
