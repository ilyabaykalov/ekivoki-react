import React, { Component } from 'react';

import Card from '../components/Card/Card';

class App extends Component {
	render() {
		this.setState({
			card: [
				{
					title: 'Культпросвет',
					first: 'Креатив',
					second: 'Иллюзионист',
					third: 'Мурзилка',
					fourth: 'Вшивый интеллигент',
					fifth: 'Басня',
				},
				{
					title: 'Культпросвет',
					first: 'Неунывающие децибелы',
					second: 'Виолончелистка',
					third: 'Хохлома',
					fourth: 'Попасть в кадр',
					fifth: 'Маска',
				},
			],
		});
		return (
			<div className={'cards'}>
				<Card card={this.state.card} />
			</div>
		);
	}
}

App.displayName = 'App';

export default App;
