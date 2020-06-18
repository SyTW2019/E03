/* eslint-disable prettier/prettier */
import React from 'react'

import  Card  from '../_components/Card'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import CustomizedMenus from '../_components/CustomizedMenus'

export class PaginaPrincipal extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CustomizedMenus />
            </Grid>
            <Grid item xs={12}>
              <Card 
                src="images/book.jpg"
                title="Firma de Libros de Miguel Noguera"
                fecha="8 de Septiembre"
                desc="El autor estará firmando libros en la libreria Lemus de La Laguna"
                id='1'
                
              />
            </Grid>
            <Grid item xs={12}>
              <Card 
                src="images/concierto.jpg"
                title="Concierto de Calamaro"
                fecha="7 de Julio"
                desc="Concierto del año en las Teresitas, Santa Cruz de Tenerife."
                id='2'
                />
            </Grid>
          </Grid>
        </div>
      </Container>
    )
  }
}
/*TODO: 
  Más props para las tarjetas
*/
