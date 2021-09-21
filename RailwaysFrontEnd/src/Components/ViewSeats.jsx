import React, { Component } from 'react'
import EditIcon from "@material-ui/icons/Edit";
import { Col, Row } from 'reactstrap';
const axios = require('axios').default;


export default class ViewSeats extends Component {

    constructor(props) {
        super(props);
        var today = new Date(),

        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
       
    
    
        this.state = {

            seatsData: [],
                  currentDateTime: date 
                }
                }
    componentDidMount() {

        axios.get(`http://localhost:8088/getallsetdetails`).then((response) => {
        console.log(response)

            this.setState({

                seatsData: response.data.seatList
            })


        });


    }


    handleUpdate = (seatId) => {

        this.props.history.push({ pathname: '/updateseat/' + seatId })

    }
    back = () => {

        this.props.history.push({  
            pathname: '/seatconfig'  
    
    })
    }



    render() {

        return (
            <div className="m-5">
                <h4 className="text-center m-3" style={{color:"white"}}> Train Details</h4>

                <div className="container">
                <button className="btn bg-primary text-white" onClick={(e) => this.back()}>Back</button>
<br></br>
<br></br>
                    <table class="table" style={{ color: "black" ,backgroundColor:"white" }}>
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Train Code</th>
                                <th scope="col">SeatId</th>

                                <th scope="col">Compartment</th>
                                <th scope="col">Seat Type</th>
                                <th scope="col">Sun</th>

                                <th scope="col">Mon</th>
                                <th scope="col">Tue</th>

                                <th scope="col">Wed</th>
                                <th scope="col">Thur</th>
                                <th scope="col">Fri</th>
                                <th scope="col">Sat</th>
                                <th scope="col">Action</th>







                            </tr>

                        </thead>
                        <tbody style={{ backgroundColor: "ButtonFace", color: "black" }}>
                            {
                                this.state.seatsData.map(
                                    seat =>
                                        <tr key={seat.trainCode}>

                                            <td>{seat.trainCode}</td>
                                            <td>{seat.trainId}</td>

                                            <td>{seat.compartment}</td>
                                            <td>{seat.seatType}</td>
                                            <td>{seat.sun}</td>
                                            <td>{seat.mon} </td>
                                            <td>{seat.tue}</td>
                                            <td>{seat.wed}</td>
                                            <td>{seat.thur}</td>
                                            <td>{seat.fri}</td>
                                            <td>{seat.sat}</td>



                                            {/* <td><DeleteIcon onClick={(e) => this.handleDelete(train.trainCode)}>delete</DeleteIcon> &nbsp;&nbsp; */}
     <td> <EditIcon onClick={(e) => this.handleUpdate(seat.trainId)}>update</EditIcon></td>



                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div style={{color:"white"}}>
                <strong>Note:</strong>
                <Row>
                <Col></Col>

                    <Col>
                    <strong>Compartment:</strong><br></br>
                 'General': 'General' <br></br>
   'SS': 'Second Seats'<br></br>
  'Tatkal': 'Tatkal' 
  
  </Col>
  <Col>
  <strong>Seat Type:</strong><br></br>
  'SS': 'Second Seats' <br></br>
    'SC':'Sleeper Class' <br></br>
     'AC': 'AC' 

  </Col>
  <Col> {this.state.currentDateTime}</Col>
  <Col></Col>
  <Col></Col>

  </Row>
                </div>
            </div>
        )
    }
}
