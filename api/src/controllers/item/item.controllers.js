import { Item } from "../../models/Item.js";
import { findItem, findProduct } from "../helpers/helpers.js";

export const getAllItems = async (req, res) => {
  try {
    const itemData = await Item.findAll();

    if (!itemData) {
      throw new Error(`Sorry, there are no products in the cart.`);
    }
    res.status(200).json(itemData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const itemData = await Item.findOne({
      where: {
        id: id,
      },
    });
    if (!itemData) {
      throw new Error(
        `Sorry, there are no products with the id ${id} in the cart.`
      );
    }
    res.status(200).json(itemData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createItem = async (req, res) => {
  try {
    const { productId, quantity, name, cartId } = req.body;
    const product = await findProduct(productId);
    let total;
    if (product !== "null") {
      total = product.price * quantity;
    } else {
      throw new Error(
        `There is not an available product with the id ${productId}`
      );
    }
    const verify = await findItem(productId, cartId);
    if (verify) {
      await Item.update(
        {
          productId,
          quantity,
          name,
          total,
          cartId,
        },
        { where: { id: verify.id } }
      );
    } else {
      await Item.create({
        productId,
        quantity,
        name,
        total,
        cartId,
      });
    }

    res.status(200).json("Your product has been successfully created!");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    await Item.destroy({
      where: {
        id: id,
      },
    });

    res
      .status(200)
      .json("Your product has been successfully droped of your cart!");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const newItem = req.body;

    const itemToUpdate = await Item.findByPk(id);
    console.log(itemToUpdate);
    let unitPrice = await findProduct(itemToUpdate.dataValues.productId);
    unitPrice = unitPrice.price;
    console.log(newItem, unitPrice);

    const newTotal = newItem.newValue * unitPrice;
    await Item.update(
      { quantity: newItem.newValue, total: newTotal },
      { where: { id: id } }
    );

    res.status(200).json("Your product has been successfully updated!");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
