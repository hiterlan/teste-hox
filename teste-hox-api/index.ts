import express, { Request, Response } from "express";
import cors from "cors";

import Create from "./src/CRUD/Create";
import Read from "./src/CRUD/Read";
import Update from "./src/CRUD/Update";
import Delete from "./src/CRUD/Delete";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/products/create", async (req: Request, res: Response) => {
  const { name, price, dt_fabric, dt_validity } = req.body;

  res.send(await Create(name, price, dt_fabric, dt_validity));
});

app.get("/api/products/show", async (req: Request, res: Response) => {
  res.send(await Read());
});

app.put("/api/products/update/:id", async (req: Request, res: Response) => {
  const { name, dt_fabric, dt_validity, price } = req.body;
  const id = parseInt(req.params.id);

  res.send(await Update(name, price, dt_fabric, dt_validity, id));
});

app.delete("/api/products/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  res.send(await Delete(id));
});

app.listen(3001, () => {
  console.log("Server Running");
});
