const axios = require("axios");

const url = "https://opentdb.com/api.php";

export const getToken = async () => {
	try {
		const res = await axios.get(`${url}?command=request`);

		return res.data.token;
	} catch (e) {
		return console.log(e);
	}
};

export const getQuestions = async (category = "", difficulty = "") => {
	try {
		const questions = await axios
			.get(
				`${url}?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
			)
			.then((res) => {
				return res.data.results;
			});

		return questions;
	} catch (e) {
		console.log(e);
	}
};
