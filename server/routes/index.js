const Router = require('express')();

const ProductsController = require('../Products/controllers');
const ClientsController = require('../Clients/controllers');
const OrdersController = require('../Orders/controllers');

Router.use('/products', ProductsController);
Router.use('/clients', ClientsController);
Router.use('/orders', OrdersController);

module.exports = Router;