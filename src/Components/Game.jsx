import React, { Component } from 'react';
import MemoryCard from './MemoryCard';
import ArtCall from './ArtCall';
import '../../src/App.css';

function generateDeck(images) {
	console.log(images);
	const symbols = [ `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` ];
	const deck = [];
	if (images != null) {
		for (let i = 0; i < 16; i++) {
			const card = { isFlipped: false, symbol: images[i % 8] };
			deck.push(card);
		}
	}
	shuffle(deck);
	return deck;
}

function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[ a[i], a[j] ] = [ a[j], a[i] ];
	}
	return a;
}

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deck: generateDeck(null),
			pickedCards: [],
			allArtData: [],
			artData: [],
			imagesArray: []
		};
	}

	fetchArtwork = () => {
		fetch(
			`https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&hasImages=true&q=Impressionism`
		)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ allArtData: data });
				// console.log(data);

				this.shuffleArtwork(data.objectIDs);
			)};

	shuffleArtwork = (artwork) => {
		let shuffledArt = artwork
					.map((a) => ({ sort: Math.random(), value: a }))
					.sort((a, b) => a.sort - b.sort)
					.map((a) => a.value);

				// console.log('shuffled: ', shuffledArt.slice(0, 8));

				shuffledArt.slice(0, 8).forEach((id) => {
					fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
						.then((response) => response.json())
						.then((artWork) => {
							this.setState({
								artData: [ ...this.state.artData, artWork ],
								imagesArray: [ ...this.state.imagesArray, artWork.primaryImageSmall ]
							});
						});
				});
			});
	 

	async componentDidMount() {
		const response = await this.fetchArtwork();
		console.log(this.state.imagesArray);
	}

	pickCard = (cardIndex) => {
		if (this.state.deck[cardIndex].isFlipped) {
			return;
		}
		const cardToFlip = { ...this.state.deck[cardIndex] };

		cardToFlip.isFlipped = true;

		const newDeck = this.state.deck.map((card, index) => {
			if (cardIndex === index) {
				return cardToFlip;
			}
			return card;
		});

		let newPickedCards = this.state.pickedCards.concat(cardIndex);

		if (newPickedCards.length === 2) {
			const card1Index = newPickedCards[0];
			const card2Index = newPickedCards[1];
			if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
				setTimeout(() => {
					this.unflipCards(card1Index, card2Index);
				}, 1000);
			}
			newPickedCards = [];
		}

		this.setState({
			deck: newDeck,
			pickedCards: newPickedCards
		});
	};

	unflipCards = (card1Index, card2Index) => {
		const card1 = { ...this.state.deck[card1Index] };
		const card2 = { ...this.state.deck[card2Index] };
		card1.isFlipped = false;
		card2.isFlipped = false;

		const newDeck = this.state.deck.map((card, index) => {
			if (card1Index === index) {
				return card1;
			}
			if (card2Index === index) {
				return card2;
			}
			return card;
		});

		this.setState({
			deck: newDeck
		});
	};

	render() {
		const cardsJSX = this.state.deck.map((card, index) => {
			return (
				<MemoryCard key={index} symbol={card.symbol} isFlipped={card.isFlipped} pickCard={() => this.pickCard(index)} />
			);
		});
		return (
			<div className="App">
				<div>{cardsJSX.slice(0, 4)}</div>
				<div>{cardsJSX.slice(4, 8)}</div>
				<div>{cardsJSX.slice(8, 12)}</div>
				<div>{cardsJSX.slice(12, 16)}</div>
			</div>
		);
	}
}

export default Game;
