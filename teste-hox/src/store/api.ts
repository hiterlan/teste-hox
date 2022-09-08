import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductAttributes, MyData, MyKnownError, MyID } from "./types";

export const getProducts = createAsyncThunk(
  "products/read",
  async (req, res) => {
    return fetch("http://localhost:3001/api/products/show").then((res) =>
      res.json()
    );
  }
);

export const createProduct = createAsyncThunk<
  MyData,
  ProductAttributes,
  {
    rejectValue: MyKnownError;
  }
>("products/create", async (product, thunkApi) => {
  const { name, price, dt_fabric, dt_validity } = product;
  const response = await fetch("http://localhost:3001/api/products/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({ name, price, dt_fabric, dt_validity }),
  });
  return (await response.json()) as MyData;
});

export const deleteProduct = createAsyncThunk<
  MyID,
  MyData,
  {
    rejectValue: MyKnownError;
  }
>("products/delete", async (id, thunkApi) => {
  const response = await fetch(`http://localhost:3001/api/products/${id}`, {
    method: "DELETE",
    mode: "cors",
    body: JSON.stringify(id),
  });
  return (await response.json()) as MyData;
});

export const updateProduct = createAsyncThunk<
  MyData,
  MyData,
  {
    rejectValue: MyKnownError;
  }
>("products/update", async (product, thunkApi) => {
  const { name, price, dt_fabric, dt_validity, id } = product;

  const response = await fetch(
    `http://localhost:3001/api/products/update/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ name, price, dt_fabric, dt_validity }),
    }
  );

  return (await response.json()) as MyData;
});
