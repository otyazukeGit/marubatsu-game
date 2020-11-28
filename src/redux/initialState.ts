export type initialStateType = {
	resultMessaage: string,
	// selectedItems: string[]
	selectedItems: SelectItemsType[]
}
export type SelectItemsType = {index:number , selected:boolean, itemType:''|'circle'|'cross', item:string}

export const initialState: initialStateType = {
	resultMessaage: '',
	// selectedItems: ['','','' , '','','' , '','','']
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
