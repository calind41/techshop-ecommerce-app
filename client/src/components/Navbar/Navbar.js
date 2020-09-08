import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <ul>
                <Link style={linkStyles} to={{ pathname: '/shop/Smartphone' }}>
                    <li>
                        SMARTPHONE
                    </li>
                </Link>
                <Link style={linkStyles} to={{ pathname: '/shop/Laptop' }}>
                    <li>
                        LAPTOP
                </li>
                </Link>

                <Link style={linkStyles} to={{ pathname: '/shop/Tableta' }}>
                    <li>
                        TABLETA
                </li>
                </Link>

                <Link style={linkStyles} to={{ pathname: '/shop/Smartwatch' }}>
                    <li>
                        SMARTWATCH
                    </li>
                </Link>

                <Link style={linkStyles} to={{ pathname: '/shop/Televizor' }}>
                    <li>
                        TELEVIZOR
                </li>
                </Link>

            </ul>
        </div>
    )
}

const linkStyles = {
    'textDecoration': 'none',
    'color': '#ffffff'
}
