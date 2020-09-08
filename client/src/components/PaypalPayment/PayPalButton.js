import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import styled from 'styled-components';
import jwt from 'jsonwebtoken'
import axios from 'axios'

export default class PaypalButton extends React.Component {


    render() {
        const onSuccess = async (payment) => {
            // Congratulation, it came here means everything's fine!
            console.log("The payment was succeeded!", payment);
            this.props.clearCart();
            this.props.history.push('/');
            document.querySelector('#weirdSpan').innerHTML = '0';
            // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
            //-------------------------------------------------------------------
            const decodedClientData = jwt.decode(localStorage.getItem('jwtToken'));
            const { userId, prenume, nume, email, grupClient, nrComenzi } = decodedClientData;
            const order = {
                produse: this.props.products.map((item) => { return { prod_id: item.sku, count: item.quantity } }),
                pret_total: this.props.totalInLei,
                data: '2002-12-09',
                durata: 2,
                transport: 'curier',
                metoda_plata: 'paypal',
                client: userId,
                reducere: []
            }


            // create order-------------------------------------------------------------
            let result = await axios.post(`https://randomname.life/api/v1/orders/`, order);
            // update nr of orders for this client
            result = await axios.put(`https://randomname.life/api/v1/clients/${userId}`, { nr_comenzi: nrComenzi + 1 });
        }

        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }

        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }

        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        const total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

        const client = {
            sandbox: process.env.REACT_APP_PAYPAL_ID,
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        return (
            <PaypalContainer><PaypalExpressBtn style={{
                size: 'responsive',
                color: 'blue',
                shape: 'rect',
                label: 'checkout',
                tagline: 'true',
            }} env={env} client={client} currency={currency} total={this.props.total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} /></PaypalContainer>
        );
    }
}

const PaypalContainer = styled.div`
    @media screen and (max-width: 576px) {
        position: relative;
        left: 3rem;
    }
`;