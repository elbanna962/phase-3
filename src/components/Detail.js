import React from "react";
import "./styles/Detail.css";
import {FETCH_REQUESTS_URL} from "../api/api";
// const router = require("../routes/router");
// db.staff.insert({

// })

/////////////////////////////////////////////////////////////////////////
class Detail  extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            detail : {}
        }


    }
 

    componentDidMount() {
        const retDetail = this.props.location.state.detail;
        console.log(retDetail);
        this.setState({
            detail: retDetail
        })
 
    }

    render() {
        const {detail} = this.state;
        console.log(detail)
        

        return(
            
            <div className = "detail-container">
                <div className = "top-panel">
                    <h2>Leaver Details</h2>
                    <div className = "leaver-info">
                        <div className = "row-info">
                            <label className = "key">Staff ID</label>
                            <label className = "value">{detail.staffID}</label>
                            <label className = "value2">Leaver Name</label>
                            <label className = "key2">{detail.name}</label>
                            <label className = "key3">Department</label>
                            <label className = "value3">{detail.Department}</label>
                            <label className = "key4">Job Title</label>
                            <label className = "value4">{detail.Job}</label>

                            <label className = "key5">Mobile Number</label>
                            <label className = "value5">{detail.Mobile}</label>
                            <label className = "key6">SAP Staff ID</label>
                            <label className = "value6">{detail.Sap}</label>
                            <label className = "key7">Manger</label>
                            <label className = "value7">{detail.Manager}</label>
                            <label className = "key8">Cost Center</label>
                            <label className = "value8">{detail.CostCenter}</label>
                            <label className = "key9">Hire Date</label>
                            <label className = "value9">{detail.HiringDate}</label>
                            <label className = "key0">Last Working Day</label>
                            <label className = "value0">{detail.LastWorkingDay}</label>
                           
                    
                            
                            
                        </div>
                    </div>
                </div>
                <label className="iex">IEX</label>
                <input type="text" className="iextxt"/>

             <h4>Leave Balance:</h4>
                <div>
              
                <table>
  <tr>
    <th>Annuals Granted</th>
    <th>Annuals Taken</th>
    <th>No Show</th>
    <th>Lost Hours</th>
    <th>In lieu days to take</th>
  </tr>
  <tr>
    <td><input type="text" id="annuals"/></td>
    <td><input type="text"/></td>
    <td><input type="text"/></td>
    <td><input type="text"/></td>
    <td><input type="text"/></td>
  </tr>
  </table>
                </div>
                <div>
                <button  className = "bottom-panel">Submit</button>
                </div>

           
            </div>
        )
    }
    

}

/////////////////////////////////////////////////////////////////////////
export default Detail;