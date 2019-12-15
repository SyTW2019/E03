import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import SignUp from 'components/SignUp';

export default function Registro() {

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
      <SignUp action={nueva} />
    </div>
  );

}
