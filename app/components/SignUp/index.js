import React from "react";
import H1 from "../myH1"
import Input from "../Input";


export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        }
        this.handleImput = this.handleImput.bind(this)
        this.handleNewUser = this.handleNewUser.bind(this)
    }
    handleNewUser(event) {
        event.preventDefault();
        console.log(this.state)
        this.props.action(this.state)
        //Pasar el estado a las props
    }
    handleImput(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="create_account">
                <div className="create_account_form">
                    <H1 title="Create Account:" />
                    <form onSubmit={this.handleNewUser}>
                        <H1 title="Introduzca correo electronico" />
                        <Input
                            name="email"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleImput}
                        />
                        <H1 title="Introduzca un nombre" />
                        <Input
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleImput}
                        />
                        <H1 title="Introduzca contraseña" />
                        <Input
                            name="password"
                            type="text"
                            value={this.state.password}
                            onChange={this.handleImput}
                        />
                        <button
                            type="submit"
                            className="button button_wide">
                            Create Account
                    </button>
                    </form>
                </div>
            </div>
        );
    }
}
