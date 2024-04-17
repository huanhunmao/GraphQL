const express = require('express')
const path = require('path')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { graphqlHTTP } = require('express-graphql')


// const typeArray = loadFilesSync(path.join(__dirname,'**/*.graphql'))
const typeArray = loadFilesSync('**/*', {
    extensions: ['graphql'],
})
const schema = makeExecutableSchema({
    typeDefs: typeArray
})

const root = {
    products: require('./products/products.model'),
    orders: require('./orders/orders.model'),
}

const app = express()

app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(3000, () => {
    console.log('Running GraphQL  server ...');
} )