import styled from 'styled-components';

const SnackbarWrapper = styled.div`
	--snackbar-height: 6.25rem;
	--border-color: ${props => {
		return props.type === 'error'
			? 'rgb(var(--bright-red-500))'
			: 'rgb(var(--cold-grey-100))';
		}
	};
	--button-size: 3rem;

	height: var(--snackbar-height);
	width: clamp(15em, 26vw, 25em);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1.3em;
	background: rgba(var(--cold-grey-500), 0.7);
	border-bottom: var(--default-stroke-width) solid var(--border-color);
	backdrop-filter: blur(7px);
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 3rem;
`;

const Button = styled.button.attrs({type: 'button'})`
	--icon-color: rgb(var(--cold-grey-100));
	--highlight-color: rgb(var(--white));

	height: var(--button-size);
	width: var(--button-size);
	background: none;

	&:hover {
		--icon-color: var(--highlight-color);
	}

	& svg {
		height: 100%;
		width: 100%;
		stroke: var(--icon-color);
	}
`;

const CloseButton = styled(Button)`
	--highlight-color: rgb(var(--bright-red-500));
`;

const Message = styled.span`
	color: rgb(var(--white));
	font-weight: 700;
`;

export {
	SnackbarWrapper,
	ButtonContainer,
	Button,
	CloseButton,
	Message,
};