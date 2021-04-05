import styled from 'styled-components';

import {ReactComponent as ArrowIcon} from '../../assets/icons/arrow.svg';

const Wrapper = styled.div`
	--bg: transparent;
	--icon-color: rgb(var(--cold-grey-100));

	display: flex;
	justify-content: center;
	align-items: center;

	&:not(:disabled):hover {
		--icon-color: rgb(var(--white));
	}

	& svg {
		--default-size: 1.5em;

		height: var(--icon-size, var(--default-size));
		width: var(--icon-size, var(--default-size));
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
	}
`;

export default ({el, ...restProps}) => {
	return (
		<Wrapper as={el} {...restProps}>
			<ArrowIcon/>
		</Wrapper>
	);
}