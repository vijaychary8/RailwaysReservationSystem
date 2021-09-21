import React, { Component } from 'react'
import { Button, Col,  Form, FormGroup, Input, Row } from 'reactstrap'

const axios = require('axios').default;


export default class UpdateSeat extends Component {
  constructor(props) {
    super(props);
    this.state = {
        trainCode: "",
        trainId:"",
        compartment:"",
        seatType:"",
        sun:"",
        mon:"",
      tue:"",
      wed:"",
      thur:"",
      fri:"",
      sat:""
    

    }


  }

  componentDidMount() {

    let trainId = this.props.match.params.seatId

console.log(trainId)

    axios.get(`http://localhost:8088/gettrainseats/${trainId}`).then((response) => {

    console.log(response)


    if(response.data.seat.sun===0 ){

        document.getElementById("sun").disabled=true;


    }


    if(response.data.seat.mon===0){
        document.getElementById("mon").disabled=true;

    }
    if(response.data.seat.tue===0){
        document.getElementById("tue").disabled=true;

    }
    if(response.data.seat.wed===0){
        document.getElementById("wed").disabled=true;

    }
    if(response.data.seat.thur===0){
        document.getElementById("thur").disabled=true;
 
    }
    if(response.data.seat.fri===0){
        document.getElementById("fri").disabled=true;

    }
    if(response.data.seat.sat===0){
        document.getElementById("sat").disabled=true;

    }


      this.setState({

        trainCode:response.data.seat.trainCode,
        trainId:response.data.seat.trainId,

        compartment: response.data.seat.compartment,
        seatType: response.data.seat.seatType,
        mon: response.data.seat.mon,
        tue: response.data.seat.tue,
        wed: response.data.seat.wed,
        thur: response.data.seat.thur,
        fri: response.data.seat.fri,
        sat: response.data.seat.sat,
        sun: response.data.seat.sun






      })
    })
  }


  handleMonday = (e) => {
    e.preventDefault();

    this.setState({ 
      mon: e.target.value,

    })
}
handleTuesday = (e) => {
    e.preventDefault();

    this.setState({ 
        tue: e.target.value,

    })
}
handleWednesday = (e) => {
    e.preventDefault();

    this.setState({ 
        wed: e.target.value,

    })
}
handleThursday = (e) => {
    e.preventDefault();

    this.setState({ 
        thur: e.target.value,

    })
}
handleFriday = (e) => {
    e.preventDefault();

    this.setState({ 
        fri: e.target.value,

    })
}
handleSaturday = (e) => {
    e.preventDefault();

    this.setState({ 
        sat: e.target.value

    })
}
handleSunday = (e) => {
    e.preventDefault();

    this.setState({ 
        sun: e.target.value,

    })
}





  back = () => {

    this.props.history.push({  
        pathname: '/viewallseats'  

})
}


handleSubmit = (e) => {
    e.preventDefault();
    

    let data = {
      trainCode:this.state.trainCode,
      trainId:this.state.trainId,
      compartment:this.state.compartment,
      seatType:this.state.seatType,
      sun:this.state.sun,
      mon:this.state.mon,
      tue:this.state.tue,
      wed:this.state.wed,
      thur:this.state.thur,
      fri:this.state.fri,
      sat:this.state.sat




    }
    console.log(data)

    axios.put('http://localhost:8088/updateseat', data
    ).then((response) => {
      console.log(response)

      this.props.history.push({ pathname: '/viewallseats' })


    });


  }


  

  
  render() {

    return (
        <div className="m-8" >
        <button className="btn bg-primary text-white" onClick={this.back}>Back</button>

  <div className="container col-6">
<Row>
<Col sm="4"></Col>

<Col >
<br></br>
<br></br>

<Form style={{ width:"500px"}}onSubmit={this.handleSubmit}>
<FormGroup>
            <span style={{color :"white"}}>TrainCode</span>
            <Input  name="trainCode" 
             value={this.state.trainCode}>
            </Input>
        </FormGroup>
        <br></br>
        <Input  name="trainId"        
              value={this.state.trainId} disabled="true"
/>


        <span style={{color :"white"}}>Compartment</span>
                    <FormGroup>            
            <Input  name="compartment"        
              value={this.state.compartment} disabled="true" // set selected value
/>
        </FormGroup>
        <span style={{color :"white"}}>Seats Type</span>
        <FormGroup>            
            <Input  name="seatType" 
            value={this.state.seatType} disabled="true"/>
        </FormGroup>
<br></br>
        <FormGroup row>
        <Col>

        <Input style={{width:"50px"}} id="sun" type="text"  name="sun" placeholder="S" onChange={this.handleSunday}  value={this.state.sun}>
            </Input>
            <br></br>

        
</Col>
<Col>
        <Input style={{width:"50px"}} type="text" id="mon" name="mon" placeholder="M"onChange={this.handleMonday} value={this.state.mon}  >
            </Input>
            <br></br>

        
</Col>            
<Col>
        <Input style={{width:"50px"}} id="tue" type="text" name="tue" placeholder="T" onChange={this.handleInputChange}  value={this.state.tue} >
            </Input>
       </Col> 
       <br></br>

<Col>
        <Input style={{width:"50px"}} id="wed" name="wed" type='value' placeholder="W" onChange={this.handleInputChange}  value={this.state.wed} >
            </Input>
        </Col>
        <br></br>


<Col>
        <Input style={{width:"50px"}} id="thur" name="thur" type="value" placeholder="Th"onChange={this.handleInputChange}  value={this.state.thur}  >
            </Input>
        </Col>
        <br></br>



<Col>
        <Input style={{width:"40px"}} id="fri" name="fri" type="text" placeholder="F"onChange={this.handleInputChange}  value={this.state.fri} >
            </Input>
        </Col>
        <br></br>
      <Col>

        <Input style={{width:"50px"}} id="sat" name="sat" type="text" placeholder="Sa" onChange={this.handleInputChange}  value={this.state.sat} >
            </Input>
        </Col>
        </FormGroup>



        <Button  style={{width:"100%"}} color="success">
              Confirm
          </Button>

        
        </Form>
</Col>

</Row>
</div>
        </div>

    )
  }
}
