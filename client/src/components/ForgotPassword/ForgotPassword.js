import React from 'react'
import { Link } from 'react-router-dom'
import './ForgotPassword.css'


import FooterComponent from '../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../LandingPage/CopyrightComponent/CopyrightComponent'

export default function ForgotPassword() {
    return (
        <div className='forgot-pass-container'>
            <div className='forgot-pass-heading'>
                Schimbare Parola
            </div>
            <input type='email' required='true' placeholder='Adresa Email' />
            <div className='fp-btns'>
                <div>
                    <button>RESTAURARE</button>
                </div>
                <Link to='/authorization'>
                    <div>
                        <button>RENUNTA</button>
                    </div>
                </Link>

            </div>
            <div className='fp-footer-copyright'>
                <FooterComponent />
                <CopyrightComponent />
            </div>

        </div>
    )
}
