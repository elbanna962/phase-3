import React from 'react';
import {
    Image,
    Form,
    Button
} from 'react-bootstrap';
import './styles/Login.css';
import logoImg from '../assets/images/Vodafone_icon.svg'
import exitImg from '../assets/images/exit-100.png';

/////////////////////////////////////////////////////////////////////////
class Login extends React.Component{

    constructor(props) {
        super(props);

        this.state = {

        }
    }


    render(){
        return(
            <div className = "body">
                <div className = "app">
                    <div className = "left-panel">
                        <div className = "top">
                            <Image src = {logoImg}
                                   className = "logo"
                                   alt = "Vodafone Logo"
                            />
                        </div>
                        <div className = "middle">
                            <Image src = {exitImg}
                                   className = "exit"
                                   alt = "Emergency Exit"
                            />
                            <h3>Leaver App</h3>
                            <p>Sorry to see you go.</p>
                        </div>
                        <div className = "bottom">

                        </div>
                    </div>
                    <div className = "right-panel">
                        <h1>Login</h1>
                        <p>Welcome back! Log in to your account</p>
                        <div className = "form">
                            <Form>
                                <Form.Group className = "input-container" controlId = "formBasicEmail">
                                    <Form.Control className = "input" type = "email" placeholder = "Organization email"/>
                                </Form.Group>
                                <Form.Group className = "input-container" controlId = "formBasicPassword">
                                    <Form.Control className = "input" type = "password" placeholder = "Your password"/>
                                </Form.Group>
                                <Button
                                    className = "button"
                                    type="submit"
                                    bg = "#e60000">
                                    Login
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

/////////////////////////////////////////////////////////////////////////
export default Login;