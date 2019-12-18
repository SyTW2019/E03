import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

function Header() {
  
  return (
    <div>
      <A href="images/logo.png">
        <Img src="images/event.jpg" alt="react-boilerplate - Logo" />
      </A>
      
      <NavBar>

        <HeaderLink to="/" >
          <FormattedMessage {...messages.home} />
        </HeaderLink>

        <HeaderLink to="/login">
          <FormattedMessage {...messages.SignIn} />
        </HeaderLink>

        <HeaderLink to="/register">
          <FormattedMessage {...messages.SignUp} />
        </HeaderLink>

        <HeaderLink to="/categoria">
          <FormattedMessage {...messages.Category} />
        </HeaderLink>

      </NavBar>
    
    </div>
  );
}



export default Header;



/*
  <NavBar>

        <HeaderLink to="/" >
          <FormattedMessage {...messages.home} />
        </HeaderLink>

        <HeaderLink to="/login">
          <FormattedMessage {...messages.SignIn} />
        </HeaderLink>

        <HeaderLink to="/register">
          <FormattedMessage {...messages.SignUp} />
        </HeaderLink>

        <HeaderLink to="/categoria">
          <FormattedMessage {...messages.Category} />
        </HeaderLink>

      </NavBar>


<section>
       // <FormattedMessage /> //{...messages.licenseMessage} />
      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        //<FormattedMessage
         // {...messages.authorMessage}
          values={{
            author: <A href="https://twitter.com/mxstbr">Max Stoiber</A>,
          }}
        ///>
      </section>*/
