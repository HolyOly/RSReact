import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface SearchTextState {
  value: string;
}

const initialState: SearchTextState = {
  value: '',
};

export const searchTextSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { update } = searchTextSlice.actions;
export const selectSearchText = (state: RootState) => state.searchInput.value;

export default searchTextSlice.reducer;
