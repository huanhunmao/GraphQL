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
            price: 12.12
            }
    ]


function getAllProducts(){
        return products
}
    
module.exports = {
    getAllProducts
}