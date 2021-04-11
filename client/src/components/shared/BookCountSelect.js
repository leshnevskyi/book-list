import {useRecoilState, useRecoilValue} from 'recoil';

import {bookCountState} from '../../state/bookList';
import {bookListState} from '../../state/bookList';

import Select from './Select';

const BookCountSelect = () => {
	const [bookCount, setBookCount] = useRecoilState(bookCountState);
	const minBookCount = 1;
	const maxBookCount = useRecoilValue(bookListState).length - 1;

	const options = [...new Array(maxBookCount).fill().map((_, index) => {
		const value = minBookCount + index;

		return {
			value,
			label: value.toString(),
		};
	}), {value: Infinity, label: 'all'}];

	const defaultOption = options.find(option => {
		return option.value == bookCount;
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