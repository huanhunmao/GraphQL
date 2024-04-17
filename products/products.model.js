const products = 
    [
        {
        id: 'redshoes',
        description: 'Red shoes',
        price: 12.12,
        reviews:[]
        },
        {
            id: 'yellowshoes',
            description: 'Yellow shoes',
            price: 62.12,
            reviews:[]
        }
    ]


function getAllProducts(){
        return products
}

function filterProductsByPrice(min, max){
      return products.filter(product => product.price >= min && product.price <= max)
}

function filterProductsById(id){
    return products.filter(product => product.id === id)
}

function addNewProducts(id, description, price){
    const newProduct = {
        id,
        description,
        price,
        reviews:[]
    }

    products.push(newProduct)

    return newProduct
}

function getProductById(id){
    return products.find(product => product.id === id)
}

function addNewProductReviews(id, rating, comment){
    const matchedProduct = getProductById(id)

    if(matchedProduct){
        const newProductReview = {
            rating,
            comment
        }

        matchedProduct.reviews.push(newProductReview)

        return newProductReview
    }
}
    
module.exports = {
    getAllProducts,
    filterProductsByPrice,
    filterProductsById,
    addNewProducts,
    addNewProductReviews
}