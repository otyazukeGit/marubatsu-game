import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';

export const Header = () => {
	const history = useHistory()
	return (
		<div>
			<HeaderArea>
				<Button aria-controls="simple-menu" aria-haspopup="true" onClick={() => history.push('/')}>TOP</Button>
			</HeaderArea>
			<h1>Marubatu Game</h1>
		</div>
	)
}

const HeaderArea = styled.div`
	width: 100%;
	display: flex;
`
// const Link = styled.a``
