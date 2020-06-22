import React from "react";
import "./card-unitls.css";

export const generateAnswers = (wrongAnswers, correctAnswer) => {
	const answers = [...wrongAnswers, correctAnswer];

	return answers.sort((x, y) => Math.random() - 0.5);
};

const decodeString = (str) => {
	const textArea = document.createElement("textarea");
	textArea.innerHTML = str;
	return textArea.value;
};

export const generateCardFront = (question, answers) => {
	const decodedQuestion = decodeString(question);
	return (
		<div className="card card-front">
			<span className="card-question">{decodedQuestion}</span>
			{["A", "B", "C", "D"].map((option, index) => {
				return (
					<span key={`${index}.${Date.now()}`}>{`${option}. ${decodeString(
						answers[index]
					)}`}</span>
				);
			})}
		</div>
	);
};

export const generateCardBack = (answer) => {
	return (
		<div className="card card-back">
			<span>{`Correct answer: ${answer}`}</span>
		</div>
	);
};
