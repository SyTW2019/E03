/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import axios from 'axios';

import Footer from 'components/Footer'
import Header from 'components/Header'

import GlobalStyle from '../../global-styles';

import Registro from '../Registro';
import Inicio from '../PaginaPrincipal';
import InicioSesion from '../InicioSesion';
import Categoria from '../Categorias';
import NotFound from '../NotFound';

class App extends Component {
  render() {
    return (
      <IntlProvider locale="en">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Inicio} />
              <Route path="/SignUp" component={Registro} />
              <Route path="/SignIn" component={InicioSesion} />
              <Route path="/Category" component={Categoria} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </IntlProvider>
      /*   <IntlProvider locale="en">
           <Router>
             <Header/>
             <Switch>
               <Route exact path='/' Component={Card}><Card/></Route>
               <Route path='/SignUp' Component={Registro}><Registro/></Route>
               <Route path='/SignIn' Component={Inicio}><Inicio/></Route>
               <Route path='/Category' Component={Categoria}><Categoria/></Route>
               <Route path="*" component={NotFound}><NotFound/></Route>
             </Switch>
             <Footer/>
           </Router>
         </IntlProvider>*/

    );
  }
}

export default App;
