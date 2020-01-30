import React from "react";
import {
    Card
} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileExcel} from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import "./styles/Home.css";

/////////////////////////////////////////////////////////////////////////
class Home extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            "employeeName" : "Islam Gad"
        }

    }

    render() {
        return(
            <div>
                <Header employeeName = {this.state.employeeName}/>
                <div className = "body">
                    <div className = "title">
                        <h2 className = "main">Create New</h2>
                        <p className = "sub-main">Select the action you want to do</p>
                    </div>
                    <div className = "card-list">
                        <Card className = "action-card">
                            <Card.Body className = "action-card-body">
                                <FontAwesomeIcon
                                    icon = {faFileExcel}
                                    color = "#fff"
                                    size = "2x"
                                />
                                <h6 className = "card-title">Upload Excel</h6>
                                <p className = "card-subtitle">Add new excel file to the database</p>
                            </Card.Body>
                        </Card>
                        <Card className = "action-card">
                            <Card.Body className = "action-card-body">
                                <FontAwesomeIcon
                                    icon = {faFileExcel}
                                    color = "#fff"
                                    size = "2x"
                                />
                                <h6 className = "card-title">Upload Excel</h6>
                                <p className = "card-subtitle">Add new excel file to the database</p>
                            </Card.Body>
                        </Card>
                        <Card className = "action-card">
                            <Card.Body className = "action-card-body">
                                <FontAwesomeIcon
                                    icon = {faFileExcel}
                                    color = "#fff"
                                    size = "2x"
                                />
                                <h6 className = "card-title">Upload Excel</h6>
                                <p className = "card-subtitle">Add new excel file to the database</p>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

/////////////////////////////////////////////////////////////////////////
export default Home;