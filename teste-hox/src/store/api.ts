import { createAsyncThunk, ThunkDispatch } from "@reduxjs/toolkit";
import { setProductsPerPage } from "./productsSlice";
import {
  ProductAttributes,
  MyKnownError,
  MyID,
  Product,
  MyData,
} from "./types";
import { AppDispatch } from ".";

export const getProducts = createAsyncThunk("products/read", async () => {
  const res = await fetch("http://localhost:3001/api/products/show", {
    method: "GET",
    mode: "cors",
  });
  return res.json();
});

export const setCards = () => async (dispatch: AppDispatch) => {
  await dispatch(getProducts());
  return await dispatch(setProductsPerPage());
};

//use it like this

export const createProduct = createAsyncThunk<
  Product,
  ProductAttributes,
  {
    rejectValue: MyKnownError;
  }
>("products/create", async (product, thunkApi) => {
  const response = await fetch("http://localhost:3001/api/products/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(product),
  });
  return (await response.json()) as Product;
});

export const deleteProduct = createAsyncThunk<
  MyID,
  Product,
  {
    rejectValue: MyKnownError;
  }
>("products/delete", async (id, thunkApi) => {
  const response: Response = await fetch(
    `http://localhost:3001/api/products/${id}`,
    {
      method: "DELETE",
      mode: "cors",
    }
  );
  return (await response.json()) as Product;
});

export const updateProduct = createAsyncThunk<
  MyData,
  MyData,
  {
    rejectValue: MyKnownError;
  }
>("products/update", async (product, thunkApi) => {
  const response = await fetch(
    `http://localhost:3001/api/products/update/${product.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(product),
    }
  );
  return (await response.json()) as MyData;
});

export const searchProducts = createAsyncThunk<
  Array<Product>,
  String,
  {
    rejectValue: MyKnownError;
  }
>("products/search", async (name, thunkApi) => {
  const response = await fetch(
    `http://localhost:3001/api/products/search/${name}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    }
  );
  return await response.json();
});
