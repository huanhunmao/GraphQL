const productsModel = require("./products.model")

module.exports = {
    Query: {
        products: () => {
            return productsModel.getAllProducts()
        },
        productsByPrice: (_, args) => productsModel.filterProductsByPrice(args.min, args.max),

        productsById: (_, args)=> productsModel.filterProductsById(args.id),
    },
    Mutation: {
        addNewProduct: (_, args) => productsModel.addNewProducts(args.id, args.description, args.price)
    }
}