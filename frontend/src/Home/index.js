import React from 'react'

import Card from '../_components/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Grid from '@material-ui/core/Grid'
import CustomizedMenus from '../_components/CustomizedMenus'
import { eventActions } from '../_actions'
import { connect } from 'react-redux'
import { EventModal } from '../_components/Modal'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      selectedId: '5ef521d0a0c6d92e841cef0f',
    
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  componentDidMount() {
    this.props.getEvents()

  }
  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen })
    console.log("eee" + this.state.isOpen)
  }
  render() {
    const eventos = this.props.events.event.events
    return (
       <Container fluid>
         <div>
         <Grid>
            <Grid className="mb-5 ml-5">
              <CustomizedMenus />
            </Grid>
            
            <div className="ml-5">
              <Row className="mb-5 w-100">
              {eventos.map((event, index) => (
                <Col style={{minWidth:"350px", maxWidth:"350px"}} key={index} className="mb-5">
                  <Card src={event.imageUrl} title={event.eventName} fechaInicio={event.beginDate.split('T')[0]}
                  descripcion={event.description} localizacion={event.location} id={event._id} 
                  onClick={() => this.toggleModal()}
                  key={index}>{JSON.stringify(event)}</Card>

                </Col>
              ))}
              </Row>
            </div>
                  
{/*         <div>
          <Grid>
            <Grid className="mb-5 ml-5">
              <CustomizedMenus />
            </Grid>

            <div style={{ display: 'grid', justifyContent: 'center' }}>
              <Row className="mb-5 w-100">
                <Col className="mw-25">
                  <Card
                    src="/images/book.jpg"
                    title="Firma de Libros de Miguel Noguera"
                    fecha="8 de Septiembre"
                    desc="El autor estará firmando libros en la libreria Lemus de La Laguna"
                    id="1"
                    onClick={() => this.toggleModal()}
                  />
                </Col>
                <Col className="mw-25">
                  <Card
                    src="/images/concierto.jpg"
                    title="Concierto de Calamaro"
                    fecha="7 de Julio"
                    desc="Concierto del año en las Teresitas, Santa Cruz de Tenerife."
                    id="2"
                  />
                </Col>
                <Col className="mw-25">
                  <Card
                    src="/images/book.jpg"
                    title="Firma de Libros de Miguel Noguera"
                    fecha="8 de Septiembre"
                    desc="El autor estará firmando libros en la libreria Lemus de La Laguna"
                    id="1"
                  />
                </Col>

                <Col className="mw-25">
                  <Card
                    src="/images/concierto.jpg"
                    title="Concierto de Calamaro"
                    fecha="7 de Julio"
                    desc="Concierto del año en las Teresitas, Santa Cruz de Tenerife."
                    id="2"
                  />
                </Col>
              </Row>
              <Row className="mw-25">
                <Col style={{ maxWidth: '400px' }}>
                  <Card
                    src="/images/concierto.jpg"
                    title="Concierto de Calamaro"
                    fecha="7 de Julio"
                    desc="Concierto del año en las Teresitas, Santa Cruz de Tenerife."
                    id="2"
                  />
                </Col>
                <Col className="mw-25">
                  <Card
                    src="/images/book.jpg"
                    title="Firma de Libros de Miguel Noguera"
                    fecha="8 de Septiembre"
                    desc="El autor estará firmando libros en la libreria Lemus de La Laguna"
                    id="1"
                  />
                </Col>
                <Col className="mw-25">
                  <Card
                    src="/images/concierto.jpg"
                    title="Concierto de Calamaro"
                    fecha="7 de Julio"
                    desc="Concierto del año en las Teresitas, Santa Cruz de Tenerife."
                    id="2"
                  />
                </Col>
                <Col className="mw-25">
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
        </div>  */}
        {this.state.isOpen && (
         <EventModal
          show={this.state.isOpen}
          onHide={this.toggleModal}
          id={this.state.selectedId}
        ></EventModal>) } 
        </Grid>
        </div>
      </Container>
    )
  }
}

function mapState(state) {
  const { events } = state
  const { users, authentication } = state
  const { user } = authentication
  return { user, users, events }
}

const actionCreators = {
  getEvents: eventActions.getAll,
}

const connectedHome = connect(mapState, actionCreators)(Home)
export { connectedHome as Home }
