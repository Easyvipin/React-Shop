import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import connectDb from "./config/connectDb.js";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import router from "./routes/productRoutes.js";
const app = express();

app.use("/api/products", router);
dotenv.config();
connectDb();
app.get("/", (req, res) => {
  res.send("Api is running");
});
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running on ${process.env.NODE_ENV} mode at 5000`);
});
