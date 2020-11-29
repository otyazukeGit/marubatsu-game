import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { TextInput } from './UIkit/TextInput'
import { PrimaryButton } from './UIkit/PrimaryButton'
import Button from '@material-ui/core/Button';
import { auth, FirebaseTimestamp } from './firebase/index'
import { useHistory } from "react-router-dom";


export const SignIn = () => {
	const history = useHistory()
	const [email, setEmail]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>(""),
		[password, setPassword]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>("")

	return (
		<Container>
			<h1> Sign In</h1>
			<TextInput
				fullWidth={false} width={300} label={'Email'} multiline={false}
				required={true} rows={1} value={email} type={"email"} placeholder={"aa"}
				onChange={(e: { target: { value: React.SetStateAction<string> } }) => setEmail(e.target.value)}
			/>
			<TextInput
				fullWidth={false} width={300} label={'Password'} multiline={false}
				required={true} rows={1} value={password} type={"password"}
				onChange={(e: { target: { value: React.SetStateAction<string> } }) => setPassword(e.target.value)}
			/>
			<ButtonArea>
				<PrimaryButton
					label={"Sign In"}
					onClick={() => authSignIn(email, password, history)}
				/>
				<Button aria-controls="simple-menu" aria-haspopup="true" onClick={() => history.push('/signup')}>Sign Up</Button>
			</ButtonArea>
		</Container>
	)
}

const authSignIn = async (email: string, password: string, history:any) => {
	//Validation
	if (email === '' || password === '') {
		alert('Please fill out the required informations.')
		false
	}
	// TODO if Password Pattern

	
	// Sign In
	// const history = useHistory()
	await auth.signInWithEmailAndPassword(email, password)
		.then(result => {
			console.log('Response auth Sign In');
			// console.log('result: ', result);
			const user = result.user
			if (user) {
				const uid = user.uid
				const timestamp = FirebaseTimestamp.now()

				// transition to Marubatsu page.
				history.push('/marubatsu')
			}
		}).catch(error => {
			console.log('Sign In error');
			return false
		})
	console.log('end');
	return true
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


