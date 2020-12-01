import React from 'react'
import { useHistory } from "react-router-dom";
// import {useTransition} from './UIkit/Routing'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import {auth} from './firebase/index'
import { History } from 'history';
import { SimpleButton } from './UIkit/SimpleButton';

type Props = {
	userName: string
}

const SignOut = async (history: History<unknown>) => {
	await auth.signOut()
		.then(result => {
			console.log('SignOut! ', result);
			alert('Sign Out')
			history.push('/')
		}).catch(error => {
			if(error) console.log('error : ', error)
		})
	}

export const Header:React.FC<Props> = (props) => {
	const history = useHistory()
	return (
		<div>
			<h1>Marubatu Game</h1>
			<HeaderArea>
				<Button aria-controls="simple-menu" aria-haspopup="true" onClick={() => history.push('/')}>TOP</Button>
				{/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={() => history.push('/signup')}>Sign Up</Button> */}
				<Button aria-controls="simple-menu" aria-haspopup="true" onClick={() => history.push('/marubatsu')}>Marubatsu</Button>
				<RightArea>
					{props.userName.length > 0 &&
						<div>{"User: " + props.userName}</div>						
					}
					{props.userName.length === 0 &&
						<SimpleButton label={"Sign Up"} onClick={() => history.push('/signup')} />
					}
					<SimpleButton label={"Sign Out"} onClick={() => SignOut(history)} />
				</RightArea>
			</HeaderArea>
		</div>
	)
}

const HeaderArea = styled.div`
	width: 100%;
	display: flex;
	border-bottom: solid 2px skyblue;
`
const RightArea = styled.div`
	display: flex;
	margin-left: auto;
`
