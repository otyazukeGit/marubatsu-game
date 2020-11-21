import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';

export const Header = () => {
	const history = useHistory()
	return (
		<div>
			<h1>Marubatu Game</h1>
			<HeaderArea>
				<Button aria-controls="simple-menu" aria-haspopup="true" onClick={() => history.push('/')}>TOP</Button>
				<Button aria-controls="simple-menu" aria-haspopup="true" onClick={() => history.push('/signup')}>Sign Up</Button>
				<Button aria-controls="simple-menu" aria-haspopup="true" onClick={() => history.push('/marubatsu')}>Marubatsu</Button>
			</HeaderArea>
		</div>
	)
}

const HeaderArea = styled.div`
	width: 100%;
	display: flex;
	border-bottom: solid 2px skyblue;
`
// const Link = styled.a``
