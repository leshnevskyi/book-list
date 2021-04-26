import {atom} from 'recoil';

const navigationState = atom({
	key: 'navigationState',
	default: {
		isOpen: false,
	}
});

export {
	navigationState,
};