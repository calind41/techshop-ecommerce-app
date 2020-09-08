import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'


toast.configure()

export default function CardPayment() {

    const [product] = useState({
        name: 'Tesla Roadster',
        price: 542,
        description: 'Cool car'
    })

    const handleToken = async (token) => {
        const res = await axios.post(`http://localhost:5000/checkout`, {
            token,
            product
        });

        const { status } = res.data;
        if (status === 'success') {
            toast('Success! Check email for details', { type: 'success' });
        } else {
            toast('Something went wrong', { type: 'error' });
        }

    }



    return (
        <div className='container'>
            <div className='product'>
                <h1>{product.name}</h1>
                <h3>On Sale - ${product.price}</h3>
                <h4>{product.description}</h4>
            </div>
            <StripeCheckout
                stripeKey="pk_test_NLBQh1kaJA8nytzJ5ZgwaXbq007fH2DEOs"
                token={handleToken}
                billingAddress={'asdasd'}
                shippingAddress
                amount={product.price * 100}
                name={product.name}
            />
        </div>
    )
}
