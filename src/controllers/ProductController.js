const productSchema = require("../models/ProductModel");
const categorySchema = require("../models/CategoryModel");
const subcategorySchema = require("../models/SubcategoryModel");

const addProduct = async (req, res) => {
  try {
    const savedProduct = await productSchema.create(req.body);
    res.status(201).json({
        message: "Product added successfully",
        data: savedProduct,
    });
  } catch (err) {
    console.log(err);   
    res.status(400).json(err);
  }
};

const getAllProducts = async (req, res) => {

//nested populate
    const products = await productSchema.find().populate("subCategory").populate({
      path: "subCategory",
      populate: {
        path:"category",
        model: "Category"
      }
    })
    //path:column, filed name in subCategory model,
    //mode: ref model name
    res.status(200).json({
        message: "All products",
        data: products,
    })



}

module.exports = {
    addProduct,
    getAllProducts
}

