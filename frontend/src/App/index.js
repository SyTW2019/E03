import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { history } from '../_helpers'
import { alertActions } from '../_actions'
import { PrivateRoute } from '../_components/PrivateRoute'
import { HomePage } from '../HomePage'
import { LoginPage } from '../LoginPage'
import { RegisterPage } from '../RegisterPage'
import { Home } from '../Home'
import { Profile } from '../Profile'
import { CreateEvent } from '../CreateEvent'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import { Detail } from '../Detail'

import './app.css'

function logged() {
  return localStorage.getItem('user') !== null ? true : false
}

class App extends React.Component {
  constructor(props) {
    super(props)

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts()
    })
  }

  render() {
    const { alert } = this.props
    return (
      <IntlProvider locale="en">
        <div>
          {alert.message && (
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}
          <Router history={history}>
            <div>
              <Header />
              <div className="main">
                <Switch>
                  <React.Fragment>
                    {!logged() && (
                      <div>
                        <Route exact path="/">
                          <Redirect to="/login" />
                        </Route>
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Redirect from="*" to="/login" />
                      </div>
                    )}
                    {logged() && (
                      <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/detail" component={Detail} />
                        <Route
                          exact
                          path="/create-event"
                          component={CreateEvent}
                        />
                        <Route exact path="/logout" component={HomePage} />
                        <Route exact path="/profile" component={Profile} />
                        <Redirect from="*" to="/" />
                      </div>
                    )}
                  </React.Fragment>
                </Switch>
              </div>
            </div>
            <div>
              <Footer />
            </div>
          </Router>
        </div>
      </IntlProvider>
    )
  }
}

function mapState(state) {
  const { alert } = state
  return { alert }
}

const actionCreators = {
  clearAlerts: alertActions.clear,
}

const connectedApp = connect(mapState, actionCreators)(App)
export { connectedApp as App }
