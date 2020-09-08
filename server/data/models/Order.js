const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
const OrderSchema = new Schema({
    produse: [{
        prod_id: {
            type: Schema.Types.ObjectId,
            ref: 'products'
        },
        count: {
            type: Number,
            required: true
        }

    }],
    pret_total: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    durata: {
        type: Number,
        required: true
    },
    transport: {
        type: String,
        enum: ['ridicare sediu', 'posta', 'curier'],
        required: true
    },
    metoda_plata: {
        type: String,
        enum: ['transfer bancar', 'card bancar', 'paypal', 'cash'],
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'clients'
    },
    reducere: [{
        nume: {
            type: String,
            required: true
        },
        valoare: {
            type: Number,
            required: true
        },
        required: false
    }]

}, { timestamps: true })


module.exports = Order = mongoose.model('orders', OrderSchema);