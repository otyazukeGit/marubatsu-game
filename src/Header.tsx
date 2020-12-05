import React from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import {auth} from './firebase/index'
import { SimpleButton } from './UIkit/SimpleButton';
import { BasicModal } from './UIkit/Modal'
import { ActionType, signOut } from './redux/actions';

type Props = {
	user: {auth: boolean , userName: string},
	isOpen: boolean,
	dispatch: React.Dispatch<ActionType>
}

export const Header:React.FC<Props> = (props) => {
	const history = useHistory()
	const SignOut = async () => {
		await auth.signOut()
			.then(result => {
				console.log('SignOut! ', result);
				history.push('/')
				props.dispatch(signOut())
			}).catch(error => {
				if(error) console.log('error : ', error)
			})
		}
	
		return (
		<div>
			<h1>Marubatu Game</h1>
			<BasicModal dispatch={props.dispatch} isOpen={props.isOpen} msg={"Sign Out!"}></BasicModal>
			<HeaderArea>
				<Button aria-controls="simple-menu" aria-haspopup="true" onClick={() => history.push('/')}>TOP</Button>
				<Button aria-controls="simple-menu" aria-haspopup="true" onClick={() => history.push('/marubatsu')}>Marubatsu</Button>
				<RightArea>
					{props.user.auth && 
						<React.Fragment>
							<UserField>{"User: [" + props.user.userName + "]"}</UserField>
							<SimpleButton label={"Sign Out"} onClick={() => SignOut()} />
						</React.Fragment>
					}
					{!props.user.auth &&
						<SimpleButton label={"Sign Up"} onClick={() => history.push('/signup')} />
					}
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
	align-items: center;
	margin-left: auto;
`
const UserField = styled.div`
	color: blue;
	margin-right: 15px;
`
