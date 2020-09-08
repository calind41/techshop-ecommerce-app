import React from 'react'
import './CopyrightComponent.css'

var FontAwesome = require('react-fontawesome')


export default function CopyrightComponent() {

    const topFunction = () => {
        document.body.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className='cpr-container'>
            <FontAwesome name='fas fa-copyright' className='cpyright-component-icons' />

            <span> 2020 TechShop. Toate Drepturile Rezervate</span>
            <FontAwesome onClick={() => topFunction()} id='toTop' name='fas fa-arrow-up' className='cpyright-component-icons' />

        </div>
    )
}
