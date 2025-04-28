import React from 'react'

const Product = ({ handleAddToCart }) => {
    return (
        Product.map((Product) => {
            return <Card key={Product.Product_ID} Product={Product} handleAddToCart={handleAddToCart} />
        }))
}

export default Product