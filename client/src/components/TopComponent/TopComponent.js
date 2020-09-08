import React from 'react'
import './TopComponent.css'

import Logo from './Logo/Logo'
import SearchBar from './SearchBar/SearchBar'
import Favorites from './Favorites/Favorites'
import Cart from './Cart/Cart'
import UserAuth from './UserAuth/UserAuth'


export default function TopComponent() {
    return (
        <div className='topcomponent-container'>
            <div className='logo-top-container'>
                <Logo />
            </div>
            <div className='sb-container'>
                <SearchBar />
            </div>
            <div className='wrapper-c-f-ua'>
                <Cart />
                {/* <Favorites /> */}
                <UserAuth />
            </div>
        </div>
    )
}
