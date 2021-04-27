import {useContext} from 'react';
import {v4 as uuidv4} from 'uuid';

import NotificationContext from '../notificationContext';

function useNotifications() {
	const [notifications, setNotifications] = useContext(NotificationContext);

	function addNotification(type, message, options) {
		setNotifications(notifications => {
			const id = uuidv4();
			const newNotification = {
				id,
				type,
				message,
				options,
			};

			return {
				...notifications,
				[id]: newNotification,
			};
		});
	}

	const notify = {
		info(message, options) {
			addNotification('info', message, options);
		},

		error(message, options) {
			addNotification('error', message, options);
		}
	};

	function removeNotification(notificationId) {
		setNotifications(notifications => {
			const newNotifications = {...notifications};
			delete newNotifications[notificationId];
			
			return newNotifications;
		});
	}

	return {
		notifications,
		notify,
		removeNotification,
	};
}

export {useNotifications};