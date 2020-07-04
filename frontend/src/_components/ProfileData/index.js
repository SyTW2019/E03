import React from 'react'
import { userActions } from '../../_actions'
import { connect } from 'react-redux'

class ProfileData extends React.Component {
  constructor(props) {
		super(props)
		
		this.state = {
		  username: '',
		  password: '',
		  firstName: '',
		  lastName: '',
		  createdDate: '',
		  component:'',
		  usuarios: [],
		  user:'',
		}

	}
  componentDidMount() {
		this.props.getUsers()
	  }

    render() {
      const { user, users } = this.props
      return (
        <div class="w-50 mt-5 ml-5"> 

          <h1> Username </h1>
          <p class="mb-3 ml-1">{user.username}</p>

          <h1> Name </h1>
          <p class="mb-3 ml-1">{user.firstName} {user.lastName} </p>

          <h1> Account creation date </h1>
          <p class="mb-3 ml-1">{user.createdDate.split('T')[0]}</p>

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
  }
  
  const connectedProfileData = connect(mapState, actionCreators)(ProfileData)
  export default connectedProfileData;