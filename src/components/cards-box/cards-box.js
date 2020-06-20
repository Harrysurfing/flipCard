import React from "react";
import FlipCard from "../flip-card/flip-card.component";
import "./cards-box.css";
import { data } from "../mock-data";
import {
	generateAnswers,
	generateCardFront,
	generateCardBack,
} from "./card-utils";

export class CardBox extends React.Component {
	render() {
		return (
			<div className="cards-box">
				{this.props.questions.map((el, index) => {
					let answers = generateAnswers(
						el.incorrect_answers,
						el.correct_answer
					);
					let cardFront = generateCardFront(el.question, answers);
					let cardBack = generateCardBack(el.correct_answer);

					return (
						<FlipCard
							key={`${index}.${Math.random()}`}
							cardFront={cardFront}
							cardBack={cardBack}
						/>
					);
				})}
			</div>
		);
	}
}

export default CardBox;
