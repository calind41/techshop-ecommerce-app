import React from 'react'
import './ShipingInformation.css'
import ShippingCard from './ShippingCard/ShippingCard'


export default function ShipingInformation() {
    return (
        <div className='shippinginfo-container'>
            <div>
                <ShippingCard posClass='call-pos-class' classes='call' htext='(123) 456-7890' text='Suport 24/7' iconClassName=' fas fa-phone' />
            </div>
            <div className='vl'></div>
            <div>
                <ShippingCard classes='free-shipping-text' htext='LIVRARE GRATIS' text='Beneficiaza de transport gratuit pentru promotiile noastre' iconClassName='fas fa-truck' />
            </div>
            <div className='vl'></div>
            <div>
                <ShippingCard classes='ret-exch-text' htext='RETURNARE & SCHIMB' text='Retur gratuit in 30 de zile' iconClassName='fas fa-repeat' />
            </div>
            <div className='vl'></div>
            <div>
                <ShippingCard hclass='satisf-guarantee-heading' classes='satisf-guarantee-text' htext='SATISFACTIE GARANTATA' text='Cea mai variata gama de produse' iconClassName=' fas fa-thumbs-o-up' />
            </div>
        </div>
    )
}
