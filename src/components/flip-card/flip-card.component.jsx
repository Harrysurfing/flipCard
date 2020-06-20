import React, { Component, createRef } from "react";
import ReactCardFlip from "react-card-flip";
import "./flip-card.style.css";

class FlipCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isFlipped: false,
			height: 0,
			width: 0,
		};
		this.handleClick = this.handleClick.bind(this);

		this.cardFrontRef = createRef();
	}

	handleClick(e) {
		e.preventDefault();
		this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
	}

	componentDidMount() {
		this.setState(
			{
				height: this.cardFrontRef.current.offsetHeight - 2,
				width: this.cardFrontRef.current.offsetWidth - 2,
			},
			() => {
				console.log(this.state.height);
			}
		);
	}

	render() {
		return (
			<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
				<div onClick={this.handleClick} ref={this.cardFrontRef}>
					{this.props.cardFront}
				</div>
				<div
					onClick={this.handleClick}
					style={{ height: this.state.height, width: this.state.width }}
				>
					{this.props.cardBack}
				</div>
			</ReactCardFlip>
		);
	}
}

export default FlipCard;
