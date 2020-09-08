const express = require('express');
const bodyParser = require('body-parser');

const shippo = require('shippo')('shippo_test_2efead23609b9a7935ee4746f1537d38b7ac7d8c');

const stripe = require('stripe')("sk_test_mT2Sie4sVl1LpLQ5md4hEf1P00ZB0MYnWR");
const uuid = require('uuid/v4');

const morgan = require('morgan'); // middleware de logare
const helmet = require('helmet'); // middleware de securitate
const cors = require('cors');





const routes = require('./routes');

const app = express();
const corsOptions = {
    origin: "Your FrontEnd Website URL",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors())
app.use(helmet());
app.use(morgan(':remote-addr - :remote-user [:date[web]] ":method :url HTTP/:http-version" :status :res[content-length]'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));






app.use('/api/v1', routes);



// handler de erori declarat ca middleware
app.use((err, req, res, next) => {
    console.trace(err);

    let status = 500;
    let message = 'Something Bad Happened';
    if (err.httpStatus) {
        status = err.httpStatus;
        message = err.message;
    }
    res.status(status).json({
        error: message
    });
});

app.post('/checkout', async (req, res) => {
    let error;
    let status;

    try {
        const { products, token, t } = req.body;

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        const idempotencyKey = uuid();
        const charge = await stripe.charges.create({
            amount: t * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: `Purchased the coolest products`,
            shipping: {
                name: token.card.name,
                address: {
                    line1: token.card.address_line1,
                    line2: token.card.address_line2,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip
                }
            }
        },
            {
                idempotencyKey
            }
        );

        console.log('Charge:', { charge });
        status = 'success';

        // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        // register shipping transaction
        const addressFrom = {
            "name": "Ms Hippo",
            "company": "Shippo",
            "street1": "215 Clayton St.",
            "city": "San Francisco",
            "state": "CA",
            "zip": "94117",
            "country": "US", //iso2 country code
            "phone": "+1 555 341 9393",
            "email": "support@goshippo.com",
        };

        // example address_to object dict
        const addressTo = {
            "name": "Ms Hippo",
            "company": "Shippo",
            "street1": "803 Clayton St.",
            "city": "San Francisco",
            "state": "CA",
            "zip": "94117",
            "country": "US", //iso2 country code
            "phone": "+1 555 341 9393",
            "email": "support@goshippo.com",
        };

        // parcel object dict
        const parcelOne = {
            "length": "5",
            "width": "5",
            "height": "5",
            "distance_unit": "in",
            "weight": "2",
            "mass_unit": "lb"
        };

        const parcelTwo = {
            "length": "5",
            "width": "5",
            "height": "5",
            "distance_unit": "in",
            "weight": "2",
            "mass_unit": "lb"
        };

        const shipment = {
            "address_from": addressFrom,
            "address_to": addressTo,
            "parcels": [parcelOne, parcelTwo],
        };

        shippo.transaction.create({
            "shipment": shipment,
            "servicelevel_token": "ups_ground",
            "carrier_account": "558c84bbc25a4f609f9ba02da9791fe4",
            "label_file_type": "png"
        })
            .then(function (transaction) {
                shippo.transaction.list({
                    "rate": transaction.rate
                })
                    .then(function (mpsTransactions) {
                        mpsTransactions.results.forEach(function (mpsTransaction) {
                            if (mpsTransaction.status == "SUCCESS") {
                                console.log("Label URL: %s", mpsTransaction.label_url);
                                console.log("Tracking Number: %s", mpsTransaction.tracking_number);
                            } else {
                                // hanlde error transactions
                                console.log("Message: %s", mpsTransactions.messages);
                            }
                        });
                    })
            }, function (err) {
                // Deal with an error
                console.log("There was an error creating transaction : %s", err.detail);
            });

    } catch (err) {
        console.error('Error:', err);
        status = 'failure';
    }

    res.json({ error, status });
})


app.listen(process.env.PORT, () => {
    console.log(`App is listening on ${process.env.PORT}`);
})