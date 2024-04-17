const orders = [
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

function getAllOrders(){
    return orders
}

module.exports = {
    getAllOrders
}