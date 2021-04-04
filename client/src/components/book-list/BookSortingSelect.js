import {useState, useEffect} from 'react';
import {useSetRecoilState} from 'recoil';
import styled from 'styled-components';

import {bookSortingState} from '../../state/bookList';

const Select = styled.button`
	width: 15em;
	display: flex;
	justify-content: start;
	align-items: center;
	background-color: transparent;
	border-bottom: var(--default-stroke-width) solid rgb(var(--cold-grey-500));
`;

const Option = styled.span`
	color: rgb(var(--white));
	font-weight: 700;
`;

const options = [
	{value: 'title'},
	{value: 'author'},
	{value: 'year'},
	{
		description: 'number of pages',
		value: 'pageCount',
	},
	{value: 'price'},
];

const optionCount = options.length;

export default () => {
	const [optionIndex, setOptionIndex] = useState(0);
	const option = options[optionIndex];
	const setSortingState = useSetRecoilState(bookSortingState);

	useEffect(() => {
		setSortingState(state => ({...state, by: option.value}));
	}, [option]);

	function handleClick() {
		setOptionIndex(prevIndex => ++prevIndex % optionCount);
	}

	return (
		<Select onClick={handleClick}>
			sort by&nbsp;
			<Option>
				{option.description ?? option.value}
			</Option>
		</Select>
	);
}