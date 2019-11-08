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

import H1 from 'components/myH1'
import Input from 'components/Input'
import Button from 'components/myButton'

import GlobalStyle from '../../global-styles';

export default function App() {

  //QUIZAS GUARDAR NOMBRE CORREO Y CONTRASEÑA CON STATE

  return (

    <div>
    <H1 title="Introduzca nombre"/>
    <Input id="nom"/>
    <H1 title="Introduzca correo electrónico"/>
    <Input id="cor"/>
    <H1 title="Introduzca contraseña"/>
    <Input id="con"/>
    <Button onClick="inDB()" title="añadir"/>
    </div>
  );
}
