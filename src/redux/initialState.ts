export type initialStateType = {
	user: {auth: boolean , userName: string},
	resultMessaage: string,
	finish: boolean,
	selectedItems: SelectItemsType[]
}
export type SelectItemsType = {
	index:number,
	selected:boolean,
	itemType:''|'circle'|'cross',
	item:string
}

export const initialState: initialStateType = {
	user: {auth: false , userName: ''},
	resultMessaage: '',
	finish: false,
	selectedItems: [
		{index:0 , selected:false, itemType:'', item:''},
		{index:1 , selected:false, itemType:'', item:''},
		{index:2 , selected:false, itemType:'', item:''},
		{index:3 , selected:false, itemType:'', item:''},
		{index:4 , selected:false, itemType:'', item:''},
		{index:5 , selected:false, itemType:'', item:''},
		{index:6 , selected:false, itemType:'', item:''},
		{index:7 , selected:false, itemType:'', item:''},
		{index:8 , selected:false, itemType:'', item:''},
	]
}
