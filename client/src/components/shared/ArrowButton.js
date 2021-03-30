import styled from 'styled-components';

import {ReactComponent as ArrowIcon} from '../../assets/icons/arrow.svg';

const Button = styled.button`
	--bg: transparent;
	--icon-color: rgb(var(--cold-grey-100));

	height: var(--button-size);
	width: var(--button-size);
	transform: rotate(${props => {
		switch(props.direction) {
			case 'top':
				return 0;
			case 'right':
				return 90;
			case 'bottom':
				return 180;
			case 'left':
				return 270;
			default:
				return 0;
		}
	}}deg);

	&:not(:disabled):hover {
		--icon-color: rgb(var(--white));
	}

	& svg {
		height: 100%;
		width: 100%;
	}
`;

const ArrowButton = props => {
	return (
		<Button {...props}>
			<ArrowIcon/>
		</Button>
	);
}

export default ArrowButton;