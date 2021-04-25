import {useDispatch} from 'react-redux';
import styled from 'styled-components';

import {changeSortingOrder} from '../book-list/bookSortingSlice';

import {
	ReactComponent as ChangeOrderIcon
} from '../../assets/icons/change-order.svg';

const Button = styled.button`
	height: var(--button-size);
	width: var(--button-size);
	background: none;

	& svg {
		height: 100%;
		width: 100%;
	}
`;

const ChangeOrderButton = () => {
	const dispatch = useDispatch();

	function handleClick() {
		dispatch(changeSortingOrder());
	}

	return (
		<Button 
			onClick={handleClick}
		>
			<ChangeOrderIcon/>
		</Button>
	);
}

export default ChangeOrderButton;