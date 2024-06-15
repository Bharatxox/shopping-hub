import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://real-time-amazon-data.p.rapidapi.com/",
    headers: {
      "x-rapidapi-key": "0404b73554msh76f0580f88bb7d3p1b3b5djsnbe6622d8da6a",
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
