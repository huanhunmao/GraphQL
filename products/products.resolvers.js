const productsModel = require("./products.model")

module.exports = {
    Query: {
        products: () => {
            return productsModel.getAllProducts()
        },
        productsByPrice: (_, args) => 
            productsModel.filterProductsByPrice(args.min, args.max)
    }
}