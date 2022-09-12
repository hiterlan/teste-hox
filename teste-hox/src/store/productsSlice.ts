import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  Product,
  SelectorProductsType,
  ProductSliceState,
  OrderProductsFunction,
} from "./types";

import {
  getProducts,
  searchProducts,
  updateProduct,
  deleteProduct,
} from "./api";

const limit = 10;
const initialState: ProductSliceState = {
  products: [],
  order: (product: Product, product_: Product) => 0,
  firstSmaller: true,
  status: "inicial",
  pagenation: 1,
  productsPerPage: [],
  isSearching: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchingProduct: (state, action) => {
      switch (action.payload) {
        case "":
          return {
            ...state,
            isSearching: false,
            status: "Parando Pesquisa",
          };
        default:
          return {
            ...state,
            isSearching: true,
            status: "Pesquisando " + action.payload,
          };
      }
    },
    setProductsOrder: (
      state,
      { payload: order }: PayloadAction<OrderProductsFunction>
    ) => {
      (state.products = state.products.sort(order)),
        (state.order = order),
        (state.status = "Mudando OrderBy para " + order.name);
    },
    setProductsPerPage(state) {
      const pagenation =
        state.productsPerPage.length === 1 &&
        state.status.includes("Produto Excluído")
          ? 1
          : state.pagenation;

      const productsPerPage = state.products.slice(
        (pagenation - 1) * limit,
        pagenation * limit
      );

      return {
        ...state,
        productsPerPage: productsPerPage,
        pagenation: pagenation,
      };
    },
    setFirst(state) {
      const firstSmaller = !state.firstSmaller;
      return {
        ...state,
        firstSmaller: firstSmaller,
        status: "Ordenando FirstSmaller " + firstSmaller,
      };
    },
    setPagenation(state, action) {
      return {
        ...state,
        pagenation: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = !state.isSearching ? action.payload : state.products;
      state.products.sort(state.order);
    });
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.products = state.isSearching ? action.payload : state.products;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.status = "Produto Editado";
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.status = "Produto Excluído " + action.payload.id;
    });
  },
});
export const productsPerPage = (state: SelectorProductsType) =>
  state.products.productsPerPage;

export const status = (state: SelectorProductsType) => state.products.status;

export const firstSmaller = (state: SelectorProductsType) =>
  state.products.firstSmaller;

export const {
  setProductsPerPage,
  setProductsOrder,
  setPagenation,
  setFirst,
  searchingProduct,
} = productsSlice.actions;

export const productsQt = (state: SelectorProductsType) =>
  state.products.products.length;

export default productsSlice.reducer;
