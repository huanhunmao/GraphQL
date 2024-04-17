const express = require('express')
const { buildSchema } = require('graphql') 
const { graphqlHTTP } = require('express-graphql')

const schema = buildSchema(`
    type Query{
        products: [Product]
        orders: [Order]
    }

    type Product{
        id: ID!
        description: String!
        reviews: [Review]
        price: Float!
    }

    type Review{
        rating: Int! 
        comment: String
    }

    type Order{
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem{
        product: Product!
        quantity: Int!
    }
`)

const root = {
    products: [
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
    ],
    orders: [
        {
            date:'2024-4-1',
            subtotal: 90.12,
            item:[
               {
                 product:{
                    id:'redshoes',
                    description: 'Old one',
                    price: 45.22
                },
                quantity: 2
            }
            ]
        }
    ]
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