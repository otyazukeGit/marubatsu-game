import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Home page : Initial Display', async () => {
	render(<App />);
	// screen.debug();

	/* Header Area */
	expect(screen.getByRole('heading', {name: 'MaruBatsu Game'})).toBeInTheDocument()
	expect(screen.getByRole('button', {name: 'TOP'})).toBeInTheDocument()
	expect(screen.getByRole('button', {name: 'Marubatsu'})).toBeInTheDocument()
	const button_signup = screen.getAllByRole('button', {name: 'Sign Up'})
	expect(button_signup[0]).toBeInTheDocument()  //Sign Up

	/* Main Area */
	expect(screen.getByRole('heading', {name: 'Introduction'})).toBeInTheDocument()
	expect(screen.getByText(/Hi, there./)).toBeInTheDocument()
	expect(screen.getByText(/Have you ever heard of Marubatsu Game, or TIC TAC TOE\?/)).toBeInTheDocument()
	expect(screen.getByText(/Marubatsu Game is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid./)).toBeInTheDocument()
	expect(screen.getByText(/Marubatsu Game is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid./)).not.toBeVisible()
	expect(screen.getByText(/The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner./)).toBeInTheDocument()	
	expect(screen.getByText(/The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner./)).not.toBeVisible()

	expect(screen.getByText(/References:/)).toBeInTheDocument()
	expect(screen.getByRole('link', {name: 'wikipedia'})).toBeInTheDocument()
	expect(screen.getByText(/Please join us and enjoy the Marubatsu Game!/)).toBeInTheDocument()
	expect(button_signup[1]).toBeInTheDocument()  //Sign Up
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
