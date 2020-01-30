import React from "react";
import {
    Button,
    Table
} from 'react-bootstrap';
import './styles/Request.css';
import axios from 'axios';
import {FETCH_REQUESTS_URL} from "../api/api";

/////////////////////////////////////////////////////////////////////////
class Request extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            requests: []
        }

        this.clickButton = this.clickButton.bind(this);
        this.fetchRequestsData = this.fetchRequestsData.bind(this);
    }

    componentDidMount() {
        this.fetchRequestsData();
        //this.timer = setInterval(() => this.fetchRequestsData(), 1000000000);
    }

    clickButton(req){
      this.props.history.push({
          pathname: "/phase3-detail",
          state: {detail : req}
      })
    }

    fetchRequestsData() {
        this.setState({...this.state, isFetching: true});
        axios.get(FETCH_REQUESTS_URL)
            .then( (res) => {
                const retRequests = res.data;
               // console.log(res.data)
                //console.log("retrieved data");
                this.setState({requests: retRequests})
               // console.log(this.state.requests);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const {requests} = this.state;
            return (
                <div className = "request">
                    <h1 id = "wf">WF Table</h1>
                    <Table id = "requests">
                        <tbody>
                        <tr>
                            <th>Staff ID</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                        {requests.map(request=> <tr key = {request.staffID}>
                            <td>{request.staffID}</td>
                            <td>{request.name}</td>
                            <td>{request.status}</td>
                            <td>
                                <Button onClick = {() => this.clickButton(request)}>See Request</Button>
                            </td>
                        </tr>)}
                        </tbody>
                    </Table>
                </div>
            )
        }
}

/////////////////////////////////////////////////////////////////////////
export default Request;