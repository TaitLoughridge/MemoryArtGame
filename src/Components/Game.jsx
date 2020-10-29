import React, { Component } from 'react';
import MemoryCard from './MemoryCard';

import 'materialize-css';
import '../App.css';
import './Game.css';

function generateDeck(images) {
	const deck = [];
	for (let i = 0; i < 20; i++) {
		const card = { isFlipped: false, symbol: images[i % 10] };
		deck.push(card);
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
			deck: [],
			pickedCards: [],
			allArtData: [],
			artData: [],
			imagesArray: [],
			value: this.props.match.params
		};
	}

	fetchArtwork = async (value) => {
		const allArtData = await fetch(
			`https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&hasImages=true&q=${value}`
		).then((response) => response.json());

		const shuffledArt = allArtData.objectIDs
			.map((a) => ({ sort: Math.random(), value: a }))
			.sort((a, b) => a.sort - b.sort)
			.map((a) => a.value);

		let imagesArray = [];

		Promise.all(
			shuffledArt.slice(0, 10).map(async (id) => {
				return await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`).then((response) =>
					response.json()
				);
			})
		).then((artData) => {
			artData.map((artWork) => {
				imagesArray = [ ...imagesArray, artWork.primaryImageSmall ];
			});

			this.setState({
				deck: generateDeck(imagesArray),
				artData,
				allArtData,
				imagesArray
			});
		});
	};

	async componentDidMount() {
		const { value } = this.state.value;
		this.fetchArtwork(value);
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
			<div className="App CardGame container centered">
				<div>{cardsJSX.slice(0, 5)}</div>
				<div>{cardsJSX.slice(5, 10)}</div>
				<div>{cardsJSX.slice(10, 15)}</div>
				<div>{cardsJSX.slice(15, 20)}</div>
				<button class="waves-effect waves-light btn cyan darken-3" onClick={() => window.location.reload(false)}>
					Click to reload!
				</button>
			</div>
		);
	}
}

export default Game;
