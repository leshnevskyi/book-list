import styled from 'styled-components';

import {useNotifications} from './hooks/useNotifications';

import Snackbar from './Snackbar';

const NotificationContainer = styled.div`
	position: fixed;
	bottom: var(--v-padding);
	right: var(--h-padding);
	display: flex;
	flex-direction: column-reverse;
	gap: 2.5rem;
`;

const NotificationProvider = ({children}) => {
	const {notifications, removeNotification} = useNotifications();

	const renderedNotifications = Object.values(notifications)
		.map(({id, type, message}) => {
			const onClose = () => {
				removeNotification(id);
			}

			return (
				<Snackbar 
					key={id} 
					type={type} 
					message={message}
					onClose={onClose}
				/>
			);
		});

	return (
		<>
			{children}
			<NotificationContainer>
				{renderedNotifications}
			</NotificationContainer>
		</>
	);
}

export default NotificationProvider;