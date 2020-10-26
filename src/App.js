import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Components/Home';
import Game from './Components/Game';
import JustArt from './Components/JustArt';

import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<nav>
					<Link to="/">Home | </Link>
					<Link to="/game">Game | </Link>
					<Link to="/justart">JustArt</Link>
				</nav>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/game">
						<Game />
					</Route>
					<Route path="/justart">
						<JustArt />
					</Route>
					{/* needs to be last Route */}
					<Route path="*">
						<h2>PAGE NOT FOUND!</h2>
						<Link to="/">Return to Homepage</Link>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
