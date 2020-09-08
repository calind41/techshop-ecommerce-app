import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'

export default function Logo({ class_name }) {

    const scrollToTop = () => {
        const scrollOptions = {
            top: 0
        }
        window.scrollTo(scrollOptions);
    }
    return (
        <Link className='logo-link-class' onClick={scrollToTop} style={{ 'textDecoration': 'none' }} to='/'>
            <div className={'logo-container ' + class_name}>
                <span id='comp'>TECH</span>
                <span id='shop'>SHOP</span>
            </div>
        </Link>

    )
}

