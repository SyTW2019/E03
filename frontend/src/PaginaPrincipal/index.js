
import React from 'react';

import Card from "../_components/Card";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


export class PaginaPrincipal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card src="images/book.jpg"/>
            </Grid>
            <Grid item xs={12}>
              <Card src="images/concierto.jpg" />
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}
/*TODO: 
  Más props para las tarjetas
*/