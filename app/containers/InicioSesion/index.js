import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import SignIn from 'components/SignIn';

export default function InicioSesion() {

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
      <SignIn action={nueva} />
    </div>
  );

}
