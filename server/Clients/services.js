const {
    Client
} = require('../data/index');

const {
    generateToken
} = require('../security/Jwt');

const {
    ServerError
} = require('../errors');

const {
    hash,
    compare
} = require('../security/Password');

const add = async (prenume, nume, email, parola) => {
    const hashedPassword = await hash(parola);
    const client = new Client({
        prenume,
        nume,
        email,
        parola: hashedPassword,
        grup_client: 'normal',
        nr_comenzi: 2
    });
    // parola : megaSecurePassword 

    await client.save();
}

const authenticate = async (email, parola) => {
    const client = await Client.findOne({ email });
    if (client === null)
        throw new ServerError(`Utilizatorul inregistrat cu ${email} nu exista !`, 404);

    if (await compare(parola, client.parola)) {
        return await generateToken({
            userId: client._id,
            prenume: client.prenume,
            nume: client.nume,
            email,
            grupClient: client.grup_client,
            nrComenzi: client.nr_comenzi,
            createdAt: client.createdAt
        });
    }
    throw new ServerError("Combinatia de username si parola nu este buna!", 404);
}

const getAll = async () => {
    return await Client.find();
}

const getById = async (id) => {
    return await Client.findById(id);

}

const updateById = async (id, nr_comenzi) => {
    await Client.findByIdAndUpdate({ _id: id }, { nr_comenzi: nr_comenzi });
}

module.exports = {
    add,
    authenticate,
    getAll,
    getById,
    updateById
}