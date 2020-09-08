import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './RightSideProductDescription.css'

import SelectList from '../../SelectList/SelectList'
import Product from '../../../LandingPage/NewProductsList/Product/Product'
import product_img1 from '../../../LandingPage/MainImageSlider/assets/product_img1.jpg'

import FooterComponent from '../../../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../../../LandingPage/CopyrightComponent/CopyrightComponent'
import InfoTable from './InfoTable/InfoTable'
import FontAwesome from 'react-fontawesome'

import ReactGa from 'react-ga'

export default function RightSideProductDescription({ state }) {

    const [relatedProducts, setRelatedProducts] = useState([])

    const { sku, src, pret, brandName, listaAtribute, text, categorie, descriere } = state;

    useEffect(() => {
        console.log('brand name in rightside product description is ', brandName);
        const getRelatedProducts = async (categorie) => {
            const res = await axios.get(`http://localhost:5000/api/v1/products/category/${categorie}`);
            let { data } = res;
            let related = data.filter((item) => item.nume !== text);

            // select 4 products randomly from related array 
            let randomSelected = [];
            while (randomSelected.length < 4) {
                let r = Math.floor(Math.random() * related.length);
                if (randomSelected.indexOf(related[r]) === -1) randomSelected.push(related[r]);
            }
            setRelatedProducts(randomSelected);
        }
        getRelatedProducts(categorie);


    }, [text])

    const scrollToTopAndAddToLocalStorage = () => {
        const scrollOptions = {
            top: 0
        }
        window.scrollTo(scrollOptions);

        let inCartOld = JSON.parse(localStorage.getItem('inCart') || "[]");
        inCartOld.push(product);

        localStorage.setItem('inCart', JSON.stringify(inCartOld))

        document.querySelector('#weirdSpan').innerHTML = inCartOld.length;

        ReactGa.event({
            category: 'Button',
            action: `A apasat butonul add to cart din pagina /details  pentru produsul ${text}`
        })
    }

    const images = require.context('../../../../images', true);
    const img = images('.' + src[0].substr(1));
    const product = {
        sku,
        img,
        categorie,
        name: text,
        price: parseFloat(pret.slice(0, -3)),
        quantity: 1,
        totalPrice: parseFloat(pret.slice(0, -3))
    }

    return (
        <div className='rside-prod-desc-container'>
            <section className='section1'>
                <div className='brand'>Brand:    <span>{brandName}</span></div>
                <div className='sku'>SKU:     <span>{sku}</span></div>
                <div className='rspd-title'><h1>{text}</h1></div>
                <div className='timp-livrare'><span>Timp Livrare Curier:</span> 2zile lucratoare national, 7zile maxim international</div>
                <div className='rspd-price'>{pret} {categorie === 'smartwatch' ? 'TVA 0%' : 'cu TVA'}</div>
                <div className='hrow'></div>
            </section>
            <section className='section2'>


                <div className='add-to-cart-wrapper'>
                    <Link onClick={scrollToTopAndAddToLocalStorage} to={{ pathname: '/cart', itemCart: product }} >
                        <button>
                            <FontAwesome className='cart-plus-icon-cname' name='fas fa-cart-plus' />
                            <span>Adauga in cos</span>
                        </button>
                    </Link>

                </div>
            </section>
            <section className='details'>
                <div className='details-lbl'>Detalii</div>
                <div className='d-hr'></div>
                <div className='content'>
                    <InfoTable listaAtribute={listaAtribute} />
                </div>
            </section>
            <section className='related-section'>
                <div className='rel-prod-lbl'>PRODUSE ASEMANATOARE</div>
                <div className='rel-prods'>
                    {
                        relatedProducts.map((product) => {
                            return (
                                <div>
                                    <Product toHideButton={true} src={product.poze} brandName={product.numeBrand} text={product.nume} price={product.pret} listaAtribute={product.lista_atribute} categorie={product.categorie} descriere={product.descriere} />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <div className='rspd-footer-cpyright'>
                <div>
                    <FooterComponent />
                </div>
                <div>
                    <CopyrightComponent />
                </div>
            </div>

        </div>
    )
}
