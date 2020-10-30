import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css';
import './Home.css';
import '../App.css';
import Welcome from './Welcome';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		console.log(this.state.value);
		return (
			<div className="home">
				<h1 className="blue-grey-text text-lighten-4 jumbotron" />
				<Welcome />
				<form onSubmit={this.handleSubmit}>
					<div className="input-field col s12 container centered blue-grey-text text-lighten-4">
						<select value={this.state.value} onChange={this.handleChange}>
							<option value="Choose an Art Movement">Choose an Art Movement</option>
							<option value="Medieval">Medieval</option>
							<option value="Renaissance">Renaissance</option>
							<option value="Baroque">Baroque</option>
							<option value="Rococo">Rococo</option>
							<option value="Neoclassical">Neoclassical</option>
							<option value="Romanticism">Romanticism</option>
							<option value="Academic">Academic</option>
							<option value="Realism">Realism</option>
							<option value="Pre-Raphaelite">Pre-Raphaelite</option>
							<option value="Impressionism">Impressionism</option>
							<option value="Post-Impressionism">Post-Impressionism</option>
							<option value="Symbolism">Symbolism</option>
							<option value="Expressionism">Expressionism</option>
							<option value="Futurism">Futurism</option>
						</select>
						<button class="waves-effect waves-light btn cyan darken-3">
							<Link to={`/game/${this.state.value}`}>Play Game</Link>
						</button>
						<button class="waves-effect waves-light btn cyan darken-3">
							<Link to={`/justart/${this.state.value}`}>Just The Art</Link>
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Home;
