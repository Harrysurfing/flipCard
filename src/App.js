import React, { useState, useEffect } from "react";
import "./App.css";
import CardBox from "./components/cards-box/cards-box";
import SelectionPannel from "./components/selection-pannel/selection-pannel";
import { getToken, getQuestions } from "./api/api";

function App() {
	const [qs, setQs] = useState([]);

	const fetchQuestions = async () => {
		let r = await getQuestions();
		setQs(r);
	};

	// useEffect(() => {
	// 	fetchQuestions();
	// }, []);

	console.log(qs);

	return (
		<div className="App">
			<SelectionPannel fetchQuestions={fetchQuestions} />
			<CardBox questions={qs} />
		</div>
	);
}

export default App;
