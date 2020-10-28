import React from 'react';
import ArtCall from './ArtCall';
import './JustArt.css';

import 'materialize-css';
import '../App.css';

const JustArt = (props) => (
	<div className="App">
		<h1 className="blue-grey-text text-lighten-4">Art Match</h1>
		<button class="waves-effect waves-light btn cyan darken-3" onClick={() => window.location.reload(false)}>
			Click to reload!
		</button>{' '}
		<p className="blue-grey-text text-lighten-4">Welcome to the Art page</p>
		<p className="blue-grey-text text-lighten-4">This is all about the Art No Game</p>
		<div>
			<ArtCall />
		</div>
	</div>
);

export default JustArt;
