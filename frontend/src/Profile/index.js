import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBView} from 'mdbreact';
import { userActions } from '../_actions'
import { connect } from 'react-redux'

import ProfileData from '../_components/ProfileData'
import EditProfile from '../_components/EditProfile'
import EventsProfile from '../_components/EventsProfile'
import InterestsProfile from '../_components/InterestsProfile'

class Profile extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
		  username: '',
		  password: '',
		  firstName: '',
		  lastName: '',
		  createdDate: '',
		  component:'',
		  user:'',
		}
	
		this.userData = this.userData.bind(this)
		this.editProfile = this.editProfile.bind(this)
		this.events = this.events.bind(this)
		this.interests = this.interests.bind(this)

	}
	componentDidMount() {
		this.props.getUsers()
	}
	
	userData(){
		this.setState({component: "datauser"});
	}

	editProfile(){
		this.setState({component: "editprofile"});
	}

	events(){
		this.setState({component: "events"});
	}

	interests(){
		this.setState({component: "interests"});
	}
	
	render() {
	 const component = this.state.component;
/* 	 const usuarios = this.componentDidMount();
 */	 const { user, users } = this.props

	 return(

		<div className="d-flex flex-row">

			<MDBCol md='4'>
		        <MDBCard narrow>
		          <MDBView cascade> 
		            <MDBCardImage
		              hover
		              overlay='white-slight'
		              className='card-img-top'
		              src='/images/ImgProfile.jpg'
		              alt='Profile image' />
		          </MDBView>

		          <MDBCardBody >
		            
					<div  className="d-flex flex-row justify-content-center alig-items-center">
						<div className="btn-group-vertical w-100" role="group" aria-label="Vertical button group">
							<button onClick={this.userData} type="button" className="btn btn-outline-dark rounded mb-2"> Datos relevantes del usuario</button>
							<button onClick={this.editProfile} type="button" className="btn btn-outline-dark rounded mb-2">Editar información</button>
							<button onClick={this.events} type="button" className="btn btn-outline-dark rounded mb-2">Eventos</button>
							<button onClick={this.interests} type="button" className="btn btn-outline-dark rounded mb-2">Intereses</button>
						</div>
					</div>

		          </MDBCardBody>
		        </MDBCard>
			</MDBCol> 
			{component == "datauser" && <ProfileData /> }
			{component == "editprofile" && <EditProfile /> }
			{component == "events" && <EventsProfile /> }
			{component == "interests" && <InterestsProfile /> }
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
  
  const connectedProfile = connect(mapState, actionCreators)(Profile)
  export { connectedProfile as Profile }