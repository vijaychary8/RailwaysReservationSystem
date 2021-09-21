import React, { useEffect }  from 'react'
import { useState } from 'react';
import Select from 'react-select'
import { Button, Col,  Form, FormGroup, Input, Row } from 'reactstrap'



const axios = require('axios').default;


 export default function Seats(props){

    
 let option = [
  { value: 'General', label: 'General' },
  { value: 'SS', label: 'Second Seats' },
  { value: 'Tatkal', label: 'Tatkal' }
]

 let seats = [
    { value: 'SS', label: 'Second Seats' },
    { value: 'SC', label: 'Sleeper Class' },
    { value: 'AC', label: 'AC' }
  ]
  const initalValues = {

    trainCode: "",
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

  var [seatEntity, setSeatEntity] = useState(initalValues);
  const [selectedValue, setSelectedValue] = useState("");
  const [seatSelectedValue, setSeatSelectedValue] = useState("'");


useEffect(() =>{

 let fre=props.match.params.frequency;
 console.log(String(fre))
for(let i=0;i<fre.length;i++){
    // if(fre[i]==="S" || fre[i]==="U"||fre[i]==="N" ){
    //     console.log(fre)
    //     document.getElementById("sun").disabled=false;

    // }
    // else if(fre[i]==="M" || fre[i]==="O"||fre[i]==="N" ){
    //     document.getElementById("mon").disabled=false;
    // }  
    //   else if(fre[i]==="T" || fre[i]==="U"||fre[i]==="E" ){
    //     document.getElementById("tue").disabled=false;

    // }
    // else if(fre[i]==="W" || fre[i]==="E"||fre[i]==="D" ){
    //     document.getElementById("wed").disabled=false;

    // }
    // else if(fre[i]==="T" || fre[i]==="H"||fre[i]==="U" || fre[i]==="R"){
    //     document.getElementById("thur").disabled=false;

    // }
    // else if(fre[i]==="M" || fre[i]==="O"||fre[i]==="N" ){
    //     document.getElementById("mon").disabled=false;

    // }
    // else if(fre[i]==="M" || fre[i]==="O"||fre[i]==="N" ){
    //     document.getElementById("mon").disabled=false;

    // }
if(fre[i]==="S"){
  document.getElementById("sun").disabled=false;

}
    else if(fre[i]==="M"){
             document.getElementById("mon").disabled=false;


    }else if(fre[i]==="F"){

                 document.getElementById("fri").disabled=false;

    }else if(fre[i]==="W"){
                document.getElementById("wed").disabled=false;

    }else if(fre[i]==="s"){
      document.getElementById("sat").disabled=false;

    }else if(fre[i]==="t"){
      document.getElementById("tue").disabled=false;

    }
    else if(fre[i]==="T"){
      document.getElementById("thur").disabled=false;

    }else if(fre[i]==="u"){
      document.getElementById("sun").disabled=false;

    }
    else if(fre[i]==='U'){
      document.getElementById("tue").disabled=false;

    }

}



});


  const add = () => {      
    const data = {trainCode : props.match.params.trainDetails , compartment : selectedValue , 
        seatType : seatSelectedValue , mon:seatEntity.mon, sun:seatEntity.sun, tue:seatEntity.tue, wed:seatEntity.wed, thur:seatEntity.thur, fri:seatEntity.fri, sat:seatEntity.sat}
  console.log(data)

    axios.post('http://localhost:8088/addseat', data
    ).then((response) => {

      console.log(response)
alert("Reserved succesfully")
      props.history.push({ pathname: '/seatconfig' })




    }).catch((error) => {
      // Error
      if (error.response.status===404) {
          console.log(error.response.status);
alert("seat is already reserved or failed to reserve")

      }  else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
      }
      console.log(error.config);

   
 }
    );
  }

  

  const handleInputChange = (e) => {
    console.log(e.target.name)

    console.log(e.target.value)
    var { name, value } = e.target
    setSeatEntity({
      ...seatEntity,
      [name]: value
    });
  }
  const handleSubmit = (e) => {

    e.preventDefault();
    add();

  }
  

 const back = () => {

    props.history.push({  
        pathname: '/seatconfig'  

})
}

const handleChange = e => {
  
    setSelectedValue(e.value);
    
  }
  const handleSeatChange = e => {
    setSeatSelectedValue(e.value);
  }



        return(
            <div className="m-8" >
            <button className="btn bg-primary text-white" onClick={back}>Back</button>

      <div className="container col-6">
    <Row>
<Col sm="4"></Col>

<Col >
<br></br>
<br></br>

    <Form style={{ width:"500px"}}onSubmit={handleSubmit}>
<FormGroup>
                <span style={{color :"white"}}>TrainCode</span>
                <Input  name="trainCode" onChange={handleInputChange} 
                 value={props.match.params.trainDetails}>
                </Input>
            </FormGroup>


            <span style={{color :"white"}}>Compartment</span>
                        <FormGroup>            
                <Select options={option} name="compartment" onChange={handleChange}       
                  value={option.find(obj => obj.label === selectedValue)} // set selected value
 />
            </FormGroup>
            <span style={{color :"white"}}>Seats Type</span>
            <FormGroup>            
                <Select options={seats} name="seatType" onChange={handleSeatChange} 
                value={seats.find(obj => obj.label === seatSelectedValue)}/>
            </FormGroup>
<br></br>
            <FormGroup row>
            <Col>

            <Input style={{width:"50px"}} id="sun" type="text"  name="sun" placeholder="S" onChange={handleInputChange}  value={seatEntity.sun} disabled="true">
                </Input>
                <br></br>

            
</Col>
<Col>
            <Input style={{width:"50px"}} type="text" id="mon" name="mon" placeholder="M"onChange={handleInputChange} value={seatEntity.mon}  disabled="true" >
                </Input>
                <br></br>

            
</Col>            
<Col>
            <Input style={{width:"50px"}} id="tue" type="text" name="tue" placeholder="T" onChange={handleInputChange}  value={seatEntity.tue} disabled="true" >
                </Input>
           </Col> 
           <br></br>

<Col>
            <Input style={{width:"50px"}} id="wed" name="wed" type='value' placeholder="W" onChange={handleInputChange}  value={seatEntity.wed} disabled="true" >
                </Input>
            </Col>
            <br></br>


<Col>
            <Input style={{width:"50px"}} id="thur" name="thur" type="value" placeholder="Th"onChange={handleInputChange}  value={seatEntity.thur} disabled="true" >
                </Input>
            </Col>
            <br></br>



<Col>
            <Input style={{width:"40px"}} id="fri" name="fri" type="text" placeholder="F"onChange={handleInputChange}  value={seatEntity.fri} disabled="true">
                </Input>
            </Col>
            <br></br>
          <Col>

            <Input style={{width:"50px"}} id="sat" name="sat" type="text" placeholder="Sa"onChange={handleInputChange}  value={seatEntity.sat} disabled="true">
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
