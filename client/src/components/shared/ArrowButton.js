import styled from 'styled-components';

import {ReactComponent as ArrowIcon} from '../../assets/icons/arrow.svg';

const Button = styled.button`
	--bg: transparent;

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