import { findProduct } from "../helpers/helpers.js";
import { Cart } from "../../models/Cart.js";
import { Item } from "../../models/Item.js";

export const getAllCarts = async (req, res) => {
  try {
    const cartData = await Cart.findAll({ where: { available: false } });
    console.log(cartData);
    res.status(200).json(cartData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cartData = await Cart.findOne({
      where: { id: id },
    });
    res.status(200).json(cartData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCartByItem = async (req, res) => {
  try {
    const { id } = req.params;
    const itemData = await Item.findAll({
      where: {
        cartId: id,
      },
    });

    if (!itemData) {
      throw new Error(`Sorry, there are no products in the cart ${id}.`);
    }
    res.status(200).json(itemData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCart = async (req, res) => {
  try {
    const active = await Cart.findOne({
      where: { available: true },
    });
    if (active !== null) {
      res.status(200).json(active);
    } else {
      const newCart = await Cart.create();
      res.status(200).json(newCart);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const { id } = req.params;
    await Item.destroy({
      where: {
        cartId: id,
      },
    });
    await Cart.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json("Your cart has been deleted successfully!");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateCart = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const currentCart = await Cart.findOne({
      where: { id: id },
    });
    const currentValue = currentCart.available;

    await Cart.update(
      { available: !currentValue },
      {
        where: { id: id },
      }
    );
    res.status(200).json("Your cart has been updated successfully!");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
