import React, { useState } from 'react'
import styled from 'styled-components'
import { TextInput } from './UIkit/TextInput'
import { PrimaryButton } from './UIkit/PrimaryButton'
import { auth, FirebaseTimestamp } from './firebase/index'
import firebase from 'firebase'
import { useHistory } from "react-router-dom";
import { ActionType, signIn, inputValidateSignIn } from './redux/actions';
import { InputSignInType } from './redux/initialState'
import { ErrorBox } from './UIkit/ErrorBox'

type Props = {
	validation: InputSignInType,
	dispatch: React.Dispatch<ActionType>
}

export const SignIn:React.FC<Props> = (props) => {
	const history = useHistory()
	const [email, setEmail]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>(""),
		[password, setPassword]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>("")

	console.log('props.validation: ', props.validation);

	return (
		<Container>
			<h1> Sign In</h1>
			{props.validation.top.error &&
				<ErrorBox msg={props.validation.top.message}></ErrorBox>
			}
			<TextInput
				errorCondition={props.validation.email.error} helperText={props.validation.email.message}
				fullWidth={false} width={300} label={'Email Address'} multiline={false}
				required={true} rows={1} value={email} type={"email"}
				onChange={(e: { target: { value: React.SetStateAction<string> } }) => setEmail(e.target.value)}
			/>
			<TextInput
				errorCondition={props.validation.password.error} helperText={props.validation.password.message}
				fullWidth={false} width={300} label={'Password (at least 6 characters)'} multiline={false}
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
		dispatch(inputValidateSignIn('top', 'Please fill out the required informations.'))
		return
	}
	if(!email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
		dispatch(inputValidateSignIn('email', 'Invalid Email Address format.'))
		return
	}
	if(password.length < 6){
		dispatch(inputValidateSignIn('password', 'At least 6 characters'))
		return
	}
	
	// Sign In
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
					}
					
				}
			}).catch(error => {
				console.log('SignIn error : ', error);
				dispatch(inputValidateSignIn('top', 'Sorry, Server Error. please try again later.'))
				return
			})		
		}).catch(error => {
			console.log('setPersistence error : ', error);
			dispatch(inputValidateSignIn('top', 'Sorry, Server Error. please try again later.'))
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


