import React from "react";
import { withRouter } from "react-router-dom";
import "./welcome-page.css";

function WelcomePage({ history }) {
	return (
		<div className="welcome-container">
			<h1 className="welcome-message">Flip Card Quiz Challenge</h1>
			<button
				className="welcome-button"
				onClick={() => history.push("/questions")}
			>
				Click to begin
			</button>
		</div>
	);
}

export default withRouter(WelcomePage);
