import React from 'react';
import H3 from '../_components/H3';
import Input from '../_components/Input';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from '@material-ui/core/InputAdornment';
import ReduxThunk from 'redux-thunk';
import TextField from '@material-ui/core/TextField';

import './styles.css';

import { userActions } from '../_actions';

import '../styles.css'

class RegisterPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
       
      },
      submitted: false,
      emailError: false,
      pwdError: false,
      nameError: false,
      
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleErrorEmail = this.handleErrorEmail.bind(this)
    this.handleErrorPwd = this.handleErrorPwd.bind(this) 
    this.handleErrorName = this.handleErrorName.bind(this)
    
  }

  handleChange(event) {
    const { name, value } = event.target
    const { user } = this.state
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Errores");
    this.handleErrorName();
    this.handleErrorEmail();
    this.handleErrorPwd();
  
    
    this.setState({ submitted: true })
    const { user } = this.state;
    if (user.firstName && user.lastName && user.username && user.password && user.pwdError) {
    
        
		
      		this.props.register(user);
        
        
    }
  }


    handleErrorName(event) {
	if(this.checkName())
	    this.setState({
		nameError:false,
  	    })
        else
            this.setState({
                nameError:true,
                
            })
    }


    handleErrorEmail(event){
        if(this.validateEmail())
            this.setState({
                emailError:false,
               
            })
        else
            this.setState({
                emailError:true,
                
            })
        
    }
    handleErrorPwd(event){
        if(this.check_pwd())

		this.setState({

                	pwdError:false,

		
            })
        else
            this.setState({
                
                pwdError:true,
            })
        
    }


    

    validateEmail(){
        const { user } = this.state;
        console.log(user.username)
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.username))
        { user.emailError = true;
          return true;
        }
        else{ 
	  user.emailError = false;
          return false;
        }
    }



    check_pwd(){
	const { user } = this.state;
        console.log("en el check")
        
            if(user.password.length >= 6){
                if((/^(?=.*[a-z])(?=.*[A-Z])/).test(user.password)){
		    user.pwdError = true;
                    return true;
                }
                else{
                    user.pwdError = false;
                    return false;
                }
		}
            else{
                user.pwdError = false;
                return false;
            }
	
    
 }





    checkName(){
        const { user } = this.state;
	if(user.firstName.length === 0){
		
		return false;
	}
	else
		return true;
    }




 

  render() {
    const { registering } = this.props
    const { user, submitted } = this.state
    return (

	<div className="back" >
	<div className="centrar">
	
      <div className="col-md-6 col-md-offset-3"  >
	

	<h2>Create Account</h2>
	<br />

        
	

        <form name="form" onSubmit={this.handleSubmit}>
          <div 
            className={
              'form-group' + (submitted && !user.firstName ? ' has-error' : '')
            }
          >
            <label htmlFor="firstName">First Name</label>
		

	   
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={user.firstName}
	      
              onChange={this.handleChange}

		
            />
		
             
            {submitted && !user.firstName && (
              <div className="help-block">First Name is required</div>
            )}

	     
	    { user.firstName && (
		<div><span>&#9989;</span></div>
	     )}

          </div>
          <div
            className={
              'form-group' + (submitted && !user.lastName ? ' has-error' : '')
            }
          >
            <label htmlFor="lastName">Last Name</label>
	    	
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={user.lastName}
	      
              onChange={this.handleChange}
            />

            {submitted && !user.lastName && (
              <div className="help-block">Last Name is required</div>
            )}

	    { user.lastName && (
		<div><span>&#9989;</span></div> )}



          </div>
          <div
            className={
              'form-group' + (submitted && !user.username ? ' has-error' : '')
            }
          >
            <label htmlFor="username">Email</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={user.username}
              
              onChange={this.handleChange}
            />
            {submitted && !user.username && (
              <div className="help-block">Email is required
		
		</div>
            )}
	    { !user.emailError && user.username && (
		<div className="help-block">Email must have the following format: example@example.com </div>)}


	    {  user.username && user.emailError &&(
		<div><span>&#9989;</span></div>)}
          </div>
          <div
            className={
              'form-group' + (submitted && !user.password ? ' has-error' : '')
            }
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={user.password}
	      
              onChange={this.handleChange}
            />
            {submitted && !user.password && (
              <div className="help-block">Password is required
		
		</div>
		
            )}
	
	    { !user.pwdError && user.password &&(
		<div className="help-block">Password must have atleast 6 characters
		<div >Password must have atleast 1 capital letter</div> </div>)}
		
		{ user.pwdError && user.password &&(
		<div><span>&#9989;</span></div>)}
          </div>



	  <br />

          <div className="form-group">
            <button className="btn btn-primary">Sign up</button>
            {registering && (
              <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            )}

	    
	   <p>
		<br />Aleady have an account? <br />
            <Link to="/login" className="btn btn-link">
              Login here
            </Link>
	</p>
          </div>
        </form>
	</div>
	</div>

      <div className="centrar">
        <div className="col-md-6 col-md-offset-3">
          <h2>Register</h2>
          <form name="form" onSubmit={this.handleSubmit}>
            <div
              className={
                'form-group' +
                (submitted && !user.firstName ? ' has-error' : '')
              }
            >
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={user.firstName}
                onChange={this.handleChange}
              />
              {submitted && !user.firstName && (
                <div className="help-block">First Name is required</div>
              )}
            </div>
            <div
              className={
                'form-group' + (submitted && !user.lastName ? ' has-error' : '')
              }
            >
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={user.lastName}
                onChange={this.handleChange}
              />
              {submitted && !user.lastName && (
                <div className="help-block">Last Name is required</div>
              )}
            </div>
            <div
              className={
                'form-group' + (submitted && !user.username ? ' has-error' : '')
              }
            >
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={user.username}
                onChange={this.handleChange}
              />
              {submitted && !user.username && (
                <div className="help-block">Username is required</div>
              )}
            </div>
            <div
              className={
                'form-group' + (submitted && !user.password ? ' has-error' : '')
              }
            >
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={user.password}
                onChange={this.handleChange}
              />
              {submitted && !user.password && (
                <div className="help-block">Password is required</div>
              )}
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Register</button>
              {registering && (
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              )}
              <Link to="/login" className="btn btn-link">
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
  const { registering } = state.registration
  return { registering }
}

const actionCreators = {
  register: userActions.register,
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage)
export { connectedRegisterPage as RegisterPage }
