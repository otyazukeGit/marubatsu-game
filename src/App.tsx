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

function App() {
	return (
		<div>
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
		</div>
	)
}

export default App;
