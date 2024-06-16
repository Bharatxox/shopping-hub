import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://real-time-amazon-data.p.rapidapi.com/",
    headers: {
      "x-rapidapi-key": "b39aefec0bmshfb02d91d4ec62d6p12e801jsn4c77c69bb84d",
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
