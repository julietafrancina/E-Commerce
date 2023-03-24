import app from "./app.js";
import { sequelize } from "./db/db.js";

async function connection() {
  try {
    await sequelize.sync({ force: false });
    app.listen(3000);
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
}

connection();
