import {createSlice} from '@reduxjs/toolkit';

const initialFilters = {
	maxCount: Infinity,
}

const bookFilteringSlice = createSlice({
	name: 'bookFiltering',
	initialState: initialFilters,

	reducers: {
		changeMaxCount: {
			reducer: (state, action) => {
				state.maxCount = action.payload.maxCount;
			},

			prepare: maxCount => ({
				payload: {
					maxCount,
				}
			}),
		},
	},
});

const selectMaxCount = state => state.bookFiltering.maxCount;

export {
	selectMaxCount,
};

export const {
	changeMaxCount,
} = bookFilteringSlice.actions;

export default bookFilteringSlice.reducer;