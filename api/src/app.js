import express from "express";
import productRoutes from "./routes/product/product.routes.js";
import cartRoutes from "./routes/cart/cart.routes.js";
import itemRoutes from "./routes/item/item.routes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3001",
  })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());
app.use(productRoutes);
app.use(cartRoutes);
app.use(itemRoutes);

export default app;
