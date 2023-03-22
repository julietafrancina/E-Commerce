import express from "express";
import productRoutes from "./routes/product/product.routes.js";
import cartRoutes from "./routes/cart/cart.routes.js";
import itemRoutes from "./routes/item/item.routes.js";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const buildPath = path.join(__dirname, "build");

app.use(cors({ origin: "http://localhost:3001" }));

app.use(express.static(buildPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(3001, () => {
  console.log("Servidor iniciado en http://localhost:3001");
});

app.use(express.json());
app.use(productRoutes);
app.use(cartRoutes);
app.use(itemRoutes);

export default app;
