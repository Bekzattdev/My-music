import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getSearch: build.query({
      query: (query: string) => ({
        url: `/search?q=${query}`,
        method: "GET",
      }),
      providesTags: ["search"],
    }),
  }),
});
export const { useGetSearchQuery } = api;
