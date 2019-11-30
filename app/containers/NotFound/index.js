import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from './images/PageNotFound.jpg';

export default function NotFound() {
  
  return(
    <div>
    <img src={PageNotFound} style={{display: 'block', margin: 'auto', position: 'relative' }} alt="Error, página no encontrada" />
    </div>
  );
}
