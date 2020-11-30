import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { TextInput } from './UIkit/TextInput'
import { PrimaryButton } from './UIkit/PrimaryButton'
import { auth, FirebaseTimestamp } from './firebase/index'
import { useHistory } from 'react-router-dom'
import { ActionType, signIn } from './redux/actions'

type Props = {
	dispatch: React.Dispatch<ActionType>
}

export const SignUp:React.FC<Props> = (props) => {
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
			<Message>Please input your informations on this site.</Message>
			<TextInput
				fullWidth={false} width={300} label={'User Name'} multiline={false}
				required={true} rows={1} value={userName} type={"text"}
				onChange={inputUserName}
			/>
			<TextInput
				fullWidth={false} width={300} label={'Email'} multiline={false}
				required={true} rows={1} value={email} type={"email"} placeholder={"aa"}
				onChange={(e: { target: { value: React.SetStateAction<string> } }) => setEmail(e.target.value)}
			/>
			<TextInput
				fullWidth={false} width={300} label={'Password (at least 6 characters)'} multiline={false}
				required={true} rows={1} value={password} type={"password"}
				onChange={(e: { target: { value: React.SetStateAction<string> } }) => setPassword(e.target.value)}
			/>
			<TextInput
				fullWidth={false} width={300} label={'Confirm Password (at least 6 characters)'} multiline={false}
				required={true} rows={1} value={confirmPassword} type={"password"}
				onChange={(e: { target: { value: React.SetStateAction<string> } }) => setConfirmPassword(e.target.value)}
			/>
			<ButtonArea>
				<PrimaryButton
					label={"Create  Account"} width={180}
					onClick={() => authSignUp(userName, email, password, confirmPassword, history, props.dispatch)}
				/>
			</ButtonArea>
		</Container>
	)
}

const authSignUp = async (userName: string, email: string, password: string, confirmPassword: string, history:any, dispatch:any) => {
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

				dispatch(signIn(userName))

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
	align-items: center;
	height: 100%;
	width: 80%;
	margin: 0 auto;
`
const ButtonArea = styled.div`
	margin: 30px auto;
`
const Message = styled.div`
	color: black;
`


