import React from 'react';
import 'materialize-css';
import './JustArt.css';
import './ArtCall.css';

function ArtCard(props) {
	const { artWork } = props;
	console.log(props);

	return (
		<div className="cards image-list">
			<div>
				<img src={artWork.primaryImageSmall} alt={artWork.ObjectID} className="img" />
				<p className="blue-grey-text text-lighten-4">{artWork.artistDisplayName}</p>
				<p className="blue-grey-text text-lighten-4">{artWork.title}</p>
				<button class="waves-effect waves-light btn cyan darken-3 blue-grey-text text-lighten-4 sm">
					<a href={artWork.objectURL} target="_blank">
						Learn More
					</a>
				</button>
			</div>
		</div>
	);
}

export default ArtCard;
