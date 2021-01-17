import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, Pantry, Profile, SignInForm, SignUpForm, FriendsList, UserFetch } from './components';
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
		</Router>
	);
}

export default App;