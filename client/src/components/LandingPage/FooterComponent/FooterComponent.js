import React from 'react'
import './FooterComponent.css'
import { Link } from 'react-router-dom'
import Logo from '../../TopComponent/Logo/Logo'

var FontAwesome = require('react-fontawesome')

export default function FooterComponent() {

    const scrollToTop = () => {
        const scrollOptions = {
            top: 0
        }
        window.scrollTo(scrollOptions);
    }
    return (
        <div className='footer-container'>
            <div className='content-container'>
                <div className='content1'>
                    <div className='fc-logo-container'>
                        <Logo class_name='colorW' />
                    </div>
                    <div className='fc-c1-txt'>


                        Obțineți puterea de a  reusi sa faceti mai mult. Indiferent dacă sunteți un jucător,
                        un designer, un student sau un părinte, un scriitor, un dealer sau un Jack
                        sau Jill din toate meseriile - la TechShop veți găsi calculatoarele perfecte
                        pentru tot ceea ce faceți. Explorați colecția noastră după tip - și descoperiți
                        dispozitive care pot face ca fiecare proiect să fie cel mai bun al dvs.
                    </div>
                </div>
                <div className='content2'>
                    <div className='fc-c2-heading'>
                        INFORMATII
                    </div>
                    <div className='fc-c2-ul-container'>
                        <ul>
                            <Link onClick={() => { scrollToTop() }} style={linkStyles} to='/about_us'>
                                <li>Despre Noi</li>
                            </Link>
                            <Link onClick={() => { scrollToTop() }} style={linkStyles} to='/customer_service'>
                                <li>Suport Clienti</li>
                            </Link>
                            <li>Privacy Policy</li>
                            <Link onClick={() => { scrollToTop() }} style={linkStyles} to='/contact_us'>
                                <li>Contacteaza-ne</li>
                            </Link>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
                <div className='content3'>
                    <div className='fc-c2-heading'>
                        DE CE SA CUMPERI DE LA NOI
                    </div>
                    <div className='fc-c3-ul-container'>
                        <ul>
                            <Link onClick={() => { scrollToTop() }} style={linkStyles} to='/shipping_delivery'>
                                <li>Transport & Livrare</li>
                            </Link>
                            <Link onClick={() => { scrollToTop() }} style={linkStyles} to='/secure_payment'>
                                <li>Plata securizata</li>
                            </Link>
                            <li>Garantie</li>
                            <li>Termeni & Conditii</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>
                <div className='content4'>
                    <div className='fc-c4-container'>
                        <div>
                            <FontAwesome name='fas fa-map-marker' className='fc-c4-container-icons' /><span>Glasgow D04 89GR</span>

                        </div>
                        <div>
                            <FontAwesome name='fas fa-phone' className='fc-c4-container-icons' /><span>(123) 456-7890</span>

                        </div>
                        <div>
                            <FontAwesome name='fas fa-clock-o' className='fc-c4-container-icons' /><span>7 zile pe saptamana de la 9:00 la 19:00</span>
                        </div>
                        <div>
                            <FontAwesome name='fas fa-envelope-o' className='fc-c4-container-icons' /><span>info@demolink.org</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const linkStyles = {
    'textDecoration': 'none',
    'color': '#7d7d7d'
}