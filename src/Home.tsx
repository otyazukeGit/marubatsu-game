import React from 'react'
import styled from 'styled-components'
import { PrimaryButton } from './UIkit/PrimaryButton'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

export const Home = () => {
	const history = useHistory()
	return (
		<Container>
			<h1>Welcome!</h1>
			<p>Hi, there.</p>
			<p>Have you ever heard of Marubatsu Game or TIC TAC TOE?</p>
			<p>It's easy and simple game.</p>
			<details>
				<summary>Rule</summary>
				<p>Marubatsu Game is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid.</p>
				<p>The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.</p>
			</details>
			<p>Please sign up and enjoy the Marubatsu Game!</p>
			<ButtonArea>
				<PrimaryButton label={"Sign In"} onClick={() => history.push('/signin')} />
				<Button aria-controls="simple-menu" aria-haspopup="true" onClick={() => history.push('/signin')}>Sign Up</Button>
			</ButtonArea>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 80%;
	margin: 0 auto;
`
const ButtonArea = styled.div`
	display: flex;
	margin: 30px auto;
`
