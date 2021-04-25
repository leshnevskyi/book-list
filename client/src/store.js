import {configureStore} from '@reduxjs/toolkit';

import bookListReducer from 'components/book-list/bookListSlice';
import bookSortingReducer from 'components/book-list/bookSortingSlice';
import bookFilteringReducer from 'components/book-list/bookFilteringSlice';

const store = configureStore({
	reducer: {
		bookList: bookListReducer,
		bookSorting: bookSortingReducer,
		bookFiltering: bookFilteringReducer,
	},
});

export default store;