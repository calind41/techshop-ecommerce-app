import React from 'react'
import './SearchBar.css'
var FontAwesome = require('react-fontawesome')

export default function SearchBar() {
    return (
        <div className='searchbar-container'>
            <label>
                <input type='text' />
                {/* <i class="fas fa-search"></i> */}
                <FontAwesome
                    name="search"
                    className='search-icon'
                />
            </label>
        </div>
    )
}
