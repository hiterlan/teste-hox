import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  Product,
  SelectorProductsType,
  ProductSliceState,
  OrderProductsFunction,
  ProductAttributes,
} from "./types";
import { checkPerishable, OrderProducts } from "../utils/filterScripts";
import { getProducts, deleteProduct, createProduct } from "./api";

const limit = 10;
const initialState: ProductSliceState = {
  products: [],
  order: (product: Product, product_: Product) => 0,
  firstSmaller: true,
  includeNotPerishables: true,
  pagenation: 1,
  productsPerPage: [],
  status: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProduct: (state, action) => {
      switch (action.payload) {
        case "":
          return {
            ...state,
            productsPerPage: state.products.slice(
              (state.pagenation - 1) * limit,
              state.pagenation * limit
            ),
          };
        case action.payload:
          return {
            ...state,
            productsPerPage: state.products
              .filter((p) => p.name.includes(action.payload))
              .slice((state.pagenation - 1) * limit, state.pagenation * limit),
          };
        default:
          return { ...state };
      }
    },
    setProductsOrder: (
      state,
      { payload: order }: PayloadAction<OrderProductsFunction>
    ) => {
      state.products = state.products.sort(order);
    },
    setProductsPerPage(state) {
      const productsPerPage = state.includeNotPerishables
        ? state.products.slice(
            (state.pagenation - 1) * limit,
            state.pagenation * limit
          )
        : state.products
            .filter(checkPerishable)
            .slice((state.pagenation - 1) * limit, state.pagenation * limit);
      const pagenation =
        state.productsPerPage.length >= 0 ? state.pagenation : 1;

      return {
        ...state,
        productsPerPage: productsPerPage,
        pagenation: pagenation,
      };
    },
    setFirst(state) {
      const firstSmaller = !state.firstSmaller;
      return { ...state, firstSmaller: firstSmaller };
    },
    setPagenation(state, action) {
      return {
        ...state,
        pagenation: action.payload,
      };
    },
    setincludeNotPerishables(state) {
      switch (state.includeNotPerishables) {
        case true: {
          return {
            ...state,
            productsPerPage: state.products.slice(
              (state.pagenation - 1) * limit,
              state.pagenation * limit
            ),
            includeNotPerishables: !state.includeNotPerishables,
          };
        }
        case false: {
          return {
            ...state,
            productsPerPage: state.products
              .filter(checkPerishable)
              .slice((state.pagenation - 1) * limit, state.pagenation * limit),
            includeNotPerishables: !state.includeNotPerishables,
          };
        }
      }
    },
    removeProduct: (state, action) => {
      const productsFiltered = state.products.filter(
        (product) => product.id !== action.payload.id
      );

      return { ...state, products: productsFiltered };
    },
    setProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products[index].name = action.payload.name;
      state.products[index].price = action.payload.price;
      state.products[index].dt_fabric = action.payload.dt_fabric;
      state.products[index].dt_validity = action.payload.dt_validity;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.status = "Recebendo";
    }),
      builder.addCase(getProducts.fulfilled, (state, action) => {
        state.status = "Recebido";
        state.products = action.payload;
        state.products = state.products.sort(OrderProducts.byName);

        state.productsPerPage = state.includeNotPerishables
          ? state.products.slice(
              (state.pagenation - 1) * limit,
              state.pagenation * limit
            )
          : state.products
              .filter(checkPerishable)
              .slice((state.pagenation - 1) * limit, state.pagenation * limit);
      });
  },
});
export const productsPerPage = (state: SelectorProductsType) =>
  state.products.productsPerPage;

export const products = (state: SelectorProductsType) =>
  state.products.products;
export const includesPerishables = (state: SelectorProductsType) =>
  state.products.includeNotPerishables;

export const firstSmaller = (state: SelectorProductsType) =>
  state.products.firstSmaller;

export const {
  setProductsPerPage,
  setProductsOrder,
  setPagenation,
  setincludeNotPerishables,
  setFirst,
  removeProduct,
  setProduct,
  searchProduct,
} = productsSlice.actions;

export const productsQt = (state: SelectorProductsType) =>
  state.products.includeNotPerishables
    ? state.products.products.length
    : state.products.products.filter(checkPerishable).length;

export default productsSlice.reducer;
