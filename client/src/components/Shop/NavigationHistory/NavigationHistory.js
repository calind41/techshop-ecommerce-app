import React from 'react'
import { Link } from 'react-router-dom'
import './NavigationHistory.css'

export default function NavigationHistory({ path }) {
    // const path = 'Mac, Silicone Case for iPad mini'
    const arr = path.split(',');

    return (
        <div className='nh-container'>
            <Link style={{ 'textDecoration': 'none' }} to='/'>
                <div className='home-link'>Home</div>
            </Link>
            {
                arr.map((item, index) => {
                    let l = '/shop/' + item.split(' ').join('_')

                    if (index !== 1)
                        return (
                            <Link style={{ textDecoration: 'none' }} to={l} >
                                <div className='nh-item'>{item}</div>
                            </Link>
                        )
                    else
                        return <div className='nh-item'>{item}</div>
                })
            }
        </div >
    )
}
