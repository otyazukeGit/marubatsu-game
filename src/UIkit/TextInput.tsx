import React from 'react'
import {TextField} from '@material-ui/core'

type Props = {
	errorCondition: boolean,
	helperText: string,
	fullWidth: boolean,
	width: number,
	label:string,
	multiline: boolean,
	required: boolean,
	rows: number,
	value: string,
	type: string,
	// onChange: ({ target: { value: React.SetStateAction<string>; }; })
	onChange: (e: { target: { value: React.SetStateAction<string> } }) => void
}

export const TextInput:React.FC<Props> = (props) => {
	let styles = {
		textFld: { width: 0}   //assign the width as your requirement
	}
	// console.log('styles: ', styles);
	// console.log('props.width: ', props.width);
	styles.textFld.width = props.width
	// console.log('styles.textFld: ', styles.textFld);
	
	return (
		<TextField
			error={props.errorCondition}
			helperText={props.helperText}
			fullWidth={props.fullWidth}
			style={styles.textFld}
			label={props.label}
			margin="dense"
			multiline={props.multiline}
			required={props.required}
			rows={props.rows}
			value={props.value}
			type={props.type}
			onChange={props.onChange}
		/>
	)

}
