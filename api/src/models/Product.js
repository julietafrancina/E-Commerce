import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";
import { Item } from "./Item.js";
import { Cart } from "./Cart.js";

export const Product = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

Product.hasMany(Item);
Item.belongsTo(Product);
Cart.hasMany(Item);
Item.belongsTo(Cart);
