import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { eventActions } from '../../_actions'
import { assets } from '../../_helpers/assets'
import Image from 'react-bootstrap/Image'
import { userService } from '../../_services'

class EventModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { creator: '', id: '' }
  }
  componentDidMount() {
    this.props.getEvent(this.props.id)
    this.traslateCreator(this.props.event.creator)
  }
  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.event.creator !== prevProps.event.creator) {
  //     this.traslateCreator(this.props.event.creator)
  //   }
  // }
  async traslateCreator(id) {
    if (id != -1) {
      let creator = await userService.getById(id)
      this.setState({ creator: creator.username })
    }
  }

  getDate(date) {
    let aux = new Date(date)
    return aux.toISOString().slice(0, 10)
  }
  onAssistansList() {
    return this.props.event.guests.includes(this.props.user.id)
  }
  render() {
    let button = ''
    if (!this.onAssistansList())
      button = (
        <Button
          onClick={() => {
            this.props.joinEvent(this.props.event.id)
            this.props.onHide()
          }}
        >
          Join
        </Button>
      )
    else
      button = (
        <Button
          onClick={() => {
            this.props.unjoinEvent(this.props.event.id)
            this.props.onHide()
          }}
        >
          Unjoin
        </Button>
      )
    return (
      <Modal
        className=" mt-5"
        show={this.props.show}
        onHide={this.props.onHide}
        aria-labelledby={this.props.id}
        size={'lg'}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.event.eventName}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex-column justify-content-center mx-auto w-75 pt-0">
          <div className="mt-0">
            {true && (
              <Image
                src={assets('/images/book.jpg')} //this.props.event.
                fluid
                style={{ height: '150px' }}
                className="w-100"
              />
            )}
          </div>
          <div className="my-4 w-75">
            <div className="field">
              <div className="font-weight-bold mb-2">Description:</div>
              <p className="ml-4">{this.props.event.description}</p>
            </div>
            <div className="field">
              <div className="font-weight-bold mb-2">Starts:</div>
              <p className="ml-4">{this.getDate(this.props.event.beginDate)}</p>
            </div>
            {this.props.event.endDate && (
              <div className="field">
                <div className="font-weight-bold mb-2">Ends:</div>
                <p className="ml-4">{this.getDate(this.props.event.endDate)}</p>
              </div>
            )}
            <div className="field">
              <div className="font-weight-bold mb-2">Location:</div>
              <p className="ml-4">{this.props.event.location}</p>
            </div>
            <div className="field">
              <div className="font-weight-bold mb-2">Creator:</div>
              <p className="ml-4">{this.state.creator}</p>
            </div>
            <div className="field">
              <div className="font-weight-bold mb-2">Assistants:</div>
              <p className="ml-4">{this.props.event.guests.length}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>{button}</Modal.Footer>
      </Modal>
    )
  }
}
function mapState(state) {
  const { event } = state.eventInformation
  const { user } = state.authentication
  return { event, user }
}

const actionCreators = {
  getEvent: eventActions.getInformation,
  joinEvent: eventActions.join,
  unjoinEvent: eventActions.unjoin,
}

const connectedModal = connect(mapState, actionCreators)(EventModal)
export { connectedModal as EventModal }
