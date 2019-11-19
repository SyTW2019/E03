/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import axios from 'axios';

import H1 from 'components/myH1'
import Input from 'components/Input'
import Button from 'components/myButton'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Card from 'components/Card'

import GlobalStyle from '../../global-styles';
import SignUp from '../../components/SignUp';

export default function App() {

  //QUIZAS GUARDAR NOMBRE CORREO Y CONTRASEÑA CON STATE
  function nueva(user){
    axios.post('http://localhost:3000/usuario', user)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    });
   } 

  return (
    <div>
      <Header />
      <SignUp action={nueva} />
      <Footer />
    </div>
  );
}
