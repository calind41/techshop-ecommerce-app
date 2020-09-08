const express = require('express');

const OrdersService = require('./services');

const {
    ServerError
} = require('../errors');


const router = express.Router();

router.post('/', async (req, res, next) => {
    const {
        produse,
        pret_total,
        data,
        durata,
        transport,
        metoda_plata,
        client,
        reducere

    } = req.body;
    console.log('entering heeereeee');

    try {
        await OrdersService.add(produse, pret_total, data, durata, transport, metoda_plata, client, reducere);

        res.json({ message: `Order was added succesfully !` });
    } catch (err) {
        console.error(err.message);
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const orders = await OrdersService.getAll();
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    const {
        id
    } = req.params;

    try {
        const order = await OrdersService.getById(id);

        res.json(order);
    } catch (err) {
        console.error(err.message);
        next(err);
    }
});

router.get('/clients/:id', async (req, res, next) => {
    const {
        id
    } = req.params;

    try {
        const order = await OrdersService.getByClientId(id);
        res.json(order);
    } catch (err) {
        console.error(err.message);
        next(err);
    }
});


router.put('/:id', async (req, res, next) => {
    const {
        id
    } = req.params;

    const {
        produse,
        data,
        durata,
        transport,
        metoda_plata,
        client,
        reducere
    } = req.body;

    try {

        await OrdersService.updateById(id, produse, data, durata, transport, metoda_plata, client, reducere);

        res.json({ message: `Order was updated succesfully! ` });

    } catch (err) {
        console.error(err.message);
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    const {
        id
    } = req.params;

    try {
        await OrdersService.deleteById(id);

        res.json({ message: `Order with id ${id} was deleted` });
    } catch (err) {
        console.error(err.message);
        next(err);
    }
});

module.exports = router;