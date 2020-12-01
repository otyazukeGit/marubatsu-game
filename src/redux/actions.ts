export type SelectItemType = {type: 'selectItem', selectIndex: number, itemType: ''|'circle'|'cross'}
export type SetResultType = {type: 'setResult', msg: string}
export type SignInType = {type: 'signIn', userName: string}
export type SignOutType = {type: 'signOut'}
export type RetryGame = {type: 'retryGame'}

export type ActionType = SelectItemType | SetResultType | SignInType | SignOutType | RetryGame

export const selectItem = (selectIndex: number, itemType: ''|'circle'|'cross'):SelectItemType => {
	return {type: 'selectItem', selectIndex:selectIndex, itemType:itemType}
}
export const setResult = (msg: string):SetResultType => {
	return {type: 'setResult', msg:msg}
}
export const signIn = (userName: string):SignInType => {
	return {type: 'signIn', userName:userName}
}
export const signOut = ():SignOutType => {
	return {type: 'signOut'}
}
export const retryGame = ():RetryGame => {
	return {type: 'retryGame'}
}
