import React from "react";
import {
    Nav,
    Navbar,
    Button,
    Image
} from "react-bootstrap";
import './styles/Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faCommentDots} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

/////////////////////////////////////////////////////////////////////////
class Header extends React.Component{

    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {
        return(
            <Navbar className = "navbar" fixed = "top">
                <Navbar.Brand className = "brand" href = "/">Leaver App</Navbar.Brand>
                <Nav className = "mr-auto">
                    <Nav.Link className = "link" href = "#1">Home</Nav.Link>
                </Nav>
                <div className = "navbar-right">
                    <Button className = "button m-sm-2" variant="primary">Do Something</Button>
                    <div className = "icon-link-container">
                        <Link to = "#notification">
                            <FontAwesomeIcon
                                lassName = "fa-icon"
                                icon = {faBell}
                                color = "#dddddd"
                                size = "lg"/>
                        </Link>
                        <Link to = "/chat">
                            <FontAwesomeIcon
                                className = "fa-icon"
                                icon = {faCommentDots}
                                color = "#dddddd"
                                size = "lg"/>
                        </Link>
                    </div>
                    <div className = "info">
                        <p className = "name">{this.props.employeeName}</p>
                        <Image className = "photo" src = "https://via.placeholder.com/40"/>
                    </div>
                </div>
            </Navbar>
        )
    }
}

/////////////////////////////////////////////////////////////////////////
export default Header;