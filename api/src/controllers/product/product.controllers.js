import { Product } from "../../models/Product.js";
import { Op } from "sequelize";

export const getProducts = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const productData = await Product.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });

      if (productData.length === 0) {
        throw new Error(
          `Sorry, there are no products with the name ${name} yet.`
        );
      }
      res.status(200).json(productData);
    } else {
      const productData = await Product.findAll();
      res.status(200).json(productData);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, image } = req.body;
    if (!(name || price || image)) {
      throw new Error(`Sorry, you must enter valid information`);
    } else {
      await Product.create({
        name,
        price,
        image,
      });

      res.status(200).json("Your product has been created successfully!");
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteProduct = (req, res) => {
  try {
    const { id } = req.params;
    Product.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).json("Your product has been deleted successfully!");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProductsById = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const productData = await Product.findOne({
        where: {
          id: id,
        },
      });

      if (productData.length === 0) {
        throw new Error(`Sorry, there are no products with the id ${id} yet.`);
      }
      res.status(200).json(productData);
    } else {
      const productData = await Product.findAll();
      res.status(200).json(productData);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
