import React, { Component } from 'react';

import Card from '../components/Card/Card';
import Cards from '../public/cards';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { cards: Cards };
	}

	render() {
		return (
			<div className={'cards'}>
				{this.state.cards.map((card, index) => (
					<Card card={card} key={index} />
				))}
			</div>
		);
	}
}

App.displayName = 'App';

export default App;
