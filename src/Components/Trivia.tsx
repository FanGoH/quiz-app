import React, { useState } from "react";
import { Question } from "../Hooks/Questions";
import QuestionCard from "./QuestionCard";

const Trivia = ({ questions }: { questions: Question[] }) => {
	const [points, setPoints] = useState(0);
	const [displayResults, setDisplayResults] = useState(false);

	const [questionIndex, setQuestionIndex] = useState<number>(0);

	if (displayResults) {
		return (
			<div className='alert-success p-5'>
				<h1>
					Results: You got {points}/{questions.length} points!
				</h1>

				<a href='/quiz-app' className='btn btn-success'>
					Play Again!
				</a>
			</div>
		);
	}
	return (
		<div className='bg-white text-dark p-3'>
			<div
				className='mb-3'
				style={{
					width: "50%",
					transform: "translateX(50%)",
					display: "flex",
					justifyContent: "space-between",
				}}>
				<span>
					Question No: {questionIndex + 1}/{questions.length}
				</span>

				<span>Points: {points}</span>
			</div>

			<QuestionCard
				question={questions[questionIndex]}
				pointHandler={setPoints}
			/>

			{questionIndex !== questions.length - 1 ? (
				<button
					className='btn btn-success'
					onClick={() => {
						setQuestionIndex((prevIndex) => prevIndex + 1);
					}}>
					Next Question (Skip)
				</button>
			) : (
				<button
					className='btn btn-danger'
					onClick={() => setDisplayResults(true)}>
					Display results
				</button>
			)}
		</div>
	);
};

export default Trivia;
