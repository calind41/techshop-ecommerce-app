import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'
let FontAwesome = require('react-fontawesome')


export default function Cart() {

    // let inCartOld = JSON.parse(localStorage.getItem('inCart') || "[]");
    // let nrItems = inCartOld.length;

    // localStorage.setItem('nrItemsInCart', JSON.stringify(nrItems))

    return (
        <Link style={{ textDecoration: 'none', }} to='/cart'>
            <div className='cart-container'>
                {/* <i class="fas fa-shopping-cart"></i> */}
                <FontAwesome
                    name="shopping-cart"
                    className='sh-cart-icon'
                />
                <span id='weirdSpan' className='num-items-incart'>{JSON.parse(localStorage.getItem('inCart') || "[]").length}</span>
            </div>
        </Link>
    )
}

