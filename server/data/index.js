const mongoose = require('mongoose');

(async () => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/test`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
    } catch (err) {
        console.trace(err);
    }
})();
const connectionString = 'mongodb+srv://calin23:techshoppassword@techshop-ccgxw.mongodb.net/test?retryWrites=true&w=majority';
const db = process.env.MONGODB_URL;
// techshoppassword
// (async () => {
//     try {
//         await mongoose.connect("mongodb+srv://calin23:techshoppassword@techshop.ccgxw.mongodb.net/techshop?retryWrites=true&w=majority",
//             {
//                 useNewUrlParser: true,
//                 useUnifiedTopology: true
//             }
//         );
//     } catch (e) {
//         console.trace(e);
//     }
// })();

const Client = require('./models/Client');
const Product = require('./models/Product');
const Order = require('./models/Order');

module.exports = {
    Client,
    Product,
    Order
};