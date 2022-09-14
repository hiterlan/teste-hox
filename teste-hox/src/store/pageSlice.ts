import { createSlice, isFulfilled } from "@reduxjs/toolkit";
import { SelectorPageType } from "./types";
import { createProduct } from "./api";

export const slice = createSlice({
  name: "page",
  initialState: {
    list: true,
    create: false,
    filter: false,
  },
  reducers: {
    toList(state) {
      return { ...state, list: true, create: false };
    },
    toCreate(state) {
      return { ...state, list: false, create: true };
    },
    toFilter(state) {
      return { ...state, filter: !state.filter };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createProduct.fulfilled, (state) => {
      return { ...state, list: true, create: false };
    });
  },
});
export const { toList, toCreate, toFilter } = slice.actions;

export const selectPage = (state: SelectorPageType) => state;

export const createIsTrue = (state: SelectorPageType) => state.page.create;

export const filterIsTrue = (state: SelectorPageType) => state.page.filter;

export default slice.reducer;
