import {useSetRecoilState} from 'recoil';
import styled from 'styled-components';

import {bookSortingState} from '../../state/bookList';

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
	const setSorting = useSetRecoilState(bookSortingState);

	function handleClick() {
		setSorting(prevState => ({
			...prevState,
			order: prevState.order == 'asc' 
				? 'desc' 
				: prevState.order == 'desc'
				? 'asc'
				: null,
		}));
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