import {atom} from 'recoil';

import initialBookList from '../data/books.json';

const bookListState = atom({
	key: 'bookListState',
	default: initialBookList,
});

export {
	bookListState,
}