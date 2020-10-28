import React, { Component } from 'react';
import './MemoryCard.css';

import 'materialize-css';

function ArtCard(props) {
	const { artWork } = props;
	console.log(props);
	return (
		<div className="cards">
			<img src={artWork.primaryImageSmall} alt={artWork.ObjectID} className="img" />
			<p>{artWork.artistDisplayName}</p>
			<p>{artWork.title}</p>
			<p>{artWork.objectURL}</p>
		</div>
	);
}

export default ArtCard;
