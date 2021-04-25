import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
	changeSortingProperty, 
	selectSortingProperty,
} from '../book-list/bookSortingSlice';
import {bookProps} from 'utils/validation';

import Select from './Select';

const options = Object.values(bookProps).map(prop => ({
	name: prop.name,
	label: prop.shortLabel ?? prop.label ?? prop.name,
}));

const BookSortingSelect = () => {
	const sortingProperty = useSelector(selectSortingProperty);
	const defaultOption = options.find(option => option.name === sortingProperty);
	const dispatch = useDispatch();

	function changeSorting(selectedOption) {
		dispatch(changeSortingProperty(selectedOption.name));
	}

	const handleChange = useCallback(changeSorting, [dispatch]);

	return (
		<Select
			defaultOption={defaultOption}
			options={options}
			label='sort by'
			onChange={handleChange}
		/>
	);
}

export default BookSortingSelect;