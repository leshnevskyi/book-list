import {atom} from 'recoil';

const notificationState = atom({
	key: 'notificationState',
	default: {},
});

export {
	notificationState,
};