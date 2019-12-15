import React from "react";
import H3 from "../myH3"
import Input from "../Input";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from '@material-ui/core/InputAdornment';
import ReduxThunk from 'redux-thunk'
import { connect } from "react-redux";

const styles = theme => ({
    '@global': {
        body: {
          backgroundColor: theme.palette.common.white,
        },
      },
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    });


    function Copyright() {
        return (
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //name: "",
            //email: "",
            //password: "",
	    emailValue: "",
            userValue: "",
            pwdValue: "",
            pwdConfValue: "",
            emailError: false,
            pwdError: false,
	    nameError: false,
	    pwdVerifyError: false
        }
        //this.handleImput = this.handleImput.bind(this);
        //this.handleNewUser = this.handleNewUser.bind(this);
	this.handleChange = this.handleChange.bind(this);
        this.handleError = this.handleError.bind(this);
        this.handleErrorEmail = this.handleErrorEmail.bind(this);
        this.handleErrorPwd = this.handleErrorPwd.bind(this);
	this.handleErrorName = this.handleErrorName.bind(this);
        this.handleErrorVerifyPwd = this.handleErrorVerifyPwd.bind(this);
    }
    /*handleNewUser(event) {
        event.preventDefault();
        console.log(this.state)
        this.props.action(this.state)
        //Pasar el estado a las props
    }
    handleImput(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }*/


    handleChange = event => {
        event.preventDefault();
        
        const target = event.target;
        const value = target.value;
        const name = target.name
        this.setState({
          [name]: value
        });    
    }



    handleSubmit = event => {
        event.preventDefault();
    }

    handleError= event =>{
        console.log("Errores")
	this.handleErrorName();
        this.handleErrorEmail();
        this.handleErrorPwd();
	this.handleErrorVerifyPwd();
	//this.props.action(this.state)
        if( this.state.pwdError == false && this.state.pwdVerifyError == false && this.state.emailError == false && this.state.nameError == false )
        {
            event.preventDefault();
	    console.log(this.state)
	    this.props.action(this.state)
            
        }
	/*else{
        console.log(this.state)
	this.props.action(this.state)
	}*/
    }

    

    handleErrorName = event => {
	if(this.checkName())
	    this.setState({
		nameError:false,
  	    })
        else
            this.setState({
                nameError:true,
                
            })
    }


    handleErrorEmail = event => {
        if(this.validateEmail())
            this.setState({
                emailError:false,
               
            })
        else
            this.setState({
                emailError:true,
                
            })
        
    }
    handleErrorPwd = event => {
        if(this.check_pwd())
            this.setState({
                pwdError:false,
		
            })
        else
            this.setState({
                
                pwdError:true,
            })
        
    } 
    handleErrorVerifyPwd = event => {
        if(this.verify_pwd())
            this.setState({
                pwdVerifyError:false,
            })
        else
            this.setState({
                
                pwdVerifyError:true,
            })
        
    }

    validateEmail(){
        console.log(this.state.emailValue)
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.emailValue))
        {
          return true;
        }
        else{ 
	  alert("Error: Correo inválido, debe de tener el siguiente formato: example@example.com")
          return false;
        }
    }

    check_pwd(){
        console.log("en el check")
        //if(this.state.pwdValue === this.state.pwdConfValue){
            if(this.state.pwdValue.length >= 6){
                //if((/^(?=.*[a-z])(?=.*[A-Z])/).test(this.state.pwdValue)){
                    return true;
                //}
                /*else{
                    alert("Error: Debe contener almenos una letra mayúscula")
                    return false;
                }*/
		}
            else{
                alert("Error: Contraseña debe contener almenos 6 carácteres")
                return false;
            }
	
    }

    verify_pwd(){
	if(this.state.pwdConfValue === this.state.pwdValue){
	    return true;
        }
        else if(this.state.pwdConfValue !== this.state.pwdValue) {

	    alert("Error: Las contraseñas no coinciden")
            return false;
        }
    }

    checkName(){
	if(this.state.userValue.length === 0){
		alert("Error: Debe introducir un nombre de usuario")
		return false;
	}
	else
		return true;
    } 

    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <H3 title="Introduzca su nombre" />
                                <TextField
                                    required
				    variant="outlined"
				    fullWidth
				    autoFocus
                id="username"
                label="Nombre de Usuario"
                name = "userValue"
                value={this.state.userValue}
		error={this.state.nameError}
                ref={(input) => this.input = input}
                onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <H3 title="Introduzca su email" />
                                <TextField
                                    required
				    variant="outlined"
				    fullWidth
				    autoFocus
                id="email"
                name = "emailValue"
                label="Correo Electrónico"
                value={this.state.emailValue}
                ref={(input) => this.input = input}
                onChange={this.handleChange}
                error={this.state.emailError}
		
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <H3 title="Introduzca su contraseña" />
                                <TextField
                                    required
				    variant="outlined"
				    fullWidth
				    autoFocus
                id="password"
                name = "pwdValue"
                label="Contraseña"
                type="password"
                value={this.state.pwdValue}
                ref={(input) => this.input = input}
		error={this.state.pwdError}
                onChange={this.handleChange}
		
                                />
                            </Grid>
			     <Grid item xs={12}>
                                <H3 title="Confirme su contraseña" />
                                <TextField
                                    required
				    variant="outlined"
				    fullWidth
				    autoFocus
                id="password_verify"
                name= "pwdConfValue"
                label="Verificar contraseña"
                type="password"
                value={this.state.pwdConfValue}
                error={this.state.pwdVerifyError}
                ref={(input) => this.input = input}
                onChange={this.handleChange}
		
                                />
                            </Grid>
                            
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
			    onClick={this.handleError}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        );
    }
}
export default withStyles(styles, { withTheme: true })(SignUp);
