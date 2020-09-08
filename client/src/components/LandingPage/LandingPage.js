import React, { Component } from 'react'
import MainImageSlider from './MainImageSlider/MainImageSlider'
import axios from 'axios';

import './LandingPage.css'

// assets 
import slide1 from './MainImageSlider/assets/slide_11.jpg'
import slide2 from './MainImageSlider/assets/slide_22.png'
import slide3 from './MainImageSlider/assets/slide_3.jpg'
import CategoryList from './CategoryList/CategoryList'
import SaleCategory from './SaleCategory/SaleCategory'
import NewProductsList from './NewProductsList/NewProductsList'
import ShipingInformation from './ShipingInformation/ShipingInformation'
import FooterComponent from './FooterComponent/FooterComponent'
import CopyrightComponent from './CopyrightComponent/CopyrightComponent'

// create styles object
const s = {
    container: 'screenW screenH dGray col',
    header: 'flex1 fCenter fSize2',
    main: 'flex8 white',
    footer: 'flex1 fCenter'
};

// slide data 
const slides = [slide1, slide2, slide3];

export default class LandingPage extends Component {

    state = {
        products: [],
        nrProductsToDisplay: 8
    }
    componentDidMount() {
        this.getProducts();
    }

    getProducts = async () => {
        let res = await axios.get('http://localhost:5000/api/v1/products/');
        let { data } = res;

        const copy = [...data];

        // let filtered = data.filter((item, index) => { return (index % 5 === 0 && index <= 35) })
        // console.log(filtered[0])

        // select 8 products randomly from related array 
        let randomSelected = [];
        while (randomSelected.length < 8) {
            let r = Math.floor(Math.random() * data.length);
            if (randomSelected.indexOf(data[r]) === -1) randomSelected.push(data[r]);
        }
        this.setState({ products: randomSelected })
    }

    render() {
        // this.state.products.length !== 0 ?
        //     console.log(this.state.products[0].poze) : console.log('initial render')

        return (
            <div className='slider-container'>
                <MainImageSlider slides={slides} />
                <CategoryList />
                <SaleCategory />
                <NewProductsList products={this.state.products} />
                <ShipingInformation />
                <div className='lp-footer-cpyright-container'>
                    <FooterComponent />
                    <CopyrightComponent />
                </div>

            </div>
        )
    }
}
