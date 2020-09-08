import React from 'react'
import './ShippingDelivery.css'

import FooterComponent from '../../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../../LandingPage/CopyrightComponent/CopyrightComponent'
import FontAwesome from 'react-fontawesome'

export default function ShippingDelivery() {
    return (
        <div className='shipping-delivery-container'>
            <div className='h1-sd'>
                EXPEDIERE & LIVRARE
            </div>


            <div className='list-wrapper'>
                <div className='sd-h4-1'>
                    AICI SUNT CATEVA LUCRURI CARE TREBUIE LUATE IN CONSIDERARE, ÎN TIMP CE AȘTEPTAȚI COMANDA DUMNEAVOASTRĂ
                </div>
                <div className='list'>
                    <ul>
                        <li>Expediem în zilele lucrătoare. Luni - vineri, cu excepția sărbătorilor naționale.</li>
                        <li>Expedierea începe de la data la care ați primit email-ul cu „Comanda dvs. a fost expediată!” .</li>
                        <li>Estimarea de mai sus nu include timpul de fabricație - avem nevoie de 1-3 zile lucrătoare pentru a ne asigura că comanda dvs. personalizată este tot ceea ce ați sperat că va fi.</li>
                    </ul>
                </div>

            </div>





            <div className='sd-hrow'></div>

            <div className='sd-ptext4-wrapper'>
                <div className='sd-h4-3'>
                    <FontAwesome name='fas fa-truck' />
                    <span>CAT COSTA TRANSPORTUL?</span>
                </div>
                <div className='sd-ptext4'>
                    După ce ați făcut clic pe Secure Checkout, puteți introduce adresa de livrare și alege o metodă de expediere.
                    Costurile de expediere sunt apoi calculate și asimilate subtotalului dvs. din partea de jos a paginii.
                </div>
            </div>
            {/*  */}
            <div className='sd-ptext5-wrapper'>
                <div className='sd-h4-4'>
                    <FontAwesome name='fas fa-search' />
                    <span>ÎMI POT URMARI COMANDA?</span>
                </div>
                <div className='sd-ptext5'>
                    Ne bazăm pe o rețea globală de parteneri de transport  (UPS, FedEx, DHL) ca atare
                    precum și serviciile poștale locale (USPS) pentru a vă aduce comanda cât mai curând posibil.
                    Din acest motiv, urmărirea nu este întotdeauna disponibilă. Dacă comanda dvs. este trimisă de către un
                    serviciu care oferă urmărire comenzi, aceste detalii vor fi incluse în pagina dvs. de comenzi, precum și în email-ul pe care vi-l
                    trimitem.
                </div>
            </div>

            <div className='sd-ptext6-wrapper'>
                <div className='sd-h4-5'>
                    <FontAwesome name='fas fa-calendar' />

                    <span>DE UNDE VINE COMANDA MEA?</span>
                </div>
                <div className='sd-ptext6'>
                    Ne bazăm pe o rețea globală de parteneri de transport  (UPS, FedEx, DHL) ca atare
                    precum și serviciile poștale locale (USPS) pentru a vă aduce comanda cât mai curând posibil.
                    Din acest motiv, urmărirea nu este întotdeauna disponibilă. Dacă comanda dvs. este trimisă de către un
                    serviciu care oferă urmărire comenzi, aceste detalii vor fi incluse în pagina dvs. de comenzi, precum și în email-ul pe care vi-l
                    trimitem.
                </div>
            </div>

            <div className='sd-footer-copyright'>
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
