import {useDispatch, useSelector} from 'react-redux';

import {selectBookCount} from '../book-list/bookListSlice';
import {changeMaxCount} from '../book-list/bookFilteringSlice';

import Select from './Select';

const BookCountSelect = () => {
	const bookCount = useSelector(selectBookCount);
	const minBookCount = 1;
	const maxBookCount = Math.max(
		bookCount - 1, minBookCount
	);

	const options = [...new Array(maxBookCount).fill().map((_, index) => {
		const value = minBookCount + index;

		return {
			value,
			label: value.toString(),
		};
	}), {value: Infinity, label: 'all'}];

	const defaultOption = options.find(option => {
		return option.value === Infinity;
	});

	const dispatch = useDispatch();
	
	function changeBookCount(selectedOption) {
		dispatch(changeMaxCount(selectedOption.value));
	}

	return (
		<Select
			defaultOption={defaultOption}
			options={options}
			label='books per page'
			onChange={changeBookCount}
		/>
	);
}

export default BookCountSelect;