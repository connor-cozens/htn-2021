import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SignInForm, SignUpForm } from './components';
import './App.css'

function App() {
	return (
		<Router>
		
			<div className='contentBody'>
				<Route exact path='/' render={() =>
					<div>hi</div>
				} />
				<Route exact path='/signin' render={() =>
					<SignInForm />
				} />
				<Route exact path='/signup' render={() =>
					<SignUpForm />
				} />
			</div>

		</Router>
	);
}

export default App;