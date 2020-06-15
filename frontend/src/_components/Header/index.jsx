import React from 'react'
import { FormattedMessage } from 'react-intl'
import NavBar from './NavBar'
import HeaderLink from './HeaderLink'
import messages from './messages'
import logo from '../../../images/logo.png'

function logged() {
  return (localStorage.getItem('user') !== null)? true : false;
}

function Header() {
  return (
    <div className="d-flex border-bottom mb-5 mt-2 align-items-center">
      <div className="bd-highlight justify-content-start ml-4 mr-2">
        <img
          src={logo}
          alt="logo"
          className="img-responsive img-fluid"
          height="90"
          width="90"
        />
      </div>

      <div className="p-2 bd-highlight">
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>

          {!logged() &&
            <HeaderLink to="/login">
              <FormattedMessage {...messages.SignIn} />
            </HeaderLink>
          }

          {logged() &&
            <HeaderLink to="/logout">
              <FormattedMessage {...messages.LogOut} />
            </HeaderLink>
          }
          
          {!logged() &&
            <HeaderLink to="/register">
              <FormattedMessage {...messages.SignUp} />
            </HeaderLink>
          }



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
