import React, { Component } from 'react';
import ArtCall from './ArtCall';

import 'materialize-css';
import './MemoryCard.css';

class MemoryCard extends Component {
	render() {
		const memoryCardInnerClass = this.props.isFlipped ? 'MemoryCardInner flipped' : 'MemoryCardInner';

		return (
			<div className="MemoryCard" onClick={this.props.pickCard}>
				<div className={memoryCardInnerClass}>
					<div className="MemoryCardBack">
						<span class="helper" />
						<img src="/images/Salon-1.png" alt="Salon Logo" />
					</div>
					<div className="MemoryCardFront">
						<img src={this.props.symbol} alt={this.props.symbol} />
					</div>
				</div>
			</div>
		);
	}
}

export default MemoryCard;
