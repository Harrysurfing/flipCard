import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import "./flip-card.style.css";

class FlipCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isFlipped: false,
		};
	}

	handleClick(e) {
		e.preventDefault();
		this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
	}

	render() {
		return (
			<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
				<div>
					This is the front of the card.
					<button onClick={this.handleClick}>click to flip</button>
				</div>
				<div>
					This is the back of the card.
					<button onClick={this.handleClick}>click to flip</button>
				</div>
			</ReactCardFlip>
		);
	}
}

export default FlipCard;
