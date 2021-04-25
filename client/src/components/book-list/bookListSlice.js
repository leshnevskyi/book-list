import {createSlice, nanoid} from '@reduxjs/toolkit';

import initialBookList from 'data/books.json';
import {getValidBooks, normalizeBookData} from 'utils/validation';
import {sortObjects} from 'utils/sorting';

const bookListSlice = createSlice({
	name: 'bookList',
	initialState: getValidBooks(initialBookList),

	reducers: {
		addBook: {
			reducer: (state, action) => {
				state.push(action.payload);
			},

			prepare: bookData => ({
				payload: {
					id: nanoid(),
					...normalizeBookData(bookData),
				},
			}),
		},

		removeBook: {
			reducer: (state, action) => {
				return state.filter(book => book.id !== action.payload.id);
			},

			prepare: bookId => ({
				payload: {
					id: bookId,
				},
			}),
		},
	},
});

const selectBooks = state => state.bookList;

const selectSortedBooks = state => {
	return sortObjects(state.bookList, state.bookSorting);
}

const selectBookListIsEmpty = state => !state.bookList.length;
const selectBookCount = state => state.bookList.length;

export {
	selectBooks,
	selectSortedBooks,
	selectBookListIsEmpty,
	selectBookCount,
};

export const {
	addBook, 
	removeBook,
} = bookListSlice.actions;

export default bookListSlice.reducer;