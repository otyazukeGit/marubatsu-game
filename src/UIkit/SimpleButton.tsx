import React, { ReactElement } from 'react'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/styles'

type Props = {
	label: string,
	onClick: () => void
}

const useStyles = makeStyles({
	"button": {
		textTransform: "none",
		marginRight: 15,
		fontWeight: "bold"
	}
})

export const SimpleButton = (props:Props):ReactElement => {
	const classes = useStyles()
	return(
		<Button className={classes.button} aria-controls="simple-menu" aria-haspopup="true" onClick={() => props.onClick()}>
			{props.label}
		</Button>
	)
}
