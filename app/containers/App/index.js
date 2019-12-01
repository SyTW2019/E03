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
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

import axios from 'axios';

import Footer from 'components/Footer'
import Header from 'components/Header'

import GlobalStyle from '../../global-styles';
import SignUp from '../../components/SignUp';

import Registro from '../Registro';
import Card from '../PaginaPrincipal';
import Inicio from '../InicioSesion';
import Categoria from '../Categorias';
import NotFound from '../NotFound';
import { IntlProvider } from 'react-intl'

export default function App() {

  return (
    <IntlProvider locale="en">
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
    </IntlProvider>
  );
}
