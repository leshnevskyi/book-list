import styled from 'styled-components';

import {ReactComponent as CloseIcon} from '../../assets/icons/close.svg';

const Button = styled.button`
	--bg: transparent;

	height: var(--button-size);
	width: var(--button-size);

	&:hover {
		--icon-color: rgb(var(--bright-red-500));
	}

	& svg {
		height: 100%;
		width: 100%;
	}
`;

const RemoveBookButton = props => {
	return (
		<Button {...props}>
			<CloseIcon/>
		</Button>
	);
}

export default RemoveBookButton;
