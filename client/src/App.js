import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, Pantry, Profile, SignInForm, SignUpForm } from './components';
import './App.css'

function App() {
	return (
		<Router>
			<Route exact path='/' render={() =>
				<>
					<Navbar />
					<Profile />
				</>
			} />
			<Route exact path='/signin' render={() =>
				<SignInForm />
			} />
			<Route exact path='/signup' render={() =>
				<SignUpForm />
			} />
			<Route exact path='/pantry' render={() =>
				<Pantry />
			} />
		</Router>
	);
}

export default App;