import {useSetRecoilState} from 'recoil';

import {bookSortingState} from '../../state/bookList';
import {bookProps} from '../../utils/validation';

import Select from './Select';

const options = Object.values(bookProps).map(prop => ({
	name: prop.name,
	label: prop.shortLabel ?? prop.label ?? prop.name,
}));

const BookSortingSelect = () => {
	const label = 'sort by';
	const defaultOption = options.find(option => option.name == 'title');
	const setSortingState = useSetRecoilState(bookSortingState);

	function changeSorting(selectedOption) {
		setSortingState(state => ({...state, by: selectedOption.name}));
	}

	return (
		<Select
			defaultOption={defaultOption}
			options={options}
			label={label}
			onChange={changeSorting}
		/>
	);
}

export default BookSortingSelect;