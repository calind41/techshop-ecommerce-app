import React from 'react'
import './ContactUs.css'


import FooterComponent from '../../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../../LandingPage/CopyrightComponent/CopyrightComponent'
import FontAwesome from 'react-fontawesome'

export default function ContactUs() {
    return (
        <div className='contact-us-container'>
            <div className='cu-h1'>
                CONTACTEAZĂ-NE
                </div>
            <div className='cu-another-wrapper'>
                <div className='l-side'>
                    <div className='txt'>
                        Nu ezitați să ne lăsați un mesaj prin intermediul acestui formular sau să vizitați sediul nostru.
                        Echipa noastră caută întotdeauna feedback-uri și comentarii de la dumneavoastră pentru
                        îmbunătățirea calității serviciilor noastre. Programul nostru de lucru este de la 9:00 la 17:00 de
                        Luni până vineri (cu excepția sărbătorilor și weekendurilor).
                        </div>
                    <div className='wrapper'>
                        <div className='address-wrapper'>
                            <div className='heading'>
                                <FontAwesome name='fas fa-map-marker' />
                                <span>Adresa</span>
                            </div>
                            <div className='content'>
                                Șoseaua Virtuții 148, București 060787
                            </div>
                        </div>
                        <div className='opening-h-wrapper'>
                            <div className='heading'>
                                <FontAwesome name='fas fa-clock-o' />

                                <span>Orele de lucru</span>
                            </div>
                            <div className='content'>
                                Luni pana Vineri: 8:00 - 20:00, Sambata & Duminica: 10:00 - 18:00
                            </div>
                        </div>
                        <div className='phone-wrapper'>
                            <div className='heading'>
                                <FontAwesome name='fas fa-phone' />
                                <span>Telefon</span>
                            </div>
                            <div className='content'>
                                <span>Nr: 0774 324 806</span>
                            </div>
                        </div>
                        <div className='email-wrapper'>
                            <div className='heading'>
                                <FontAwesome name='fas fa-envelope' />

                                <span>Email</span>
                            </div>
                            <div className='content'>
                                techshop@example.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className='r-side'>
                    <div className='heading'>
                        Formular
                    </div>
                    <div className='form-wrapper'>
                        <input type='text' placeholder='Nume' />
                        <input type='email' required='true' placeholder='Email *' />
                        <input type='text' placeholder='Nr. telefon mobil' />
                        <textarea placeholder="Comentarii"></textarea>
                        <button >Trimite</button>
                    </div>
                </div>
            </div>


            <div className='cu-footer-copyright'>
                <div>
                    <FooterComponent />
                </div>
                <div>
                    <CopyrightComponent />
                </div>
            </div>
        </div >
    )
}
