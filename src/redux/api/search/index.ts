import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getSearch: build.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["search"],
    }),
  }),
});
export const { useGetSearchQuery } = api;
