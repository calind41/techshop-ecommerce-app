const {
    Order
} = require('../data/index');

const add = async (produse, pret_total, data, durata, transport, metoda_plata, client, reducere) => {

    const date = Date.parse(data);

    const order = new Order({
        produse,
        pret_total,
        data: date,
        durata,
        transport,
        metoda_plata,
        client,
        reducere
    });

    await order.save();
}

const getAll = async () => {
    return await Order.find().populate('produse', ['nume', 'pret', 'numeBrand', 'categorie']).populate('client', ['prenume', 'nume', 'email', 'grup_client', 'nr_comenzi']);
}

const getById = async (id) => {
    return await Order.findById(id).populate('produse', ['nume', 'pret', 'numeBrand', 'categorie']).populate('client', ['prenume', 'nume', 'email', 'grup_client', 'nr_comenzi']);
}

const getByClientId = async (id) => {
    return await Order.findOne({
        client: id
    }).populate('produse', ['nume', 'pret', 'numeBrand', 'categorie']).populate('client', ['prenume', 'nume', 'email', 'grup_client', 'nr_comenzi']);
}

const updateById = async (id, produse, data, durata, transport, metoda_plata, client, reducere) => {
    const date = Date.parse(data);
    await Order.findByIdAndUpdate(id, { produse, date, durata, transport, metoda_plata, client, reducere });
}

const deleteById = async (id) => {
    await Order.findByIdAndDelete(id);
}

module.exports = {
    add,
    getAll,
    getById,
    getByClientId,
    updateById,
    deleteById
};