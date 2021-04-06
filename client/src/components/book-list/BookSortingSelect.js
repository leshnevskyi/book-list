import {useState, useEffect} from 'react';
import {useSetRecoilState} from 'recoil';
import styled from 'styled-components';

import {bookSortingState} from '../../state/bookList';
import {bookProps} from '../../utils/validation';

import Arrow from '../shared/Arrow';
import { fromPairs } from 'lodash';

const Select = styled.div`
	position: relative;
	width: 14em;
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

const ArrowButton = styled(Arrow).attrs({el: 'button'})`
	position: absolute;
	right: 0;
	height: 100%;
	width: 5em;
	justify-content: flex-end;
`;

const options = bookProps.map(prop => ({
	value: prop.name,
	description: prop.label ?? prop.name,
}));

const optionCount = options.length;

const BookSortingSelect = () => {
	const [optionIndex, setOptionIndex] = useState(0);
	const option = options[optionIndex];
	const setSortingState = useSetRecoilState(bookSortingState);

	useEffect(() => {
		setSortingState(state => ({...state, by: option.value}));
	}, [option, setSortingState]);

	function handleClick() {
		setOptionIndex(prevIndex => ++prevIndex % optionCount);
	}

	return (
		<Select>
			sort by&nbsp;
			<Option>
				{option.description}
			</Option>
			<ArrowButton
				direction='right'
				onClick={handleClick}
			/>
		</Select>
	);
}

export default BookSortingSelect;