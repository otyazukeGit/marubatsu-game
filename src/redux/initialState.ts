type ValidateStateType = { error: boolean; message: string }
export const defaultValdateState: ValidateStateType = {
  error: false,
  message: '',
}

export type SelectItemsType = {
  index: number
  selected: boolean
  itemType: '' | 'circle' | 'cross'
  item: string
}

export type InputValidateType = {
  signUp: InputSignUpType
  signIn: InputSignInType
}

export type InputSignUpType = {
  top: ValidateStateType
  userName: ValidateStateType
  email: ValidateStateType
  password: ValidateStateType
  confirmPassword: ValidateStateType
}
export const defaultInputSignUp: InputSignUpType = {
  top: defaultValdateState,
  userName: defaultValdateState,
  email: defaultValdateState,
  password: defaultValdateState,
  confirmPassword: defaultValdateState,
}
export type InputSignInType = {
  top: ValidateStateType
  email: ValidateStateType
  password: ValidateStateType
}
export const defaultInputSignIn: InputSignInType = {
  top: defaultValdateState,
  email: defaultValdateState,
  password: defaultValdateState,
}
export const defaultInputValidate: InputValidateType = {
  signIn: Object.assign({}, defaultInputSignIn),
  signUp: Object.assign({}, defaultInputSignUp),
}

export const defaultItems: SelectItemsType[] = [
  { index: 0, selected: false, itemType: '', item: '' },
  { index: 1, selected: false, itemType: '', item: '' },
  { index: 2, selected: false, itemType: '', item: '' },
  { index: 3, selected: false, itemType: '', item: '' },
  { index: 4, selected: false, itemType: '', item: '' },
  { index: 5, selected: false, itemType: '', item: '' },
  { index: 6, selected: false, itemType: '', item: '' },
  { index: 7, selected: false, itemType: '', item: '' },
  { index: 8, selected: false, itemType: '', item: '' },
]

export type initialStateType = {
  user: { auth: boolean; userName: string }
  resultMessaage: string
  finish: boolean
  gameRecord: [
    { winner: 'USER'; count: number },
    { winner: 'CPU'; count: number },
    { winner: 'DRAW'; count: number }
  ]
  selectedItems: SelectItemsType[]
  isOpen: boolean
  inputValidate: InputValidateType
}

export const defaultState: initialStateType = {
  user: { auth: false, userName: '' },
  resultMessaage: '',
  finish: false,
  gameRecord: [
    { winner: 'USER', count: 0 },
    { winner: 'CPU', count: 0 },
    { winner: 'DRAW', count: 0 },
  ],
  selectedItems: JSON.parse(JSON.stringify(defaultItems)),
  isOpen: false,
  inputValidate: JSON.parse(JSON.stringify(defaultInputValidate)),
}

export const initialState: initialStateType = JSON.parse(
  JSON.stringify(defaultState)
)
