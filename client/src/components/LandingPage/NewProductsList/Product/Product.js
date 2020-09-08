import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
import FontAwesome from 'react-fontawesome';

import ReactGa from 'react-ga';


export default function Product({ sku, src, text, price, toHideButton, brandName, listaAtribute, categorie, descriere }) {

    // load image 
    let images;
    let img;

    const rataTVA = 16;
    const cuTva = Math.ceil((parseFloat(price.slice(0, -3)) * rataTVA / 100 + parseFloat(price.slice(0, -3))));
    const faraTva = parseFloat(price.slice(0, -3));

    const pretCuTVA = cuTva + 'lei';
    const pretFaraTva = faraTva + 'lei';

    let pret = categorie === 'smartwatch' ? pretFaraTva : pretCuTVA;


    // if (window.location.pathname === '/' || window.location.pathname.) {
    images = require.context('../../../../images', true);
    img = images('.' + src[0].substr(1));


    // shorten text 
    const shortText = text.split(' ').filter((item, index) => index < 10).join(' ');

    // product details
    const product = {
        sku,
        img,
        categorie,
        name: text,
        price: categorie === 'smartwatch' ? faraTva : cuTva,
        quantity: 1,
        totalPrice: categorie === 'smartwatch' ? faraTva : cuTva,
    }

    const scrollToTop = () => {
        const scrollOptions = {
            top: 0
        }
        window.scrollTo(scrollOptions);
        // FOR GOOGLE ANALYTICS
        ReactGa.event({
            category: 'Button',
            action: `A apasat pagina /details a produsului ${text}`
        })
    }
    const scrollToTopAndAddToLocalStorage = () => {
        const scrollOptions = {
            top: 0
        }
        window.scrollTo(scrollOptions);

        let inCartOld = JSON.parse(localStorage.getItem('inCart') || "[]");
        console.log('### ', product.price);
        inCartOld.push(product);

        localStorage.setItem('inCart', JSON.stringify(inCartOld))

        document.querySelector('#weirdSpan').innerHTML = inCartOld.length;

        // FOR GOOGLE ANALYTICS
        ReactGa.event({
            category: 'Button',
            action: `A apasat butonul add to cart din pagina /shop/categorie pentru produsul ${text}`
        })

    }

    return (
        <div className='product-card-container'>
            <Link onClick={scrollToTop} to={{ pathname: '/details', state: { sku, src, pret, toHideButton, brandName, listaAtribute, text, categorie, descriere } }}>
                <div className='product-img-container'>
                    <img src={img} alt='product' />
                    <div className='overlay'></div>
                    <div className='view-container'>
                        {/* <i class="fas fa-eye"></i> */}
                        <FontAwesome name='fas fa-eye' className='eye-icon' />
                    </div>
                </div>
            </Link>

            <div className='product-desc-container'>
                <p className='txt'>{shortText}</p>
                <p className='price'>{pret}</p>
                {
                    toHideButton ? null : (<Link onClick={scrollToTopAndAddToLocalStorage} to={{ pathname: '/cart', itemCart: product }} > <button>
                        <FontAwesome name='fas fa-cart-plus' className='fa-cart-icon-className' />
                        <span>ADAUGA IN COS</span>
                    </button></Link>)
                }

            </div>
        </div >
    )
}
