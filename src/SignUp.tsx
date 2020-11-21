import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { TextInput } from './UIkit/TextInput'
import { PrimaryButton } from './UIkit/PrimaryButton'
import { auth, FirebaseTimestamp } from './firebase/index'
import { useHistory } from 'react-router-dom'

export const SignUp = () => {
	// TODO: commonality
	const history = useHistory()
	const [userName, setUserName]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>(""),
		[email, setEmail]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>(""),
		[password, setPassword]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>(""),
		[confirmPassword, setConfirmPassword]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>("")

	const inputUserName = useCallback((event: { target: { value: React.SetStateAction<string> } }) => {
		setUserName(event.target.value)
	}, [setUserName])

	return (
		<Container>
			<h1> Sign Up</h1>
			<TextInput
				fullWidth={true} label={'User Name'} multiline={false}
				required={true} rows={1} value={userName} type={"text"}
				onChange={inputUserName}
			/>
			<TextInput
				fullWidth={true} label={'Email'} multiline={false}
				required={true} rows={1} value={email} type={"email"} placeholder={"aa"}
				onChange={(e: { target: { value: React.SetStateAction<string> } }) => setEmail(e.target.value)}
			/>
			<TextInput
				fullWidth={true} label={'Password (at least 6 characters)'} multiline={false}
				required={true} rows={1} value={password} type={"password"}
				onChange={(e: { target: { value: React.SetStateAction<string> } }) => setPassword(e.target.value)}
			/>
			<TextInput
				fullWidth={true} label={'Confirm Password (at least 6 characters)'} multiline={false}
				required={true} rows={1} value={confirmPassword} type={"password"}
				onChange={(e: { target: { value: React.SetStateAction<string> } }) => setConfirmPassword(e.target.value)}
			/>
			<PrimaryButton
				label={"Create  Account"}
				onClick={() => authSignUp(userName, email, password, confirmPassword, history)}
			/>
		</Container>
	)
}

const authSignUp = async (userName: string, email: string, password: string, confirmPassword: string, history:any) => {
	console.log('authSignUp');
	console.log('userName: ', userName);
	//Validation
	if (userName === '' || email === '' || password === '' || confirmPassword === '') {
		alert('Please fill out the required informations.')
		false
	}
	if (password !== confirmPassword) {
		alert('Password does not match.')
		false
	}
	// TODO if Password Pattern

	// Sign Up
	await auth.createUserWithEmailAndPassword(email, password)
		.then(result => {
			console.log('Response auth Sign Up');
			// console.log('result: ', result);
			const user = result.user
			if (user) {
				const uid = user.uid
				const timestamp = FirebaseTimestamp.now()

				const userInitialDate = {
					created_at: timestamp,
					email: email,
					role: "customer",
					uid: uid,
					updated_at: timestamp,
					userName: userName
				}

				// transition to Marubatsu page.
				history.push('/marubatsu')

			}
		}).catch(error => {
			console.log('Sign Up error');
			console.log('error: ', error);
			return false
		})
	console.log('end');
	return true
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 80%;
	margin: 0 auto;
`


