const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
const ClientSchema = new Schema({
    prenume: {
        type: String,
        required: true
    },
    nume: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    parola: {
        type: String,
        required: true
    },
    grup_client: {
        type: String,
        required: true,
        enum: ['normal', 'bronze', 'silver', 'gold'],
        default: 'normal'
    },
    nr_comenzi: {
        type: Number,
        required: true
    },
    adrese: [{
        type: String
    }],
    adresa_facturare: {
        type: String
    },
    nr_telefon: {
        type: String
    },
}, { timestamps: true })


module.exports = Client = mongoose.model('clients', ClientSchema);