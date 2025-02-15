const Product = require( '../models/product' );

//get all products
const getPRoducts = async ( req, res ) => {
    try {
        const products = await Product.find( {} );
        res.json( products );
    } catch ( error ) {
        console.error( error.message );
        res.status( 500 ).json( { message: 'Server Error' } );
    }
}
//get product by id
const getProdcutById = async ( req, res ) =>
{
    const { id } = req.params;
    try
    {
        const product = await Product.findById( id );
        res.status( 200 ).json( product );
    }
    catch ( error )
    {
        console.error( error.message );
        res.status( 500 ).json( { message: 'Server Error' } );
    }
}

//create a new product
const createProduct = async ( req, res ) =>
{
    const { name, category, quantity, price, description } = req.body;
    try
    {
        const product = new Product( { name, category, quantity, price, description } );
        await product.save();
        res.status( 201 ).json( product );
    }
    catch ( error )
    {
        console.error( error.message );
        res.status( 500 ).json( { message: 'Server Error' } );
    }
}
//update a product
const updateProduct = async ( req, res ) =>
{
    const { name, category, quantity, price, description } = req.body;
    const { id } = req.params;
    try
    {
        const updateProduct = await Product.findByIdAndUpdate( id, { name, category, quantity, price, description }, { new: true } );
        res.status( 200 ).json( updateProduct );
    }
    catch ( error )
    {
        console.error( error.message );
        res.status( 500 ).json( { message: 'Server Error' } );
    }
}

const deleteProduct = async ( req, res ) =>
{
    const { id } = req.params;
    try
    {
        await Product.findByIdAndDelete( id );
        res.status( 200 ).json( { message: 'Product deleted successfully' } );
    } catch
    {
        console.error( error.message );
        res.status( 500 ).json( { message: 'Server Error' } );
    }
}
module.exports = { getPRoducts, getProdcutById, createProduct, updateProduct, deleteProduct };