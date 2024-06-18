import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://real-time-amazon-data.p.rapidapi.com/",
    rateLimit: {
      max: 5, // Maximum number of requests per second
      timeWindow: 1000, // Time window in milliseconds
    },
    headers: {
      "x-rapidapi-key": "6fb3df6cc1mshe55c8d853b195bbp1b7cacjsn0e6c476385b8",
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  }),
  endpoints: (builder) => ({
    productDetail: builder.query({
      query: (search) => `product-details?asin=${search}&country=IN`,
    }),
    deals: builder.query({
      query: () => "deals-v2?country=IN",
    }),
    productSearch: builder.query({
      query: (args) => {
        const { search, page = 1 } = args;
        return {
          url: `search?query=${search}&page=${page}&country=IN`,
        };
      },
    }),
    productCategory: builder.query({
      query: (category) =>
        `best-sellers?category=${category}&type=BEST_SELLERS&page=1&country=IN`,
    }),
  }),
});

export const {
  useDealsQuery,
  useProductDetailQuery,
  useProductSearchQuery,
  useProductCategoryQuery,
} = productsApi;
