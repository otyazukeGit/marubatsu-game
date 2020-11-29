export type SelectItemType = {type: 'selectItem', selectIndex: number, itemType: ''|'circle'|'cross'}
export type SetResultType = {type: 'setResult', msg: string}

export const selectItem = (selectIndex: number, itemType: ''|'circle'|'cross'):SelectItemType => {
	return {type: 'selectItem', selectIndex:selectIndex, itemType:itemType}
}
export const setResult = (msg: string):SetResultType => {
	return {type: 'setResult', msg:msg}
}
