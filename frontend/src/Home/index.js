import React from 'react'

import Card from '../_components/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Grid from '@material-ui/core/Grid'
import CustomizedMenus from '../_components/CustomizedMenus'
import { eventActions } from '../_actions'
import { connect } from 'react-redux'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      id: '',

    }
  }
  componentDidMount() {
    //this.props.getEvents()
  }
  
  render() {
    const { event } = this.props
    return (
    <Container fluid>
        <div>
          <Grid >
            <Grid className="mb-5 ml-5">
              <CustomizedMenus />
            </Grid>

        <div style={{display: 'grid', justifyContent: 'center'}}>
          <Row className="mb-5 w-100">
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
        <Row className="mb-5 w-100">
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

function mapState(state) {
	const { users, authentication } = state
	const { user } = authentication
	return { user, users }
  }
  
  const actionCreators = {
	getEvents: eventActions.getAll,
  }
  
  const connectedHome = connect(mapState, actionCreators)(Home)
  export { connectedHome as Home }