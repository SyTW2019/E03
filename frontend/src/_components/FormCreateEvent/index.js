import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../../_actions'
import './styles.css'
import '../../styles.css'
import './func.js'

class FormCreateEvent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      event: {
        eventName: '',
        location: '',
        startDate: '',
        endDate: '',
        desc: '',
        pic: '',
      },
      submitted: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    const { event } = this.state
    this.setState({
      event: {
        ...event,
        [name]: value,
      },
    })
  }

  // crear un registerEvent para eventos
  // se tiene que registrar el evento y añadir una nueva card a la página principal
  handleSubmit(e) {
    e.preventDefault()

    this.setState({ submitted: true })
    const { event } = this.state
    if (
      event.eventName &&
      event.location &&
      event.startDate &&
      event.endDate &&
      event.desc &&
      event.pic
    ) {
      this.props.registerEvent(event)
    }
  }

  render() {
    const { creating } = this.props
    const { event, submitted } = this.state

    return (
      <div className="centrar">
        <div className="col-md-6 col-md-offset-3">
          <h2>Create Event</h2>
          <form name="form" onSubmit={this.handleSubmit}>
            <div
              className={
                'form-group' +
                (submitted && !event.eventName ? ' has-error' : '')
              }
            >
              <label htmlFor="eventName">Event name</label>
              <input
                type="text"
                className="form-control"
                name="eventName"
                value={event.eventName}
                onChange={this.handleChange}
              />
              {submitted && !event.eventName && (
                <div className="help-block">Event name is required</div>
              )}
            </div>

            <div
              className={
                'form-group' +
                (submitted && !event.location ? ' has-error' : '')
              }
            >
              <label htmlFor="location">Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={event.location}
                onChange={this.handleChange}
              />
              {submitted && !event.location && (
                <div className="help-block">Location is required</div>
              )}
            </div>

            <div
              className={
                'form-group' +
                (submitted && !event.startDate ? ' has-error' : '')
              }
            >
              <label htmlFor="startDate">Start date</label>
              <input
                type="date"
                className="form-control"
                name="startDate"
                value={event.startDate}
                onChange={this.handleChange}
              />
              {submitted && !event.startDate && (
                <div className="help-block">Start date is required</div>
              )}
            </div>

            <div
              className={
                'form-group' +
                (submitted && !event.endtDate ? ' has-error' : '')
              }
            >
              <label htmlFor="endDate">End date</label>
              <input
                type="date"
                className="form-control"
                name="endDate"
                value={event.endDate}
                onChange={this.handleChange}
              />
              {submitted && !event.endDate && (
                <div className="help-block">End date is required</div>
              )}
            </div>

            <div
              className={
                'form-group' + (submitted && !event.desc ? ' has-error' : '')
              }
            >
              <label htmlFor="desc">Description</label>
              <input
                type="text"
                className="form-control"
                name="desc"
                value={event.desc}
                onChange={this.handleChange}
              />
              {submitted && !event.desc && (
                <div className="help-block">A description is required</div>
              )}
            </div>

            <div
              className={
                'form-group' + (submitted && !event.pic ? ' has-error' : '')
              }
            >
              <label htmlFor="pic">Picture</label>
              <input
                type="file"
                id="upload_file"
                className="form-control"
                name="pic"
                value={event.pic}
                onChange={this.handleChange}
              />
              {submitted && !event.pic && (
                <div className="help-block">A picture is required</div>
              )}
            </div>

            <br />
            <div className="form-group">
              <button className="btn btn-primary">Create</button>
              <Link to="/" className="btn btn-link">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapState(state) {
  const { creating } = state.registration
  return { creating }
}

const actionCreators = {
  register: userActions.register,
}

const connectedCreateEventPage = connect(
  mapState,
  actionCreators
)(FormCreateEvent)
export { connectedCreateEventPage as FormCreateEvent }
