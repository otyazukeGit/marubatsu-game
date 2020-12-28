import React from 'react'
import styled from 'styled-components'
import { PrimaryButton } from '../UIkit/PrimaryButton'
import { useHistory } from "react-router-dom";
import { SimpleButton } from '../UIkit/SimpleButton'
// import gameImg = "../../public/marubatsu_image.png"
// import gameImg = "../../public/logo192.png"

type Props = {
	auth: boolean
}

export const Home:React.FC<Props> = (props) => {
	const history = useHistory()
	console.log('auth: ', props.auth);
	return (
		<Container>
			<h2>Introduction</h2>
			<p>Hi, there.</p>
			<p>Have you ever heard of Marubatsu Game, or TIC TAC TOE?</p>
			<p>It's easy and simple game.</p>
			<details>
				<summary>Rule</summary>
				<p>Marubatsu Game is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid.</p>
				<p>The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.</p>
				<p>References: <a href="https://en.wikipedia.org/wiki/Tic-tac-toe">wikipedia</a></p>
			</details>
			{props.auth === false &&
				<React.Fragment>
					<p>Please join us and enjoy the Marubatsu Game!</p>
					<ButtonArea>
						<PrimaryButton label={"Sign In"} width={120} onClick={() => history.push('/signin')} />
						<SimpleButton label={"Sign Up"} onClick={() => history.push('/signup')} />
					</ButtonArea>
				</React.Fragment>
			}
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
