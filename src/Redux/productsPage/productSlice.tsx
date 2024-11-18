import { apiSlice } from "../features/ApiSlice";
const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    AllProducts: builder.query({
      query: () => ({
        url: "/readAllProducts",
        method: "GET",
      }),
    }),
    Carts: builder.query({
      query: (userId) => ({
        url:`/getcart/${userId}`,
        method: "GET",
      }),
    }),
    Wishlists: builder.query({
      query: (userId) => ({
        url: `/toWishlist/${userId}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useAllProductsQuery, useCartsQuery, useWishlistsQuery } = productApiSlice;
export default productApiSlice;
