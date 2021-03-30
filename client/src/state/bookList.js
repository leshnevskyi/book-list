import {atom, selector} from 'recoil';

import initialBookList from '../data/books.json';
import {sortObjects} from '../utils/sort';

const bookListState = atom({
	key: 'bookListState',
	default: initialBookList,
});

const bookSortingState = atom({
	key: 'bookSortingState',
	default: {
		by: 'author',
		order: 'asc',
	},
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
}