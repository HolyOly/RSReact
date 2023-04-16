import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonServerApi = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.unsplash.com/search/`,
  }),
  endpoints: (builder) => ({
    getAlbums: builder.query<IFullFetchData, ISearchParams>({
      query: ({ curPage = 1, query = '', sorting = 'relevant' }) =>
        `photos?client_id=${
          import.meta.env.VITE_ACCESS_KEY
        }&page=${curPage}&query=${query}&order_by=${sorting}&per_page=12`,
    }),
  }),
});

export const { useGetAlbumsQuery } = jsonServerApi;
