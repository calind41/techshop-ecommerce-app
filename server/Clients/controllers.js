const express = require('express');

const ClientsService = require('./services');

const router = express.Router();

router.post('/register', async (req, res, next) => {
    const {
        prenume,
        nume,
        email,
        parola
    } = req.body;
    try {
        await ClientsService.add(prenume, nume, email, parola);

        res.status(201).end();
    } catch (err) {
        console.error(err.message);
    }
});

router.post('/login', async (req, res, next) => {
    const {
        email,
        parola
    } = req.body;

    try {
        const token = await ClientsService.authenticate(email, parola);

        res.status(200).json(token);

    } catch (err) {
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const clients = await ClientsService.getAll();
        res.json(clients);
    } catch (err) {
        console.error(err.message);
    }
});

router.get('/:id', async (req, res, next) => {
    const {
        id
    } = req.params;
    try {
        const client = await ClientsService.getById(id);
        res.json(client);
    } catch (err) {
        console.error(err.message);
    }
});

router.put('/:id', async (req, res, next) => {
    const {
        id
    } = req.params;
    const {
        nr_comenzi
    } = req.body;
    try {
        await ClientsService.updateById(id, nr_comenzi)
        res.json('client updated');
    } catch (err) {
        console.error(err.message);
    }
})

module.exports = router;