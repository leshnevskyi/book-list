import styled from 'styled-components';

import {ReactComponent as CloseIcon} from '../../assets/icons/close.svg';

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

	& svg {
		height: var(--button-size);
		width: var(--button-size);
		cursor: pointer;
	}
`;

const Message = styled.span`
	color: rgb(var(--white));
	font-weight: 700;
`;

const Snackbar = ({type, message, onClose}) => {
	return (
		<SnackbarWrapper type={type}>
			<Message>{message}</Message>
			<CloseIcon onClick={onClose}/>
		</SnackbarWrapper>
	);
}

export default Snackbar;