const express = require( 'express' );
const router = express.Router();

const { getPRoducts, getProdcutById, createProduct, updateProduct, deleteProduct} = require( '../controllers/productController' );
//define routes 
router.get( '/', getPRoducts );
router.get( '/:id', getProdcutById );
router.post( '/', createProduct );
router.put( '/:id', updateProduct );
router.delete( '/:id', deleteProduct );

module.exports = router;