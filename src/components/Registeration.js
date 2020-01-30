import React from 'react';
import {
    Alert, 
    Form,
    Button
} from 'react-bootstrap';
import './styles/Registeration.css';
import {withRouter} from 'react-router-dom';
import {DebounceInput} from 'react-debounce-input';

/////////////////////////////////////////////////////////////////////////
class Registeration extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        };


        this.handleRegisteration = this.handleRegisteration.bind(this);
        this.checkUsername = this.checkUsername.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleRegisteration = async (event) => {
        event.preventDefault();
        this.props.loadingState(true);

        console.log("SignUp Button Works");
    }

    checkUsername = async (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <Form className = "auth-form">
                <Form.Group controlId = "formUsername">
                    <DebounceInput
                        className = "form-control"
                        placeholder = "Type your username"
                        minLength = {2}
                        debounceTimeout = {300}
                        onChange = {this.checkUsername}/>
                </Form.Group>
                <Form.Group controlId = "formPassword">
                    <Form.Control 
                        type = "password"
                        name = "password"
                        placeholder = "Type your password"
                        onChange = {this.handleInputChange}/>
                </Form.Group>
                <Button 
                    variant = "primary"
                    type = "submit"
                    onClick = {this.handleRegisteration}>
                        Signup
                    </Button>
            </Form>
        )
    }
}

/////////////////////////////////////////////////////////////////////////
export default Registeration;