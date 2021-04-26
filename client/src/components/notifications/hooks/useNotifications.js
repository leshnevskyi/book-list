import {useRecoilState} from 'recoil';
import {v4 as uuidv4} from 'uuid';

import {notificationState} from '../state/notifications';

function useNotifications() {
	const [notifications, setNotifications] = useRecoilState(notificationState);

	function addNotification(type, message) {
		setNotifications(notifications => {
			const id = uuidv4();
			const newNotification = {
				id,
				type,
				message,
			};

			return {
				...notifications,
				[id]: newNotification,
			};
		});
	}

	const notify = {
		info(message) {
			addNotification('info', message);
		},

		error(message) {
			addNotification('error', message);
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