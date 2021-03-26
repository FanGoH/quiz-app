import { ChangeEventHandler, useState } from "react";
import { Categories } from "../Hooks/Categories";

import { useFetch } from "../Hooks";

import Spinner from "./Spinner";
import CategoryPicker from "./CategoryPicker";

import { QueryParams } from "../App";

const TriviaConfig = ({
	onStart,
}: {
	onStart: (args: QueryParams) => void;
}) => {
	const { data, errors, loading } = useFetch<Categories>(
		"https://opentdb.com/api_category.php"
	);

	const [noQuestions, setNoQuestions] = useState("10");

	const [selectedCategoryID, setSelectedCategoryID] = useState("0");
	const [selectedDifficulty, setSelectedDifficulty] = useState("");
	const [selectedType, setSelectedType] = useState("");

	const selectOnChange: ChangeEventHandler<HTMLSelectElement> = (evt) => {
		setSelectedCategoryID(evt.target.value);
	};

	return (
		<>
			<Spinner loading={loading} />
			{!loading && !errors && (
				<>
					<h4>Choose number of questions</h4>
					<div className='input-group my-3'>
						<input
							type='number'
							className='form-control'
							value={noQuestions}
							onChange={(evt) => setNoQuestions(evt.target.value)}
							aria-label='noquestions'
							aria-describedby='basic-addon1'
						/>
					</div>
					<h4>Select a Difficulty</h4>
					<div className='my-3'>
						<select
							value={selectedDifficulty}
							onChange={(evt) =>
								setSelectedDifficulty(evt.target.value)
							}
							className='form-select'
							aria-label='Default select example'>
							<option key='0' value=''>
								Anything goes!
							</option>
							<option key='1' value='easy'>
								Easy
							</option>
							<option key='2' value='medium'>
								Medium
							</option>
							<option key='3' value='hard'>
								Hard
							</option>
						</select>
					</div>
					<h4>Select a Question Format</h4>
					<div className='my-3'>
						<select
							value={selectedType}
							onChange={(evt) =>
								setSelectedType(evt.target.value)
							}
							className='form-select'
							aria-label='Default select example'>
							<option key='0' value=''>
								Any!
							</option>
							<option key='1' value='boolean'>
								True/False
							</option>
							<option key='2' value='multiple'>
								Multiple Options
							</option>
						</select>
					</div>
					<CategoryPicker
						dataArray={data!.trivia_categories}
						selectHandler={selectOnChange}
						selectedID={selectedCategoryID}
					/>
					<button
						className='btn btn-primary mt-3'
						onClick={() =>
							onStart({
								category: selectedCategoryID,
								difficulty: selectedDifficulty,
								noQuestions: noQuestions,
								questionFormat: selectedType,
							})
						}>
						Start Playing!
					</button>
				</>
			)}
		</>
	);
};

export default TriviaConfig;
