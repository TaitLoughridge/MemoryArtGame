import React, { Component } from 'react';
import ArtCard from './ArtCard';
import 'materialize-css';

class ArtCall extends Component {
	constructor(props) {
		super(props);

		this.state = {
			allArtData: [],
			artData: [],
			imagesArray: []
		};
	}

	fetchArtwork = async () => {
		const { value } = this.props;
		const allArtData = await fetch(
			`https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&hasImages=true&q=${value}`
		).then((response) => response.json());

		const shuffledArt = allArtData.objectIDs
			.map((a) => ({ sort: Math.random(), value: a }))
			.sort((a, b) => a.sort - b.sort)
			.map((a) => a.value);

		let imagesArray = [];

		Promise.all(
			shuffledArt.slice(0, 30).map(async (id) => {
				return await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`).then((response) =>
					response.json()
				);
			})
		).then((artData) => {
			artData.map((artWork) => {
				imagesArray = [ ...imagesArray, artWork.primaryImageSmall ];
			});

			this.setState({
				artData,
				allArtData,
				imagesArray
			});
		});
	};

	async componentDidMount() {
		const { value } = this.props.value;
		this.fetchArtwork(value);
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
