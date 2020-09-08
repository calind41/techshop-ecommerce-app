import React from 'react'
import './SaleCard.css'

export default function SaleCard({ img, btnPresent, text, position }) {
    return (
        <div className='salecard-container'>
            <img src={img} />
            <div className='salecard-txt-wrapper'>
                <p className={position === 'top' ? 'salecard-txt topPos' : 'salecard-txt'} > {text}</p>
                {btnPresent ? <button>DETALII</button> : null}
            </div>

        </div>
    )
}
