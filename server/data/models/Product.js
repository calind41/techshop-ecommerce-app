const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
const ProductSchema = new Schema({
    nume: {
        type: String,
        required: true
    },
    pret: {
        type: String,
        required: true
    },
    descriere: {
        type: String,
        required: false
    },
    poze: [{
        type: String
    }],
    numeBrand: {
        type: String,
        required: true
    },
    categorie: {
        type: String,
        enum: ['smartphone', 'laptop', 'tableta', 'televizor', 'smartwatch'],
    },
    livrare_timpi: [{
        timp: {
            type: Number,
            required: false
        },
        cost: {
            type: Number,
            required: false
        }
    }],
    lista_atribute: [{
        grupName: {
            type: String
        },
        atribute_grup: [{
            denumire_atribut: {
                type: String
            },
            valoare_atribut: {
                type: String
            }
        }]
    }],
    metode_livrari: {
        type: [String],
        enum: ['metoda1', 'metoda2', 'metoda3'],
        required: false
    }

}, { timestamps: true })


module.exports = Product = mongoose.model('products', ProductSchema);