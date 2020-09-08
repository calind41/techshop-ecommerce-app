import React from 'react'
import { Link } from 'react-router-dom'
import './EmptyCart.css'

import FooterComponent from '../../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../../LandingPage/CopyrightComponent/CopyrightComponent'

export default function EmptyCart() {
    return (
        <div className='empty-cart-container'>
            <div className='empty-c-heading'>
                COSUL TAU ESTE GOL
            </div>

            <Link to='/'>
                <button>CONTINUA CUMPARATURILE</button>
            </Link>
            <div className='cart-footer-copyright'>
                <div>
                    <FooterComponent />
                </div>
                <div>
                    <CopyrightComponent />
                </div>
            </div>
        </div>
    )
}
