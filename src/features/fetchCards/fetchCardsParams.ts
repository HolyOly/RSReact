import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState: ISearchParams = {
  curPage: 1,
  query: '',
  sorting: 'relevant',
};

export const fetchParamsSlice = createSlice({
  name: 'fetchParams',
  initialState,
  reducers: {
    updateCurPage: (state, action: PayloadAction<number>) => {
      state.curPage = action.payload;
    },
    updateQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    updateSorting: (state, action: PayloadAction<string>) => {
      state.sorting = action.payload;
    },
  },
});

export const { updateCurPage, updateQuery, updateSorting } = fetchParamsSlice.actions;
export const selectFetchParams = (state: RootState) => state.searchParams;

export default fetchParamsSlice.reducer;
