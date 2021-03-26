import { ChangeEventHandler } from "react";
import { TriviaCategory } from "../Hooks/Categories";

const CategoryPicker = ({
	dataArray,
	selectHandler,
	selectedID,
}: {
	dataArray: TriviaCategory[];
	selectHandler: ChangeEventHandler<HTMLSelectElement>;
	selectedID: string;
}) => {
	return (
		<>
			<h4>Select a category</h4>
			<div className='my-3'>
				<select
					value={selectedID}
					onChange={selectHandler}
					className='form-select'
					aria-label='Default select example'>
					<option key='0' value='0'>
						All mixed up!
					</option>
					{dataArray.map((triviaCat) => (
						<option key={triviaCat.id} value={triviaCat.id}>
							{triviaCat.name}
						</option>
					))}
				</select>
			</div>
		</>
	);
};

export default CategoryPicker;
