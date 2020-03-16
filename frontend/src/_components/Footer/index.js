import React from 'react';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';
import messages from './messages';


function Footer() {
  return (

    <div class="d-flex border-top mt-4 align-items-center justify-content-around bg-light">

      <div class="bd-highlight ml-5 mt-3 mb-2">
          Dirección: 
      </div>

      <div class="bd-highlight mr-5 mt-3 mb-2">
          Ayuda: 
      </div>

      <div class="bd-highlight ml-5 mt-3 mb-2 text-secondary">
          <div class="mb-1">
            CONTACTO 
          </div>

          <div class="d-flex align-items-center">
            
           <img src="../../../images/github.png" alt="logoGitHub" class="img-responsive img-fluid" 
                height="30" width="30"/>
      
            <a href="https://github.com/SyTW2019/E03" class="ml-1">GitHub del Proyecto</a>
         
           </div>

          <div class="d-flex align-items-center">

            <img src="../../../images/correo.jpg" alt="logoCorreo" class="img-responsive img-fluid ml-1" 
                height="20" width="20"/>

            <a href="alu0101061672@ull.edu.es" class="pl-2">alu0101061672@ull.edu.es</a>
      
           </div>   

           <div class="d-flex align-items-center">

            <img src="../../../images/correo.jpg" alt="logoCorreo" class="img-responsive img-fluid ml-1" 
                height="20" width="20"/>

            <a href="alu0101029993@ull.edu.es" class="pl-2">alu0101029993@ull.edu.es</a>
      
           </div>   

           <div class="d-flex align-items-center">

            <img src="../../../images/correo.jpg" alt="logoCorreo" class="img-responsive img-fluid ml-1" 
                height="20" width="20"/>

            <a href="alu0100954609@ull.edu.es" class="pl-2">alu0100954609@ull.edu.es</a>
      
           </div>   

           <div class="d-flex align-items-center">

            <img src="../../../images/correo.jpg" alt="logoCorreo" class="img-responsive img-fluid ml-1" 
            height="20" width="20"/>

            <a href="alu0101028026@ull.edu.es" class="pl-2">alu0101028026@ull.edu.es</a>

          </div>  


          <div class="d-flex align-items-center">

            <img src="../../../images/correo.jpg" alt="logoCorreo" class="img-responsive img-fluid ml-1" 
            height="20" width="20"/>

            <a href="alu0101045603@ull.edu.es" class="pl-2">alu0101045603@ull.edu.es</a>

          </div>  
    
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
