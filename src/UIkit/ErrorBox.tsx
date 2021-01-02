import React from 'react'
import Box from '@material-ui/core/Box'

type Props = { msg:string }
// const useStyles = makeStyles({
// 	"box": {
// 		textTransform: "none",
// 		marginRight: 15,
// 		fontWeight: "bold"
// 	}
// })

export const ErrorBox:React.FC<Props> = (props) => {
	// const styles = {}
	return (
		<Box 
			color="error.main"
			// bgcolor="error.main"
			// style={useStyles.box}
		>
			{props.msg}
		</Box>
	)
}
