import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
// import * as firebase from '@firebase/rules-unit-testing'

const Test_HeaderArea = () => {
	/* Header Area */
	expect(screen.getByRole('heading', {name: 'MaruBatsu Game'})).toBeInTheDocument()
	expect(screen.getByRole('button', {name: 'TOP'})).toBeInTheDocument()
	expect(screen.getByRole('button', {name: 'Marubatsu'})).toBeInTheDocument()
	const button_signup = screen.getAllByRole('button', {name: 'Sign Up'})
	expect(button_signup[0]).toBeInTheDocument()  // Sign Up	
}

test('Home page : Initial Display', async () => {
	render(<App />);
	// screen.debug();

	/* Header Area */
	Test_HeaderArea()

	/* Main Area */
	expect(screen.getByRole('heading', {name: 'Introduction'})).toBeInTheDocument()
	expect(screen.getByText(/Hi, there./)).toBeInTheDocument()
	expect(screen.getByText(/Have you ever heard of Marubatsu Game, or TIC TAC TOE\?/)).toBeInTheDocument()
	expect(screen.getByText(/Marubatsu Game is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid./)).toBeInTheDocument()
	expect(screen.getByText(/Marubatsu Game is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid./)).not.toBeVisible()
	expect(screen.getByText(/The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner./)).toBeInTheDocument()	
	expect(screen.getByText(/The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner./)).not.toBeVisible()

	const button_signup = screen.getAllByRole('button', {name: 'Sign Up'})
	expect(screen.getByText(/References:/)).toBeInTheDocument()
	expect(screen.getByRole('link', {name: 'wikipedia'})).toBeInTheDocument()
	expect(screen.getByText(/Please join us and enjoy the Marubatsu Game!/)).toBeInTheDocument()
	expect(button_signup[1]).toBeInTheDocument()  // Sign Up
	expect(screen.getByRole('button', {name: 'Sign In'})).toBeInTheDocument()
});

test('Home page : click [Rule]', async () => {
	render(<App />);
	fireEvent.click(screen.getByText('Rule'))
	expect(screen.getByText(/Marubatsu Game is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid./)).toBeVisible()
	expect(screen.getByText(/The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner./)).toBeVisible()
	fireEvent.click(screen.getByText('Rule'))
	expect(screen.getByText(/Marubatsu Game is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid./)).not.toBeVisible()
	expect(screen.getByText(/The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner./)).not.toBeVisible()
});

test('Sign Up page : Sign Up', async () => {
	// firebase.initializeTestApp({projectId: 'marubatsugame-36453'})

	render(<App />);
	const button_signup = screen.getAllByRole('button', {name: 'Sign Up'})
	fireEvent.click(button_signup[0])

	/* Header Area */
	Test_HeaderArea()

	/* Main Area */
	expect(screen.getByText('User Name')).toBeInTheDocument()  // "*" is pseudo-element(before)
	expect(screen.getByText('Email Address')).toBeInTheDocument()  // "*" is pseudo-element(before)
	expect(screen.getByText('Password (at least 6 characters)')).toBeInTheDocument()  // "*" is pseudo-element(before)
	expect(screen.getByText('Confirm Password (at least 6 characters)')).toBeInTheDocument()  // "*" is pseudo-element(before)
	expect(screen.getByRole('button', {name: 'Create Account'})).toBeInTheDocument()

	/* user input for Sign Up */
	const inputElements = document.querySelectorAll('input')
	const userNameInput = inputElements[0]
	fireEvent.input(userNameInput, {target: {value: 'test'}})
	// expect(screen.getByDisplayValue('test')).toBeInTheDocument()  // if check the inputed value.
	const emailAddressInput = inputElements[1]
	fireEvent.input(emailAddressInput, {target: {value: 'emu-test@gmail.com'}})
	const passwordInput = inputElements[2]
	fireEvent.input(passwordInput, {target: {value: '234567'}})
	const confirmPasswordInput = inputElements[3]
	fireEvent.input(confirmPasswordInput, {target: {value: '234567'}})

	/* user go Sign Up */
	// fireEvent.click(screen.getByRole('button', {name: 'Create Account'}))
	// expect(screen.getByText('please click any one Box.')).toBeInTheDocument()

});
