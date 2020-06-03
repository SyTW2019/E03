import React from 'react'
import { FormattedMessage } from 'react-intl'
import NavBar from './NavBar'
import HeaderLink from './HeaderLink'
import messages from './messages'

function Header() {
  return (
    <div class="d-flex border-bottom mb-5 mt-2 align-items-center">
      <div class="bd-highlight justify-content-start ml-4 mr-2">
        <img
          src="../../../images/logo.png"
          alt="logo"
          class="img-responsive img-fluid"
          height="90"
          width="90"
        />
      </div>

      <div class="p-2 bd-highlight">
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>

          <HeaderLink to="/login">
            <FormattedMessage {...messages.SignIn} />
          </HeaderLink>

          <HeaderLink to="/register">
            <FormattedMessage {...messages.SignUp} />
          </HeaderLink>
        </NavBar>
      </div>
    </div>
  )
}

export default Header

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
