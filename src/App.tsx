import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom"
// import './App.css';
// import { Home } from './Home'
import { Header } from './Header'
import { SignUp } from './SignUp'
import { SignIn } from './SignIn'
import { Auth } from './Auth'
import { Marubatsu } from './Marubatsu';
import styled from 'styled-components'

function App() {
	return (
		<Container>
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact>
						<SignIn />
					</Route>
					<Route path="/signup" exact>
						<SignUp />
					</Route>
					<Auth>
						<Route path="/marubatsu" exact>
							<Marubatsu></Marubatsu>
						</Route>
					</Auth>
				</Switch>
			</Router>
		</Container>
	)
}

const Container = styled.div`
	min-height: 100vh;
	margin: 0;
`

export default App;
