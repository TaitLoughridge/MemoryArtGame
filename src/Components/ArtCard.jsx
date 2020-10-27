import React, { Component } from 'react';
import './MemoryCard.css';

function ArtCard(props) {
	const { artWork } = props;
	console.log(props);
	return (
		<div className="cards">
			<img src={artWork.primaryImageSmall} alt={artWork.ObjectID} className="img" />
		</div>
	);
}

export default ArtCard;
