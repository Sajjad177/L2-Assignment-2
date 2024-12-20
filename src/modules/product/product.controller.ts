import { Request, Response } from 'express';
import { ProductService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { ...data } = req.body;
    const result = await ProductService.createProductToDB(data);

    return res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Validation failed',
      error: error,
    });
  }
};

// get all products by search term  :
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await ProductService.getAllProductsFromDB(
      searchTerm as string,
    );

    return res.status(200).json({
      status: true,
      message: 'Products retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Failed to get products',
      error: error,
    });
  }
};

// get single product by id :
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getSingleProductById(productId);

    return res.status(200).json({
      status: 'true',
      message: 'Product retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Failed to get product',
      error: error,
    });
  }
};

// update product :
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const data = req.body;

    const result = await ProductService.updateProductById(productId, data);

    return res.status(200).json({
      status: 'true',
      message: 'Product updated successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Failed to update product',
      error: error,
    });
  }
};

// delete product :
const deletedProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await ProductService.deleteProductById(productId);

    return res.status(200).json({
      status: 'true',
      message: 'Product deleted successfully',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Failed to delete product',
      error: error,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deletedProduct,
};
