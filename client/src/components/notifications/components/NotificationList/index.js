import {useNotifications} from '../../hooks/useNotifications';

import {
	NotificationContainer
} from './styled';
import Snackbar from '../Snackbar';

const NotificationList = () => {
	const {notifications, notify, removeNotification} = useNotifications();

	const renderedNotifications = Object.values(notifications)
		.map(({id, type, message, options}) => {
			const handleClose = () => {
				options?.onClose && options.onClose();
				removeNotification(id);
			}

			let handleUndo;

			if (options?.onUndo) {
				handleUndo = () => {
					options.onUndo();
					removeNotification(id);
					notify.info('Book restored');
				}
			}

			return (
				<Snackbar 
					key={id} 
					type={type} 
					message={message}
					onClose={handleClose}
					onUndo={handleUndo}
				/>
			);
		});

	return (
		<NotificationContainer>
			{renderedNotifications}
		</NotificationContainer>
	);
}

export default NotificationList;