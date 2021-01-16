import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from './components';
import './App.css'
// import logo from './logo.svg';

function App() {
	return (
		<Router>
		
			<Navbar />
			<div className='contentBody'>
				<Route exact path='/' render={() =>
					<div>Landing Page</div>
				} />
				<Route exact path='/temp1' render={() =>
					<div>Temporary Page 1</div>
				} />
				<Route exact path='/temp2' render={() =>
					<div>Temporary Page 2</div>
				} />
			</div>

		</Router>
	);
}

export default App;