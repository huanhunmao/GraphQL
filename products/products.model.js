const products = 
    [
        {
        id: 'redshoes',
        description: 'Red shoes',
        price: 12.12
        },
        {
            id: 'yellowshoes',
            description: 'Yellow shoes',
            price: 62.12
            }
    ]


function getAllProducts(){
        return products
}

function filterProductsByPrice(min, max){
      return products.filter(product => product.price >= min && product.price <= max)
}
    
module.exports = {
    getAllProducts,
    filterProductsByPrice
}