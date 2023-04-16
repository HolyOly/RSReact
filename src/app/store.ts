import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import searchTextReducer from '../features/searchQuery/search';
import pageReducer from '../features/currentPage/currentPage';
import formDataReducer from '../features/formCards/formData';
import searchParamsReducer from '../features/fetchCards/fetchCardsParams';
import { jsonServerApi } from '../app/services/apiCards';

export const store = configureStore({
  reducer: {
    searchInput: searchTextReducer,
    curPage: pageReducer,
    formData: formDataReducer,
    searchParams: searchParamsReducer,
    [jsonServerApi.reducerPath]: jsonServerApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonServerApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
