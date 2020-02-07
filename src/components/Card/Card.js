import React, { Component } from 'react';

import './Card.scss';

class Card extends Component {
	render() {
		return (
			<div className={'card'}>
				<div className="first-theme">
					<div className="card-header">
						<p>{this.props.card[0].title}</p>
					</div>
					<div className="card-body">
						<div className="dice">
							<div className="first-drop">
								<p>Словами</p>
							</div>
							<div className="second-drop">
								<p>Наоборот</p>
							</div>
							<div className="third-drop">
								<p>Рисунок</p>
							</div>
							<div className="fourth-drop">
								<p>Жестами</p>
							</div>
							<div className="fifth-drop">
								<p>Да / нет</p>
							</div>
						</div>
						<div className="questions">
							<div className="first-drop">
								<p>{this.props.card[0].first}</p>
							</div>
							<div className="second-drop">
								<p>{this.props.card[0].second}</p>
							</div>
							<div className="third-drop">
								<p>{this.props.card[0].third}</p>
							</div>
							<div className="fourth-drop">
								<p>{this.props.card[0].fourth}</p>
							</div>
							<div className="fifth-drop">
								<p>{this.props.card[0].fifth}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="second-theme">
					<div className="card-header">
						<p>{this.props.card[1].title}</p>
					</div>
					<div className="card-body">
						<div className="dice">
							<div className="first-drop">
								<p>Словами</p>
							</div>
							<div className="second-drop">
								<p>Наоборот</p>
							</div>
							<div className="third-drop">
								<p>Рисунок</p>
							</div>
							<div className="fourth-drop">
								<p>Жестами</p>
							</div>
							<div className="fifth-drop">
								<p>Да / нет</p>
							</div>
						</div>
						<div className="questions">
							<div className="first-drop">
								<p>{this.props.card[1].first}</p>
							</div>
							<div className="second-drop">
								<p>{this.props.card[1].second}</p>
							</div>
							<div className="third-drop">
								<p>{this.props.card[1].third}</p>
							</div>
							<div className="fourth-drop">
								<p>{this.props.card[1].fourth}</p>
							</div>
							<div className="fifth-drop">
								<p>{this.props.card[1].fifth}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Card.displayName = 'Card';

export default Card;
