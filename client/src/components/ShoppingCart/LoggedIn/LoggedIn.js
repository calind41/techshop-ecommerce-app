import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './LoggedIn.css'

import FooterComponent from '../../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../../LandingPage/CopyrightComponent/CopyrightComponent'
import jwt from 'jsonwebtoken'


export default function LoggedIn({ match, location }) {



    const isLogged = JSON.parse(localStorage.getItem('userLoggedIn'));
    const [decoded, setDecoded] = useState('');
    // let inCart = JSON.parse(localStorage.getItem('inCart') || "[]");

    console.log('JWT IS ', localStorage.getItem('jwtToken'));
    useEffect(() => {
        const d = jwt.decode(localStorage.getItem('jwtToken'));
        console.log('decoded jwt ', decoded);
        setDecoded(d);
    }, [])



    return isLogged ? (


        <div className='loggedInContainer' >
            <div className='profile-container'>

                <div className='dateCont'>
                    <div>
                        <img id='profile-img' src='https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png' />
                    </div>

                    <div className='date'>
                        <div>
                            <span>Prenume: </span><span>{decoded.prenume} </span>
                        </div>
                        <div>
                            <span>Nume: </span><span> {decoded.nume}</span>
                        </div>
                        <div>
                            <span>Email: </span><span>{decoded.email}</span>
                        </div>
                    </div>
                </div>

                <div className='activitateaMea'>
                    <div>Activitatea mea</div>
                    <div className='comenzi-container'>
                        <div>
                            <img id='comanda-img' src='https://www.svgrepo.com/show/160067/delivered-box-verification-symbol.svg' />
                        </div>
                        <div>
                            120 comenzi plasate
                        </div>
                    </div>

                </div>
                <div className='adreseleMele'>
                    <div>Adresele mele</div>
                    <div>1 adresa salvata</div>
                    <div>ADRESA PREFERATA</div>
                    <div>
                        <div>Calin Dodon</div>
                        <div>{decoded.nr_telefon ? decoded.nr_telefon : 'fara telefon'}</div>
                        {/* <div>Splaiul Independentei 290 camin P16, Bucureşti (Sectorul 6), Bucureşti</div> */}
                        <div>{decoded.adrese ? decoded.adrese[0] : 'Nu a fost adaugata o adresa'}</div>
                    </div>
                    <div>
                        Adminnistreaza adresele de livrare
                    </div>
                </div>
                <div className='dateFacturare'>
                    <div>Date facturare</div>
                    <div>1 adresa salvata</div>
                    <div>METODA PREFERATA</div>
                    <div>
                        <div>Calin Dodon</div>
                        <div>{decoded.nr_telefon ? decoded.nr_telefon : 'fara telefon'}</div>
                        {/* <div>Splaiul Independentei 290 camin P16, Bucureşti (Sectorul 6), Bucureşti</div> */}
                        <div>{decoded.adresa_facturare ? decoded.adresa_facturare : 'Nu a fost adaugata o adresa'}</div>
                    </div>
                    <div>
                        Adminnistreaza datele de facturare
                    </div>
                </div>
            </div >
            <div className='cart-footer-copyright'>
                <div>
                    <FooterComponent />
                </div>
                <div>
                    <CopyrightComponent />
                </div>
            </div>
        </div >) : null;
}


