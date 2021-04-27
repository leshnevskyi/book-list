import {ReactComponent as GoBackIcon} from 'assets/icons/go-back.svg';
import {ReactComponent as CloseIcon} from 'assets/icons/close.svg';
import {
	SnackbarWrapper,
	ButtonContainer,
	Button,
	CloseButton,
	Message,
} from './styled';

const Snackbar = ({type, message, onClose, onUndo}) => {
	return (
		<SnackbarWrapper type={type}>
			<Message>{message}</Message>
			<ButtonContainer>
				{onUndo && (
					<Button onClick={onUndo}>
						<GoBackIcon/>
					</Button>
				)}
				<CloseButton onClick={onClose}>
					<CloseIcon/>
				</CloseButton>
			</ButtonContainer>
		</SnackbarWrapper>
	);
}

export default Snackbar;