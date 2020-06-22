import React, { useState } from "react";
import "./selection-pannel.css";
import { cat, difficulty } from "./selections";

function SelectionPannel(props) {
	const [selectedCat, setSelectedCat] = useState();
	const [selectedDifficulty, setSelectedDifficulty] = useState();

	return (
		<div className="selection-pannel">
			<select name="category" onChange={(e) => setSelectedCat(e.target.value)}>
				<option value="">Please select a category</option>
				{cat.map((el) => (
					<option key={el.name} value={el.name}>
						{el.name}
					</option>
				))}
			</select>

			<select onChange={(e) => setSelectedDifficulty(e.target.value)}>
				<option value="">Please select question difficulty</option>
				{difficulty.map((el) => (
					<option key={el} value={el}>
						{el}
					</option>
				))}
			</select>

			<button
				className="question-button"
				onClick={() => props.fetchQuestions(selectedCat, selectedDifficulty)}
			>
				Generate Questions
			</button>
		</div>
	);
}

export default SelectionPannel;
