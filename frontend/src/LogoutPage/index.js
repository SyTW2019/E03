import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import img from '../../images/logout.png'
import { userActions } from '../_actions'

import './logout.css'

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getUsers()
  }

  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id)
  }

  render() {
    const { user, users } = this.props
    return (
      <div className="centrar_logout">
        <div className="col-md-6 col-md-offset-3">
          <div className="cuadro">
            <img src={img} className="logout" alt="logo" />
            <h2>Hey, {user.firstName}!</h2>
            <hr></hr>
            <p>You're leaving. Are you sure?</p>
            <p>
              <Link to="/login" onClick={userActions.logout}>
                Yes, log me out
              </Link>
              <br></br>
              <br></br>
              <br></br>
              <Link to="/">No, I'm fine</Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

function mapState(state) {
  const { users, authentication } = state
  const { user } = authentication
  return { user, users }
}

const actionCreators = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete,
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage)
export { connectedHomePage as HomePage }
