import React from 'react'
import './SecurePayment.css'

import FooterComponent from '../../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../../LandingPage/CopyrightComponent/CopyrightComponent'
import FontAwesome from 'react-fontawesome'

export default function SecurePayment() {
    return (
        <div className='secure-payment-container'>
            <div className='sp-h1'>
                SECURE PAYMENT
            </div>
            <div className='sp-ptext1'>
                When it comes to purchasing something, anything online, the security
                question towers above everything else. We do not take our store’s overall cyber
                security and particularly the billing process security lightly. We can assure
                you that all of your shopping here will be a fun and safe experience,
                enhanced by the all of the factors listed below.
            </div>
            <div className='sp-ssl-cert'>
                <div className='sp-heading'>
                    <FontAwesome name='fas fa-check-circle' />
                    <span>SSL CERTIFICATE</span>
                </div>
                <div className='sp-text'>
                    If the website has an SLL certificate, this means that the owners care about your
                    shopping experience being secure, safe and sound and want to make sure that all the data
                    (including financial) that you enter on our website will be securely encrypted!
                </div>
            </div>
            <div className='sp-multi-gateway'>
                <div className='sp-heading'>
                    <FontAwesome name='fas fa-check-circle' />

                    <span>MULTIPLE GATEWAYS</span>
                </div>
                <div className='sp-text'>
                    When we were considering which payment gateways to use on our website,
                    the choice narrowed down to 5 most universal ones: Visa; MasterCard; PayPal; Discover; Stripe.
                </div>
            </div>
            <div className='sp-customer-support'>
                <div className='sp-heading'>
                    <FontAwesome name='fas fa-check-circle' />

                    <span>24/7 CUSTOMER SUPPORT</span>
                </div>
                <div className='sp-text'>
                    Also, it is comforting to know that should you experience any kind
                    of technical bump in the road during the checkout process, you can
                    always address our customer support department with your billing questions!
                </div>
            </div>

            <div className='sp-footer-copyright'>
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
