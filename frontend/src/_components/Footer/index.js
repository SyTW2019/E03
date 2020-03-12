import React from 'react';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';
import messages from './messages';


function Footer() {
  return (

    <div class="d-flex border-top mt-4 align-items-center justify-content-around bg-light">

      <div class="bd-highlight ml-5 mt-3 mb-2">
          Contacto: 
      </div>

      <div class="bd-highlight ml-5 mt-3 mb-2">
          Dirección: 
      </div>

      <div class="bd-highlight mr-5 mt-3 mb-2">
          Ayuda: 
      </div>

    
    </div>
    // <Wrapper>

	  // <section>
    //     <FormattedMessage {...messages.message} />
    // </section>

    // </Wrapper>
  );
}

export default Footer;
