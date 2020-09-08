import React from 'react'

import FooterComponent from '../../LandingPage/FooterComponent/FooterComponent'
import CopyrightComponent from '../../LandingPage/CopyrightComponent/CopyrightComponent'

import './AboutUs.css'
import FontAwesome from 'react-fontawesome'

export default function AboutUs() {
    return (
        <div className='aboutus-container'>
            <div className='h1-aboutus'>
                <h1>DESPRE NOI </h1>
            </div>
            <div className='h4-txt'>
                <h4>
                    Respectăm cerințele dvs. și gestionăm nevoile cu grijă
                </h4>
            </div>
            <div className='p-txt'>
            {/* <p className='text'>Our store is more than just another average online retailer. We sell not only top quality products, but give our customers a positive online shopping experience. Forget about struggling to do everything at once: taking care of the family, running your business, walking your dog, cleaning the house, doing the shopping, etc. Purchase the goods you need every day or just like in a few clicks or taps, depending on the device you use to access the Internet. We work to make your life more enjoyable.</p> */}
            <p className='text'>Magazinul nostru este mai mult decât un alt retailer online mediu. Vindem nu numai produse de cea mai bună calitate, dar oferim clienților noștri o experiență pozitivă de cumpărături online. 
                
Cumpărați bunurile de care aveți nevoie în fiecare zi doar  în câteva clicuri sau apăsări, în funcție de dispozitivul pe care îl utilizați pentru a accesa Internetul. Lucrăm pentru a vă face viața mai plăcută.
            </p>
            </div>
            <div className='stats'>
                <div id='products-avlbl'>
                    <div>
                        60
                    </div>
                    <div>
                        PRODUSE VALABILE
                    </div>
                </div>
                <div id='comeback-clt-percentg'>
                    <div>
                        81%
                    </div>
                    <div>
                        CLIENTI REVIN 
                    </div>
                </div>
                <div id='sitemembers'>
                    <div>
                        1000 
                    </div>
                    <div>
                        MEMBRI AI SITE-ULUI
                    </div>
                </div>
            </div>
            <div className='au-hrow'>

            </div>

            <div className='store-events-wrapper'>
                <div className='lbl'></div>
                <div className='store-events'>
                    <div className='st-ev-1'>
                        <div className='stev1-icon-wrapper'>
                            <FontAwesome name='fas fa-search' className='store-events-wrapper-icons' />
                        </div>
                        <div className='heading-txt'>
                            PENTRU CONVENIENȚA ALEGERII
                        </div>
                        <div className='txt'>
                           
Ne gândim la comoditatea alegerii tale. Produsele noastre sunt furnizate cu rating top care ar trebui să-i ajute pe cumpărătorii ezitați să ia o decizie. Mai mult, puteți căuta pe site-ul nostru dacă știți exact ce căutați sau utilizați o serie de filtre diferite care vă vor economisi considerabil timpul și eforturile.
                        </div>
                    </div>
                    <div className='st-ev-2'>
                        <div className='stev2-icon-wrapper'>
                            <FontAwesome name='fas fa-car'  className='store-events-wrapper-icons' />
                        </div>
                        <div className='heading-txt'>
                            LIVRARE IN TOATE REGIUNILE
                        </div>
                        <div className='txt'>
                        Livrăm mărfurile noastre în toată lumea. Indiferent de locul în care locuiți, comanda dvs. va fi expediată la timp și livrată chiar la ușa dvs. sau în orice altă locație declarată. Pachetele sunt tratate cu cea mai mare atenție, astfel încât produsele comandate vă vor fi în siguranță și solide, la fel cum vă așteptați să fie.                        </div>
                    </div>
                    <div className='st-ev-3'>
                        <div className='stev3-icon-wrapper'>
                            <FontAwesome name='fas fa-thumbs-up'  className='store-events-wrapper-icons'/>
                        </div>
                        <div className='heading-txt'>           
CEA MAI MARE CALITATE A PRODUSELOR
                        </div>
                        <div className='txt'>
Garantăm cea mai înaltă calitate a produselor pe care le comercializăm. Câteva decenii de operare de succes și mii de clienți fericiți ne lasă să ne simțim siguri în acest sens. În plus, toate articolele pe care le comercializăm trec printr-un control de calitate detaliat, astfel încât nicio nepotrivire a caracteristicilor nu poate scăpa de ochii profesioniștilor noștri.                        </div>
                    </div>
                </div>
            </div>
            <div className='au-hrow2'></div>
            <div className='testimonials-wrapper'>
                <div className='lbl'>TESTIMONIALE</div>
                <div className='tquotes-icon'>
                    <FontAwesome name='fas fa-quote-right' className='testimonials-icon' />
                </div>
                <div className='testimonials'>
                    <div>
                        <div className='name'>EDNA BARTON</div>
                        <div className='commentary'>
                        Având experiența deranjantă cu unele magazine online înainte am decis
                            sa spun „„ mulțumesc ” la tot personalul acestui magazin. Nu este numai prietenos,
                            dar livrează produse cu adevărat bune în termenii cât mai scurti. Intr-un cuvant,
                            sunt absolut multumita de achizitionarea si serviciul prestat. Totul a fost perfect!
                        </div>
                    </div>
                    <div>
                        <div className='name'>ROBERT JOHNSON</div>
                        <div className='commentary'>
                            Am făcut o achiziție recent la magazinul vostru. Comanda a fost
                            expediată și livrată la timp. Calitatea este superbă! Prețul este destul
                            rezonabil. Le-am spus tuturor prietenilor mei despre serviciul dvs. excelent și despre varietatea
                            la alegere. Cred că voi fi și clientul vostru fidel pe viitor. Doresc
                            magazinului vostru multi ani de prosperitate in continuare.
                        </div>
                    </div>
                    <div>
                        <div className='name'>JESSICA PRISTON</div>
                        <div className='commentary'>
                        Recomand acest magazin pentru calitatea produselor și serviciilor, 
                        viteza de livrare și consultanța oferită. 
                        De fiecare dată am beneficiat de servicii impecabile, înțelegere, răbdare. 
                        Mulțumesc pentru valoarea pe care o oferiți în continuare.
                        </div>
                    </div>
                </div>
            </div>
            <div className='au-footer-copyright'>
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
