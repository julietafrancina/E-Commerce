import { Item } from "../../models/Item.js";
import { Product } from "../../models/Product.js";

export const findItem = async (productId, cartId) => {
  let item = await Item.findOne({
    where: {
      productId: productId,
      cartId: cartId,
    },
  });
  item = item?.dataValues;
  return item;
};

export const findProduct = async (productId) => {
  let product = await Product.findByPk(productId);
  product = product?.dataValues;
  return product;
};

export const getProductName = (itemData) => {
  let itemNames = [];
  itemData.forEach(async (item) => {
    let productId = item.dataValues.productId;
    itemNames.push(await findProduct(item.dataValues.productId));
  });
  return itemNames;
};
