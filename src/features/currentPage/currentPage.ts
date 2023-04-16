import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CurPageState {
  page: string;
}

const initialState: CurPageState = {
  page: '/',
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    updatePage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
  },
});

export const { updatePage } = pageSlice.actions;
export const selectCurPage = (state: RootState) => state.curPage.page;

export default pageSlice.reducer;
