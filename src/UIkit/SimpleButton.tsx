import React from 'react'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
	"button": {
		textTransform: "none"
	}
})

export const SimpleButton = (props:any) => {
	const classes = useStyles()
	return(
		<Button className={classes.button} aria-controls="simple-menu" aria-haspopup="true" onClick={() => props.onClick()}>
			{props.label}
		</Button>
	)
}
