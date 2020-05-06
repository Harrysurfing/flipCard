import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import "./flip-card.style.css";

const style = {
	frontcard: {
		border: "1px solid black",
		height: "100px",
		width: "200px",
		color: "red",
	},
};

class FlipCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isFlipped: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
	}

	render() {
		return (
			<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
				<div style={style.frontcard} onMouseOver={this.handleClick}>
					This is the front of the card.
				</div>
				<div onMouseLeave={this.handleClick} style={style.frontcard}>
					This is the back of the card.
				</div>
			</ReactCardFlip>
		);
	}
}

export default FlipCard;
