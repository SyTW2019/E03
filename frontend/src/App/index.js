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
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/register" component={RegisterPage} />
                  <Route path="/detail" component={Detail} />
                  <PrivateRoute
                    exact
                    path="/create-event"
                    component={CreateEvent}
                  />
                  <PrivateRoute exact path="/logout" component={HomePage} />
                  <PrivateRoute exact path="/profile" component={Profile} />
                  <Redirect from="*" to="/" />
                </Switch>
              </div>
            </div>
          </Router>
          <div className="mb-3">
            <Footer />
          </div>
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
