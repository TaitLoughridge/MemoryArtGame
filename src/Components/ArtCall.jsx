import React, { Component } from 'react';

class ArtCall extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artData: []
		};
	}

	componentDidMount() {
		fetch(
			`https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&hasImages=true&q=Abstract`
		).then(function(response) {
			console.log(response.data);
			response.data.objectIDs.forEach((id) => {
				fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`).then(function(response) {
					console.log(response.data.primaryImage);
				});
			});
		});
	}

	// render() {
	//   // rendering stuff here
	// }
}

export default ArtCall;
