import {createSlice} from '@reduxjs/toolkit';

const initialSorting = {
	by: 'title',
	order: 'asc',
};

const bookSortingSlice = createSlice({
	name: 'bookSorting', 
	initialState: initialSorting,

	reducers: {
		changeSortingProperty: {
			reducer: (state, action) => {
				state.by = action.payload.by;
			},

			prepare: property => ({
				payload: {
					by: property,
				},
			}),
		},

		changeSortingOrder: {
			reducer: (state) => {
				state.order = state.order === 'asc' ? 'desc' : 'asc';
			},
		},
	},
});

const selectSortingProperty = state => state.bookSorting.by;

export {
	selectSortingProperty,
};

export const {
	changeSortingProperty,
	changeSortingOrder,
} = bookSortingSlice.actions;

export default bookSortingSlice.reducer;