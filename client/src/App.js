import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, SignInForm, SignUpForm } from './components';
import './App.css'

function App() {
	return (
		<Router>
		
				<Route exact path='/' render={() =>
					<Navbar />
				} />
				<Route exact path='/signin' render={() =>
					<SignInForm />
				} />
				<Route exact path='/signup' render={() =>
					<SignUpForm />
				} />

		</Router>
	);
}

export default App;