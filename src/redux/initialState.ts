import json5 from "json5"

export type initialStateType = {
	user: {auth: boolean , userName: string},
	resultMessaage: string,
	finish: boolean,
	selectedItems: SelectItemsType[],
	isOpen: boolean
}
export type SelectItemsType = {
	index:number,
	selected:boolean,
	itemType:''|'circle'|'cross',
	item:string
}

export const defaultItems: SelectItemsType[] = [
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

export const initialState: initialStateType = {
	user: {auth: false , userName: ''},
	resultMessaage: '',
	finish: false,
	// selectedItems: Array.from(defaultItems)
	// selectedItems: [ ...defaultItems ]
	// selectedItems: defaultItems.map(v => v)
	// selectedItems: defaultItems.concat()
	selectedItems: JSON.parse(JSON.stringify(defaultItems)),
	isOpen: false
}


