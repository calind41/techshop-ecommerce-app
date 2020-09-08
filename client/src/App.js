import React, { Fragment, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import TopComponent from './components/TopComponent/TopComponent';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Shop from './components/Shop/Shop';

import Categories from './components/Shop/Categories/Categories'

import ProductDetailView from './components/Shop/ProductDetailView/ProductDetailView'
import AboutUs from './components/GeneralInfoComponents/AboutUs/AboutUs'
import CustomerService from './components/GeneralInfoComponents/CustomerService/CustomerService'
import ShippingDelivery from './components/GeneralInfoComponents/ShippingDelivery/ShippingDelivery'
import SecurePayment from './components/GeneralInfoComponents/SecurePayment/SecurePayment'
import ContactUs from './components/GeneralInfoComponents/ContactUs/ContactUs'
import Authorization from './components/Authorization/Authorization'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import Registration from './components/Registration/Registration'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import LoggedIn from './components/ShoppingCart/LoggedIn/LoggedIn';
import CardPayment from './components/StripeCardPayment/CardPayment';
import FormDialog from './components/ShoppingCart/FormDialog/FormDialog';

import ReactGa from 'react-ga';



function App() {

  useEffect(() => {
    ReactGa.initialize('UA-164071727-1')

    ReactGa.timing({
      category: "Load Performace",
      variable: "Some metric",
      value: "Value of Metric"
    })

    // to report pageview
    ReactGa.pageview(window.location.pathname + window.location.search);

  }, [window.location.pathname + window.location.search])

  return (
    <Fragment>
      <TopComponent />
      <Navbar />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/shop/:category' component={(props) => <Shop {...props} key={window.location.pathname} />} />
        <Route exact path='/details' component={(props) => <ProductDetailView {...props} key={window.location.pathname} />} />
        <Route exact path='/despre_noi' component={AboutUs} />
        <Route exact path='/servicii_clienti' component={CustomerService} />
        <Route exact path='/expediere_si_livrare' component={ShippingDelivery} />
        <Route exact path='/plata_securizata' component={SecurePayment} />
        <Route exact path='/contact' component={ContactUs} />
        <Route exact path='/authorization' component={Authorization} />
        <Route exact path='/forgotPass' component={ForgotPassword} />
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/cart' component={ShoppingCart} />
        <Route exact path='/logged_in' component={LoggedIn} />
        <Route exact path='/cardPay' component={CardPayment} />
      </Switch>
      {/* <Shop initalCategory='Laptops' />
      {/* <Test width='500px' height='500px' /> */}

    </Fragment>
  );
}

export default App;
