import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { shuffleArray } from "../Helpers/ShuffleArray";
import { Question } from "../Hooks/Questions";

const QuestionCard = ({
	question,
	pointHandler,
}: {
	question: Question;
	pointHandler: Dispatch<SetStateAction<number>>;
}) => {
	const [checkedIndex, setCheckedIndex] = useState<number>();
	const [isAnswerChecked, setIsAnswerChecked] = useState(false);
	const [possibleAnswers, setPossibleAnswers] = useState<string[]>([]);

	useEffect(() => {
		setIsAnswerChecked(false);
		setCheckedIndex(undefined);
		setPossibleAnswers(
			shuffleArray([
				question.correct_answer,
				...question.incorrect_answers,
			])
		);
	}, [question]);

	const determineClassName = (answer: string, idx: number) => {
		const isCorrect = question.correct_answer === answer;

		if (!isAnswerChecked || (!isCorrect && checkedIndex !== idx)) {
			return "btn-outline-dark";
		}

		if (isCorrect) {
			return "btn-success";
		}
		return "btn-danger";
	};

	const handleClick = () => {
		if (possibleAnswers[checkedIndex!] === question.correct_answer) {
			pointHandler((value) => value + 1);
		} else {
			pointHandler((value) => value - 1);
		}
		setIsAnswerChecked(true);
	};

	return (
		<div>
			<div
				className='mb-3'
				dangerouslySetInnerHTML={{ __html: question.question }}></div>
			{possibleAnswers.map((answer, idx) => (
				<React.Fragment key={answer}>
					<input
						type='checkbox'
						className='btn-check'
						name='questionAnswer'
						id={`option${idx}`}
						autoComplete='off'
						value={idx}
						checked={checkedIndex === idx}
						readOnly
					/>
					<label
						className={`btn ${determineClassName(answer, idx)}`}
						htmlFor='questionAnswer'
						dangerouslySetInnerHTML={{
							__html: answer,
						}}
						onClick={() => setCheckedIndex(idx)}></label>
				</React.Fragment>
			))}
			<hr />
			<button
				className='btn btn-primary mb-3'
				onClick={() => {
					handleClick();
				}}
				disabled={isNaN(checkedIndex!) || isAnswerChecked}>
				Check Answer
			</button>
		</div>
	);
};

export default QuestionCard;
