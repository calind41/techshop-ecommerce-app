import React, { Component } from 'react'
import Product from './Product/Product'
import './NewProductsList.css'

import product_img1 from '../../LandingPage/MainImageSlider/assets/product_img1.jpg'
import product_img2 from '../../LandingPage/MainImageSlider/assets/product_img2.jpg'
import product_img3 from '../../LandingPage/MainImageSlider/assets/product_img3.jpg'
import product_img4 from '../../LandingPage/MainImageSlider/assets/product_img4.jpg'
import product_img5 from '../../LandingPage/MainImageSlider/assets/product_img5.jpg'
import product_img6 from '../../LandingPage/MainImageSlider/assets/product_img6.jpg'
import product_img7 from '../../LandingPage/MainImageSlider/assets/product_img7.jpg'
import product_img8 from '../../LandingPage/MainImageSlider/assets/product_img8.jpg'

export default class NewProductsList extends Component {


    render() {


        const products = this.props.products;


        return (
            <div className='newproductslist-container'>
                <div className='newproductslist-heading'>
                    <span>PRODUSE</span>
                </div>

                <div className='products-container'>
                    {
                        products.map((product) => {
                            return (<div>
                                {/* <Product src={product.poze} text={product.nume} price={product.pret} brandName={product.numeBrand} /> */}
                                <Product sku={product._id} src={product.poze} brandName={product.numeBrand} text={product.nume} price={product.pret} listaAtribute={product.lista_atribute} categorie={product.categorie} descriere={product.descriere} />
                            </div>)
                        })
                    }

                </div>

            </div>
        )
    }
}
