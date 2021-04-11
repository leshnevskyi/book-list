import {atom, selector} from 'recoil';

import initialBookList from '../data/books.json';
import {sortObjects} from '../utils/sorting';
import {getValidBooks} from '../utils/validation';

const bookListState = atom({
	key: 'bookListState',
	default: getValidBooks(initialBookList),
});

const bookSortingState = atom({
	key: 'bookSortingState',
	default: {
		by: 'title',
		order: 'asc',
	},
});

const bookCountState = atom({
	key: 'bookCountState',
	default: 5,
});

const sortedBookListState = selector({
	key: 'sortedBookListState',

	get: ({get}) => {
		const bookList = get(bookListState);
		const sorting = get(bookSortingState);
		const sortedBookList = sortObjects(bookList, sorting);

		return sortedBookList;
	},
});

export {
	bookListState,
	bookSortingState,
	sortedBookListState,
	bookCountState,
};