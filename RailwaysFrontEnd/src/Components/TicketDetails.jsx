import React, {useEffect}  from 'react';
import { useState } from 'react';
import {  Button, Card, CardBody, CardHeader, Col,  Container,  Fade,  Form, FormGroup, Input, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'



const axios = require('axios').default;


 export default function TicketDetails(props){

    
  const initalValues = {
    trainCode: "",
    compartment:"",
    date:"",
    seatType:"",
    noOfPassengers:"",
    source:"",
    destination:""
  }
 


const [ticketEntity,setTicketEntity]=useState(initalValues);
const [stationData,setStationData]=useState([])

const [modal, setModal] = useState(false);
const [modalPayment, setModalpayment] = useState(false);

const toggle = () =>setModal(!modal);
const tog=()=>setModalpayment(!modalPayment);

const openAddModal = () =>{
  setModal(!modal);

  let trainCode = props.match.params.code

  axios.get(`http://localhost:8088/gettrainstations/${trainCode}`).then((response) => {

  console.log(response.data)

      // this.setState({

      //     stationData: response.data.stationList
      // })

      setStationData(response.data.stationList)
  });




}


const add = () => {

  const data = { trainCode :props.match.params.code  ,  source:ticketEntity.source,
     destination:ticketEntity.destination,date:ticketEntity.date,compartment:props.match.params.compartment,seatType:props.match.params.seatType,noOfPassengers:ticketEntity.noOfPassengers}
    
console.log(data)
  axios.post('http://localhost:8088/addticket', data
  ).then((response) => {

    console.log(response)

    if(response.data.error===false){  
      var p = document.getElementById("frm");
      var d= document.getElementById("details");

        
    if (d.style.display === "none" ) {
          d.style.display = "block";
p.style.display="none"
        } else {
          d.style.display = "none";
        }
  

      }


  })
  
}



  

  const handleInputChange = (e) => {
    console.log(e.target.name)

    console.log(e.target.value)
    var { name, value } = e.target
    setTicketEntity({
      ...ticketEntity,
      [name]: value
    });
  }
  const handleSubmit = (e) => {

    e.preventDefault();
    add();

  }
  

 const back = () => {

    props.history.push({  
        pathname: '/ticket'  

})
}
const hanldePayment = () => {

setModalpayment(!modalPayment)

}


let x=ticketEntity.noOfPassengers;
let y=props.match.params.price;
let z=x*y;



        return(
            <div className="m-8" >
                              <div>



    <div>
        <Modal isOpen={modalPayment} toggle={tog}>
            <ModalBody toggle={tog}>
                <Row>

                    <Col sm="7">
                        <p style={{ fontFamily: "serif" }}>
Your Ticket is booked, Thank You for using this application
</p>
                    </Col>
                    <Col>
                        <img src="/successful.png" width="100px" height="100px" alt="logo"></img>
                    </Col>

                </Row>
            </ModalBody>
        </Modal>
    </div>

    





</div>


<div>
      <Modal isOpen={modal} toggle={toggle} style={{width:"600px"}}>
        
          <ModalHeader toggle={toggle}>
          Train Route & Schedule          </ModalHeader>
            
        <ModalBody>

        <table class="table" style={{ color: "black" ,backgroundColor:"white" }}>
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Station </th>
                                <th scope="col">Code</th>
                                <th scope="col">Arives</th>

                                <th scope="col">Depatrure</th>
                                <th scope="col">Hault</th>

                                <th scope="col">Distance</th>




                            </tr>

                        </thead>
                        <tbody style={{ backgroundColor: "ButtonFace", color: "black" }}>
                        {
                                stationData.map(
                                    station =>
                                        <tr key={station.stationName}>
                                            <td>{station.stationName}</td>
                                            <td>{station.stationCode}</td>
                                            <td>{station.arrives}</td>
                                            <td>{station.departure}</td>
                                            <td>{station.halt}</td>
                                            <td>{station.distance}</td>





                                        </tr>
                                )
                            }
                        </tbody>
                    </table>




          </ModalBody>
          </Modal>
</div>
           
            <button className="btn bg-primary text-white" onClick={back}>Back</button>

      <div className="container col-6">
    <Row>


<br></br>
<br></br>

                            
                            {/* a review card having all transfer details */}
                            <Card id="details" style={{ boxShadow: "0 10px 20px  0 rgba(0, 0, 0, 0.8)" ,color:"black",display:"none" }}>
                                <CardHeader style={{ backgroundColor: "black", color: "whitesmoke" }}>
                                    <strong>
                                        Payment Details
                           </strong>
                                </CardHeader>

                                <CardBody style={{ fontSize: "13px" }}>
                                    <Row>
                                        <Col>Train Code</Col>
                                        <Col>{props.match.params.code}</Col>

                                    </Row>
                                    <Row className="mt-2">
                                        <Col>Source </Col>
                                        <Col>{ticketEntity.source}</Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col>Destination</Col>
                                        <Col>{ticketEntity.destination}</Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col>total fee</Col>
                                        <Col>{z}</Col>
                                    </Row>
                                    <hr></hr>
                                                                    </CardBody>
                                <hr></hr>

                                    <Container className="text-center mb-3" >
                                        {/* button for confirm payment */}
                                        <Button onClick={hanldePayment}
                                            style={{ width: "100%", borderRadius: "20px", fontFamily: "cursive" }}
                                            color="success">

                                            Confirm to Pay

                </Button>


                                      

                                    </Container>
                                    </Card>

    <Form id="frm" style={{ width:"500px"}} onSubmit={handleSubmit} >
<FormGroup>
                <span style={{color :"white"}}>TrainCode</span>
                <Input  name="trainCode" onChange={handleInputChange} 
                 value={props.match.params.code}>
                </Input>
                <h6 onClick={openAddModal} style={{color:"white"}} outline >
View route
</h6>

            </FormGroup>

       <Row>   <Col>  
            <FormGroup>
                <span style={{color :"white"}}>source</span>
                <Input type="text" name="source"  onChange={handleInputChange} value={ticketEntity.source} >
                </Input>
            </FormGroup></Col>
          <Col>  <FormGroup>
                <span style={{color :"white"}}>destination</span>
                <Input type='text'name="destination" onChange={handleInputChange} value={ticketEntity.destination} >
                </Input>
            </FormGroup></Col></Row>
            <FormGroup>
                <span style={{color :"white"}}>date</span>
                <Input type='date' name="date" onChange={handleInputChange} value={ticketEntity.date}>
                </Input>
            </FormGroup>

            <Row>

         <Col>   <span style={{color :"white"}}>Compartment</span>
                        <FormGroup>            
                <Input type="text" name="compartment" disabled="true" onChange={handleInputChange} value={props.match.params.compartment}/>
            </FormGroup></Col>
          <Col>  <span style={{color :"white"}}>Seats Type</span>
            <FormGroup>            
            <Input type="text" name="seatType" disabled="true" onChange={handleInputChange} value={props.match.params.seatType}/>
            </FormGroup></Col>
            </Row>
            <span style={{color :"white"}}> Passengers</span>
            <FormGroup>            
            <Input type="value" name="noOfPassengers" onChange={handleInputChange} value={ticketEntity.noOfPassengers} />
            </FormGroup>

<br></br>
<button className="btn bg-primary text-white" >Countinue Booking</button>

            
            </Form>

   </Row>
   </div>
   </div>
        )
    
}
