import React from 'react'
import {TextField} from '@material-ui/core'

export const TextInput = (props:any) => {
	let styles = {
		textFld: { width: 0}   //assign the width as your requirement
	}
	// console.log('styles: ', styles);
	// console.log('props.width: ', props.width);
	styles.textFld.width = props.width
	// console.log('styles.textFld: ', styles.textFld);
	
	return (
		<TextField
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
