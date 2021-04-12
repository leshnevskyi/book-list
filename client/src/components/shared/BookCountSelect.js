import {useSetRecoilState, useRecoilValue} from 'recoil';

import {bookCountState} from '../../state/bookList';
import {bookListState} from '../../state/bookList';

import Select from './Select';

const BookCountSelect = () => {
	const setBookCount = useSetRecoilState(bookCountState);
	const minBookCount = 1;
	const maxBookCount = Math.max(
		useRecoilValue(bookListState).length - 1, minBookCount
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
	
	function changeBookCount(selectedOption) {
		setBookCount(selectedOption.value);
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