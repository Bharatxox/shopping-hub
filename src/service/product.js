import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const products = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://real-time-amazon-data.p.rapidapi.com/",
    headers: {
      "x-rapidapi-key": "534014e1dcmsh9d1aee8138689c4p1ef201jsndc017eb2788b",
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  }),
  endpoints: (builder) => ({
    // productOffer: builder.query({
    //   query: () => "product-offers",
    // }),
    productDetail: builder.query({
      query: (asin) => `product-details?asin=${asin}&country=IN`,
    }),
    deals: builder.query({
      query: () => "deals-v2?country=IN",
    }),
    productSearch: builder.query({
      query: (query) => `search?query=${query}&page=1&country=IN`,
    }),
    productCategory: builder.query({
      query: (category) =>
        `best-sellers?category=${category}&type=BEST_SELLERS&page=1&country=IN`,
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useSearchMoviesQuery,
  useUpcomingMoviesQuery,
  useConfigurationQuery,
} = popularMoviesApi;
