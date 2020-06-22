import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardBox from "./components/cards-box/cards-box";
import SelectionPannel from "./components/selection-pannel/selection-pannel";
import WelcomePage from "./components/welcome-page/welcome-page";
import { getQuestions } from "./api/api";
import "./App.css";

function App() {
	const [qs, setQs] = useState([]);

	const fetchQuestions = async () => {
		let r = await getQuestions();
		setQs(r);
	};

	return (
		<Router>
			<Switch>
				<div className="App">
					<Route exact path="/" component={WelcomePage} />
					<Route exact path="/questions">
						<SelectionPannel fetchQuestions={fetchQuestions} />
						<CardBox questions={qs} />
					</Route>
				</div>
			</Switch>
		</Router>
	);
}

export default App;
