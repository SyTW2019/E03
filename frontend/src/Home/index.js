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
      selectedId: '5f00c1968967417d9bf91596',
      eventos: undefined,
    
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  componentDidMount() {
    this.props.getEvents()

  }
  componentWillMount(){
    let eventos;
    if(this.props.events.event.events == 'undefined'){
      eventos = this.props;
    } else {
      eventos = this.props.events.event.events
    }
    this.setState({eventos});
  }

  toggleModal(id) {
    this.setState({ isOpen: !this.state.isOpen })
    this.setState({ selectedId: id })

  }
  
  render() {
    const eventos = this.state.eventos

    return (
       <Container fluid>
         <div>
         <Grid>
            <Grid className="mb-5 ml-5">
              <CustomizedMenus />
            </Grid>

            {eventos && (
            <div className="ml-5">
              <Row className="mb-5 w-100">
              {eventos.map((event, index) => (
                <Col style={{minWidth:"350px", maxWidth:"350px"}} key={index} className="mb-5">
                  <Card src={event.imageUrl} title={event.eventName} fechaInicio={event.beginDate.split('T')[0]}
                  descripcion={event.description} localizacion={event.location} id={event._id} 
                  onClick={() => this.toggleModal(event.id)}
                  key={index}>{JSON.stringify(event)}</Card>

                </Col>
              ))}
              </Row>
            </div>)}
                  
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
