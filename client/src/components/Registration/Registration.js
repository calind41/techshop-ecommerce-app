import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Registration.css'

import FooterComponent from '../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../LandingPage/CopyrightComponent/CopyrightComponent'

import ReactGa from 'react-ga';

export default function Registration() {

    const [submited, setSubmited] = useState(false);
    useEffect(() => {

    }, [submited])

    const createAccount = async (e) => {
        let validData = true;

        let prenume = document.querySelector('#r-prenume').value;
        if (prenume === '') {
            alert('Prenumele este obligatoriu')
            validData = false;
        }
        let nume = document.querySelector('#r-nume').value;
        if (nume === '') {
            alert('Numele este obligatoriu')
            validData = false;
        }
        let email = document.querySelector('#r-email').value;
        if (email === '') {
            alert('Email-ul este obligatoriu')
            validData = false;
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            alert('Ai introdus un email invalid')
            validData = false;
        }

        let parola = document.querySelector('#r-pass').value;
        let retype_parola = document.querySelector('#retype-pass').value;

        if (parola === '') {
            alert('Parola este obligatorie!');
            validData = false;
        }
        if (retype_parola === '') {
            alert('Confirmarea parolei este obligatorie')
            validData = false;
        }
        if (parola !== retype_parola) {
            alert('Parolele nu coincid!');
            validData = false;
        }

        if (validData) {
            const clientData = {
                prenume,
                nume,
                email,
                parola
            };
            await axios.post(`http://localhost:5000/api/v1/clients/register`, clientData);
            window.location.reload();
        }


        // FOR GOOGLE ANALYTICS
        ReactGa.event({
            category: 'Button',
            action: 'Clicked the register button'
        })

    }
    return (
        <div className='registration-container'>
            <div className='reg-heading'>
                INREGISTRARE
            </div>
            <div className='reg-form-container'>
                <input id='r-prenume' type='text' placeholder='Prenume *' required='true' />
                <input id='r-nume' type='text' placeholder='Nume *' required='true' />
                <input id='r-email' type='email' placeholder='Adresa Email *' required='true' />
                <input id='r-pass' type='password' placeholder='Parola *' required='true' />
                <input id='retype-pass' type='password' placeholder='Confirmati Parola *' required='true' />
                <Link to='/authorization'>
                    <button onClick={(e) => createAccount(e)}>Creare Cont</button>
                </Link>
            </div>

            <div className='registration-footer-copyright'>
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
