const express = require('express');
const product = require('../models/prodcts.models.js')
const router = express.Router();
const {getProducts , getproduct , createProduct , updateProduct , deleteProduct} = require('../controllers/product.controllers.js')

router.get('/' , getProducts);

router.get('/:id' ,getproduct);

router.post('/', createProduct);

router.put('/:id' , updateProduct);

router.delete('/:id' , deleteProduct);

module.exports = router;