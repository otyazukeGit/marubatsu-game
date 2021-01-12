import React, { ReactElement } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'

type Props = {
  width: number
  label: string
  onClick: () => void
}

const useStyles = makeStyles({
  button: (props: Props) => ({
    backgroundColor: '#4dd0e1',
    color: '#000',
    fontSize: 16,
    height: 48,
    marginButton: 16,
    marginRight: 20,
    width: props.width,
    textTransform: 'none',
  }),
})

export const PrimaryButton = (props: Props): ReactElement => {
  const classes = useStyles({ width: props.width } as Props)
  return (
    <Button
      className={classes.button}
      variant="contained"
      onClick={() => props.onClick()}
    >
      {props.label}
    </Button>
  )
}
