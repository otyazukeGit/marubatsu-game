import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	margin: 0 auto;
`

const authSignUp = () => {
}

export const SignIn = () => {
	return (
		<Container>
			<h1> Sign In</h1>
			<input type='text'></input>
			<input type='text'></input>
			<input type='text'></input>
			<input type='text'></input>
			<button>Sign In</button>
		</Container>
	)
}
