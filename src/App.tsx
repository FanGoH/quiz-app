import "./App.css";
import TriviaConfig from "./Components/TriviaConfig";
import { Question, QuestionsResponse } from "./Hooks/Questions";
import { useState } from "react";
import Trivia from "./Components/Trivia";

export interface QueryParams {
	noQuestions: string;
	difficulty: string;
	questionFormat: string;
	category: string;
}

function App() {
	const [questions, setQuestions] = useState<Question[]>();
	const [started, setStarted] = useState(false);

	const triggerQuery = async (dataInput: QueryParams) => {
		const { noQuestions, category, difficulty, questionFormat } = dataInput;

		const response = await fetch(
			`https://opentdb.com/api.php?amount=${noQuestions}&category=${category}&difficulty=${difficulty}&type=${questionFormat}`
		);

		const data: QuestionsResponse = await response.json();

		setQuestions(data.results);
		setStarted(true);
	};
	return (
		<div className='App'>
			<header className='App-header'>
				<div className='container'>
					<h1 className='title'>Welcome to the Trivia!</h1>
					{!started ? (
						<TriviaConfig onStart={triggerQuery} />
					) : (
						<Trivia questions={questions!} />
					)}
				</div>
			</header>
		</div>
	);
}

export default App;
