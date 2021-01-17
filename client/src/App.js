import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, SignInForm, SignUpForm } from './components';
import { UserFetch, Pantry, FriendsList } from './components';
import './App.css'

function App() {
	return (
		<Router>
			<div className = 'contentBody'>
				<Route exact path='/' render={() =>
					<Navbar />
				} />
				<Route exact path='/signin' render={() =>
					<>
						<Navbar />
						<SignInForm />
					</>
				} />
				<Route exact path='/signup' render={() =>
					<>
						<Navbar />
						<SignUpForm />
					</>
				} />

				<Route exact path='/pantry' render={() =>
					<>
						<Navbar />
						<Pantry />
					</>
				} />
				<Route exact path='/colleagues' render={() =>
					<>
						<Navbar />
						<FriendsList />
					</>
				} />
			</div>

		</Router>
	);
}

export default App;