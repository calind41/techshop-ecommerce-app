import React, { Component } from 'react'

import './SaleCategory.css'
import SaleCard from './SaleCard/SaleCard'

import sale1 from '../../LandingPage/MainImageSlider/assets/sale1.jpg'
import sale3 from '../../LandingPage/MainImageSlider/assets/sale3.jpg'

export default class SaleCategory extends Component {
    render() {
        return (
            <div className='salecateg-container'>
                <div>
                    <SaleCard btnPresent={true} img={sale1} text='OBTINE DISCOUNT 5% REDUCERE LA COMENZI > 2000LEI' />
                </div>
                <div>
                    <SaleCard btnPresent={false} img={sale3} position='top' text='TRANSPORT GRATUIT LA COMENZI > 500LEI ' />
                </div>
            </div>
        )
    }
}
