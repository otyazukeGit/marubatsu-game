import React, {ReactElement, useReducer} from 'react';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom"
// import './App.css';
import { Home } from './Page/Home'
import { Header } from './Page/Header'
import { SignUp } from './Page/SignUp'
import { SignIn } from './Page/SignIn'
import { Auth } from './Page/Auth'
import { Marubatsu } from './Page/Marubatsu';
import styled from 'styled-components'
import { initialState } from './redux/initialState'
import { reducer } from './redux/reducer'

function App():ReactElement {
	const [state, dispatch] = useReducer(reducer, initialState)
	// console.log('state: ', state);


	return (
		<Container>
			<Router>
				<Header
					user={state.user} isOpen={state.isOpen} dispatch={dispatch}
				/>
				<Switch>
					<Route path="/" exact>
						<Home
							auth={state.user.auth}
						/>
					</Route>

					<Route path="/signup" exact>
						<SignUp
							validation={state.inputValidate.signUp}
							dispatch={dispatch}
						/>
					</Route>

					<Route path="/signin" exact>
						<SignIn
							validation={state.inputValidate.signIn}
							dispatch={dispatch}
						/>
					</Route>

					<Auth>
						<Route path="/marubatsu" exact>
							<Marubatsu
								state={state}
								dispatch={dispatch}
							/>
						</Route>
					</Auth>

				</Switch>
			</Router>
		</Container>
	)
}

const Container = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	margin: 0;
`

export default App;
