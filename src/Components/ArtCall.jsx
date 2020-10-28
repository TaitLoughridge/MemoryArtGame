import React, { Component } from 'react';
import ArtCard from './ArtCard';

import 'materialize-css';

class ArtCall extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allArtData: [],
			artData: []
		};
	}

	componentDidMount() {
		fetch(
			`https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&hasImages=true&q=Impressionism`
		)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ allArtData: data });
				// console.log(data);

				let unshuffledArt = data.objectIDs;

				let shuffledArt = unshuffledArt
					.map((a) => ({ sort: Math.random(), value: a }))
					.sort((a, b) => a.sort - b.sort)
					.map((a) => a.value);

				// console.log('shuffled: ', shuffledArt.slice(0, 8));

				shuffledArt.slice(0, 30).forEach((id) => {
					fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
						.then((response) => response.json())
						.then((artWork) => {
							this.setState({ artData: [ ...this.state.artData, artWork ] });
							console.log(artWork);
						});
				});
			});
	}

	render() {
		const { artData } = this.state;
		return (
			<div>
				{artData.map((artWork) => {
					return <ArtCard artWork={artWork} />;
				})}
			</div>
		);
	}
}

export default ArtCall;
