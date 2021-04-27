import {useState} from 'react';

import NotificationContext from '../../notificationContext';
import NotificationList from '../NotificationList';

const NotificationProvider = ({children}) => {
	const [notifications, setNotifications] = useState({});
	const value = [notifications, setNotifications];

	return (
		<NotificationContext.Provider value={value}>
			{children}
			<NotificationList/>
		</NotificationContext.Provider>
	);
}

export default NotificationProvider;