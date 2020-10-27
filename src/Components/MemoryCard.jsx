import React, { Component } from 'react';
import ArtCall from './ArtCall';
import './MemoryCard.css';

class MemoryCard extends Component {
	render() {
		const memoryCardInnerClass = this.props.isFlipped ? 'MemoryCardInner flipped' : 'MemoryCardInner';

		return (
			<div className="MemoryCard" onClick={this.props.pickCard}>
				<div className={memoryCardInnerClass}>
					<div className="MemoryCardBack">
						<img src="/images/Salon-1.png" alt="Salon Logo" />
					</div>
					<div className="MemoryCardFront">
						<div>{this.props.symbol}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MemoryCard;
