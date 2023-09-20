const Product = require('../models/product')

//POST - creating new product => /api/v1/product/new
exports.newProduct = async (req, res, next) => {

    const product = await Product.create(req.body)
    res.status(201).json({
        sucess: true,
        product
    })
}

//GET all product => /api/v1/products
exports.getProducts = async (req, res, next) => {

    const products = await Product.find();

    res.status(200).json({
        sucess: true,
        count: products.length,
        products
    })
}

//GET single product => /api/v1/product/:id

exports.getSingleProduct = async(req, res, next) => {

    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
          return res.status(404).json({
            success: false,
            message: 'Product not found'
          });
        }

        res.status(200).json({
          success: true,
          product
        });

      } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          message: 'Internal Server Error'
        });
      }       

}

//PUT - update a product => /api/v1/product/id

exports.updateSingleProduct = async (req, res, next) => {

        let product = await Product.findById(req.params.id);

        if(!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            })
        }

        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        res.status(200).json({
            success: true,
            product
        })

}

//DELETE - product => /api/v1/admin/product/:id

exports.deleteSingleProduct = async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }

    await product.deleteOne({ _id: req.params.id });

    res.status(200).json({
        success: true,
        message: 'Product is deleted'
    })
}

