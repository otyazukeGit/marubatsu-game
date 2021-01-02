export type SelectItemType = {
  type: 'selectItem'
  selectIndex: number
  itemType: '' | 'circle' | 'cross'
}
export type SetResultType = {
  type: 'setResult'
  msg: string
  winner: 'USER' | 'CPU' | 'DRAW'
}
export type SignInType = { type: 'signIn'; userName: string }
export type SignOutType = { type: 'signOut' }
export type RetryGameType = { type: 'retryGame' }
export type CloseModalType = { type: 'closeModal' }
export type InputValidateSignUp = {
  type: 'inputValidateSignUp'
  item: 'top' | 'userName' | 'email' | 'password' | 'confirmPassword'
  msg: string
}
export type InputValidateSignIn = {
  type: 'inputValidateSignIn'
  item: 'top' | 'email' | 'password'
  msg: string
}

export type ActionType =
  | SelectItemType
  | SetResultType
  | SignInType
  | SignOutType
  | RetryGameType
  | CloseModalType
  | InputValidateSignUp
  | InputValidateSignIn

export const selectItem = (
  selectIndex: number,
  itemType: '' | 'circle' | 'cross'
): SelectItemType => {
  return { type: 'selectItem', selectIndex: selectIndex, itemType: itemType }
}
export const setResult = (
  msg: string,
  winner: 'USER' | 'CPU' | 'DRAW'
): SetResultType => {
  return { type: 'setResult', msg: msg, winner: winner }
}
export const signIn = (userName: string): SignInType => {
  return { type: 'signIn', userName: userName }
}
export const signOut = (): SignOutType => {
  return { type: 'signOut' }
}
export const retryGame = (): RetryGameType => {
  return { type: 'retryGame' }
}
export const closeModal = (): CloseModalType => {
  return { type: 'closeModal' }
}
export const inputValidateSignUp = (
  item: 'top' | 'userName' | 'email' | 'password' | 'confirmPassword',
  msg: string
): InputValidateSignUp => {
  return { type: 'inputValidateSignUp', item: item, msg: msg }
}
export const inputValidateSignIn = (
  item: 'top' | 'email' | 'password',
  msg: string
): InputValidateSignIn => {
  return { type: 'inputValidateSignIn', item: item, msg: msg }
}
