/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from 'components/Footer'
import Header from 'components/Header'
import Registro from '../Registro';
import Inicio from '../PaginaPrincipal';
import InicioSesion from '../InicioSesion';
import Categoria from '../Categorias';
import NotFound from '../NotFound';

import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { history } from '../../components/_helpers';
import { alertActions } from '../../components/_actions';
import { PrivateRoute } from '../../components/_components';

class App extends React.Component {
  render() {
    return (
      <IntlProvider locale="en">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Inicio} />
              <Route path="/SignUp" component={Registro} />
              <Route path="/SignIn" component={InicioSesion} />
              <Route path="/Category" component={Categoria} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </IntlProvider>
      /*   <IntlProvider locale="en">
           <Router>
             <Header/>
             <Switch>
               <Route exact path='/' Component={Card}><Card/></Route>
               <Route path='/SignUp' Component={Registro}><Registro/></Route>
               <Route path='/SignIn' Component={Inicio}><Inicio/></Route>
               <Route path='/Category' Component={Categoria}><Categoria/></Route>
               <Route path="*" component={NotFound}><NotFound/></Route>
             </Switch>
             <Footer/>
           </Router>
         </IntlProvider>*/

    );
  }
}

export default App;
