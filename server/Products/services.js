const { Product } = require('../data/index');

const add = async ({
    nume,
    pret,
    descriere,
    poze,
    numeBrand,
    categorie,
    livrare_timpi,
    lista_atribute,
    metode_livrari
}) => {
    const product = new Product({
        nume,
        pret,
        descriere,
        poze,
        numeBrand,
        categorie,
        livrare_timpi,
        lista_atribute,
        metode_livrari
    });

    await product.save();
};

const getAll = async () => {
    return await Product.find();
}

const getById = async (id) => {
    return await Product.findById(id);
}
const getByCategory = async (category) => {
    return await Product.find({ categorie: category });
}

const updateById = async (id, {
    nume,
    pret,
    descriere,
    poze,
    numeBrand,
    categorie,
    livrare_timpi,
    lista_atribute,
    metode_livrari
}) => {
    await Product.findByIdAndUpdate(id, { nume, pret, descriere, poze, numeBrand, categorie, livrare_timpi, lista_atribute, metode_livrari });
}

const deleteById = async (id) => {
    await Product.findByIdAndDelete(id);
}
module.exports = {
    add,
    getAll,
    getById,
    getByCategory,
    updateById,
    deleteById,
}

