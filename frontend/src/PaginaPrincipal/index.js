import React from 'react'

import Card from '../_components/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Grid from '@material-ui/core/Grid'
import CustomizedMenus from '../_components/CustomizedMenus'
import { assets } from '../_helpers'

export class PaginaPrincipal extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
    <Container fluid /* style={{minWidth: '1700px'}} */>
        <div>
          <Grid >
            <Grid className="mb-5 ml-5">
              <CustomizedMenus />
            </Grid>

        <div style={{display: 'grid', justifyContent: 'center'}}>
          <Row className="mb-5 w-100" /* style={{minWidth: '1700px'}} */>
          <Col style={{maxWidth: '400px'}}>
              <Card
                src="/images/book.jpg"
                title="Firma de Libros de Miguel Noguera"
                fecha="8 de Septiembre"
                desc="El autor estará firmando libros en la libreria Lemus de La Laguna"
                id="1"
              />
          </Col>
          <Col style={{maxWidth: '400px'}}>
              <Card
                src="/images/concierto.jpg"
                title="Concierto de Calamaro"
                fecha="7 de Julio"
                desc="Concierto del año en las Teresitas, Santa Cruz de Tenerife."
                id="2"
              />
          </Col>
          <Col style={{maxWidth: '400px'}}>
              <Card
                src="/images/book.jpg"
                title="Firma de Libros de Miguel Noguera"
                fecha="8 de Septiembre"
                desc="El autor estará firmando libros en la libreria Lemus de La Laguna"
                id="1"
              />
          </Col>

          <Col style={{maxWidth: '400px'}}>
              <Card
                src="/images/concierto.jpg"
                title="Concierto de Calamaro"
                fecha="7 de Julio"
                desc="Concierto del año en las Teresitas, Santa Cruz de Tenerife."
                id="2"
              />
          </Col>
        </Row>
        <Row className="mb-5 w-100" /* style={{minWidth: '1700px'}} */>
          <Col style={{maxWidth: '400px'}}>
              <Card
                src="/images/concierto.jpg"
                title="Concierto de Calamaro"
                fecha="7 de Julio"
                desc="Concierto del año en las Teresitas, Santa Cruz de Tenerife."
                id="2"
              />
          </Col>
          <Col style={{maxWidth: '400px'}}>
              <Card
                src="/images/book.jpg"
                title="Firma de Libros de Miguel Noguera"
                fecha="8 de Septiembre"
                desc="El autor estará firmando libros en la libreria Lemus de La Laguna"
                id="1"
              />
          </Col>
          <Col style={{maxWidth: '400px'}}>
              <Card
                src="/images/concierto.jpg"
                title="Concierto de Calamaro"
                fecha="7 de Julio"
                desc="Concierto del año en las Teresitas, Santa Cruz de Tenerife."
                id="2"
              />
          </Col>
          <Col style={{maxWidth: '400px'}}>
              <Card
                src="/images/book.jpg"
                title="Firma de Libros de Miguel Noguera"
                fecha="8 de Septiembre"
                desc="El autor estará firmando libros en la libreria Lemus de La Laguna"
                id="1"
              />
          </Col>
        </Row>
        </div>
        </Grid>
        </div>
      </Container>
    )
  }
}
/*TODO: 
  Más props para las tarjetas
*/
