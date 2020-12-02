import React, { useState } from 'react'
import styled from 'styled-components'
import { TextInput } from './UIkit/TextInput'
import { PrimaryButton } from './UIkit/PrimaryButton'
import { auth, FirebaseTimestamp } from './firebase/index'
import firebase from 'firebase'
import { useHistory } from "react-router-dom";
import { ActionType, signIn } from './redux/actions';

type Props = {
	dispatch: React.Dispatch<ActionType>
}

export const SignIn:React.FC<Props> = (props) => {
	const history = useHistory()
	const [email, setEmail]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>(""),
		[password, setPassword]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>("")

	return (
		<Container>
			<h1> Sign In</h1>
			<Message>Please fill out your e-mail address and password below.</Message>
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
					label={"Sign In"} width={120}
					onClick={() => authSignIn(email, password, history, props.dispatch)}
				/>
			</ButtonArea>
		</Container>
	)
}

const authSignIn = async (email: string, password: string, history:any, dispatch:any) => {
	//Validation
	if (email === '' || password === '') {
		alert('Please fill out the required informations.')
		false
	}
	// TODO if Password Pattern

	
	// Sign In
	// const history = useHistory()
	await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
		.then(async () => {
			await auth.signInWithEmailAndPassword(email, password)
			.then(result => {
				console.log('Response auth Sign In');
				// console.log('result: ', result);
				const user = result.user
				if (user) {
					const uid = user.uid
					const userName = user.displayName
					const timestamp = FirebaseTimestamp.now()
		
					// transition to Marubatsu page.
					history.push('/marubatsu')

					dispatch(signIn('Player 1'))
					if(uid){
						console.log('userName: ', userName);
						// dispatch(signIn(userName))
					}
					
				}
			}).catch(error => {
				console.log('SignIn error : ', error);
				return false
			})		
		}).catch(error => {
			console.log('setPersistence error : ', error);
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
const Message = styled.div`
	color: black;
`
const ButtonArea = styled.div`
	display: flex;
	margin: 30px auto;
`


