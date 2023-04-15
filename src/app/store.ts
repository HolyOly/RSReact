import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import searchTextReducer from '../features/searchQuery/search';
import pageReducer from '../features/currentPage/currentPage';
import formDataReducer from '../features/formCards/formData';

export const store = configureStore({
  reducer: {
    searchInput: searchTextReducer,
    curPage: pageReducer,
    formData: formDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
