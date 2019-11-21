import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './event.jpg';
import messages from './messages';

function Header() {
  
  return (
    <div>
      <A href="/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A>

      <NavBar>

        <HeaderLink to="/" >
          <FormattedMessage {...messages.home} />
        </HeaderLink>

        <HeaderLink to="/SignIn">
          <FormattedMessage {...messages.SignIn} />
        </HeaderLink>

        <HeaderLink to="/SignUp">
          <FormattedMessage {...messages.SignUp} />
        </HeaderLink>

        <HeaderLink to="/Category">
          <FormattedMessage {...messages.Category} />
        </HeaderLink>

      </NavBar>
    </div>
  );
}



export default Header;



/*<section>
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
