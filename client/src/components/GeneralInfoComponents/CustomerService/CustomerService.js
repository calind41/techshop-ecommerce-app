import React from 'react'
import './CustomerService.css'


import FooterComponent from '../../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../../LandingPage/CopyrightComponent/CopyrightComponent'

export default function CustomerService() {
    return (
        <div className='customer-service-container'>
            <div className='h1-cs'>
                SERVICIU CLIENTI
            </div>
            <div className='h4-txt1'>
                LIVRARE
            </div>
            <div className='p-txt1'>
                <p className='text1'>
                    BUNĂ ZIUA ȘI BINE AȚI VENIT PE PAGINA DE INFORMARE PENTRU EXPEDIERE ȘI LIVRARE! AICI puteți obține  informații utile despre TERMENI ȘI CONDIȚII DE LIVRARE A MĂRFURILOR NOASTRE
                </p>
            </div>
            <div className='p-txt2'>
                <p className='text2'>

                    Puteți achiziționa articolele online și să le ridicați la magazinul nostru de pe stradă sau să le expediați direct la ușa dvs.
                    Transportul este gratuit pentru anumite comenzi. Folosim cei mai buni transportatori din afacere pentru a ne asigura că comanda dvs.
                    va ajunge la timp. Din pagina Secure Checkout veți vedea descrierea articolului, prețul și calendarul livrării.
                    Acolo unde este disponibil, puteți alege, de asemenea, o metodă de livrare mai rapidă pentru fiecare articol din
                    comanda dvs., pentru o taxă suplimentară. Timpurile de livrare variază în funcție de adresa de livrare selectată,
                    disponibilitatea articolelor dvs. și ora din care faceți comanda.
                </p>
            </div>
            <div className='h4-txt2'>
                COST
            </div>
            <div className='cost-table'>
                <table>
                    <tr>
                        <th><span>Servicii</span></th>
                        <th><span>Locații</span></th>
                        <th><span>Program de Livrare</span></th>
                        <th><span>Cost Expediere</span></th>
                    </tr>
                    <tbody>

                        <tr>
                            <td>Royal mail Serviciu clasa 1 (Valoarea comenzii 100lei sau mai putin)</td>
                            <td>Toată Romania  & cateva Țări Europene</td>
                            <td>1-3 zile Luni - Sambata</td>
                            <td>22.31lei</td>
                        </tr>
                        <tr>
                            <td>Royal mail Tracker (Valoarea comenzii  223lei sau mai puțin)</td>
                            <td>Toată Romania</td>
                            <td>Livrare în 1-3 zile 7.30 - 17.30 Luni - Vineri</td>
                            <td>200lei</td>
                        </tr>
                        <tr>
                            <td>Livrare Curier Standard</td>
                            <td>Doar în Romania</td>
                            <td>1 - 3 zile Luni - Sambata</td>
                            <td>500lei</td>
                        </tr>

                    </tbody>

                </table>
            </div>
            <div className='h4-txt3'>
                LIVRARE GRATIS
            </div>
            <div className='p-txt3'>
                <p className='text3'>
                    Livrarea gratuită de două zile este disponibilă pentru articolele din stoc. Puteți vedea  dacă
                    articolul dvs. este în stoc. Transportul gratuit de două zile nu este disponibil pe produse personalizate,
                    gravate și pentru anumite tipuri de comenzi, inclusiv pentru comenzile plătite cu finanțare sau prin transfer
                    bancar. Pentru a beneficia de transport gratuit de două zile, va trebui să plasați comanda până la 17:00, de luni
                    până vineri. De exemplu, dacă comandați mărfurile înainte de ora 17:00, de luni până vineri, le vom livra în două zile lucrătoare.
                </p>
            </div>

            <div className='cs-footer-copyright'>
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
