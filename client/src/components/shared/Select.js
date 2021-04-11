import {useState, useEffect, useMemo} from 'react';
import styled from 'styled-components';

import DoublyLinkedList from '../../utils/doublyLinkedList';

import Arrow from './Arrow';

const SelectWrapper = styled.div`
	position: relative;
	height: var(--default-input-height);
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1em;
	background-color: transparent;
	border-bottom: var(--default-stroke-width) solid rgb(var(--cold-grey-500));
`;

const Label = styled.span`
	color: rgb(var(--cold-grey-100));
`;

const SelectInputWrapper = styled.div`
	position: relative;
	height: 100%;
	width: calc(${({maxLabelLength}) => maxLabelLength}ch + 3em);
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ArrowButton = styled(Arrow).attrs({el: 'button'})`
	position: relative;
`;

const Option = styled.span`
	color: rgb(var(--white));
	font-weight: 700;
`;

const Select = ({label, options, defaultOption, onChange}) => {
	const maxLabelLength = Math.max(...options.map(({label}) => {
		return label.length;
	})); 

	const optionList = useMemo(() => {
		return new DoublyLinkedList(...options)
	}, [options]);

	const [selectedOption, setSelectedOption] = useState(
		optionList.find(option => option.data.label === defaultOption.label) 
		?? optionList.head
	);

	useEffect(() => {
		onChange(selectedOption.data);
	}, [selectedOption]);

	function selectPrevOption() {
		setSelectedOption(prevOption => prevOption.prev);
	}

	function selectNextOption() {
		setSelectedOption(prevOption => prevOption.next);
	}

	return (
		<SelectWrapper>
			{label && <Label>{label}</Label>}
			<SelectInputWrapper
				maxLabelLength={maxLabelLength}
			>
				<ArrowButton 
					direction='left'
					onClick={selectPrevOption}
					disabled={!selectedOption.prev}
				/>
				<Option>{selectedOption.data.label}</Option>
				<ArrowButton 
					direction='right'
					onClick={selectNextOption}
					disabled={!selectedOption.next}
				/>
			</SelectInputWrapper>
		</SelectWrapper>
	)
}

export default Select;