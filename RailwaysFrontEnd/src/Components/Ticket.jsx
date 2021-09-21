import React , {Component} from 'react'
import {Card , CardHeader ,Row , Col, Input, Form, Button, FormGroup, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Avatar } from '@material-ui/core';
import Select from 'react-select'




const axios = require('axios').default;


 export default class Ticket extends Component{

    constructor(props){
        super(props)
        this.state = {

            train : [],
                    trainCode :"H12603",
                    list:[],
                selectedValue:"",
                seatSelectedValue:"",
                price:""

        }
    }
    seats = [
      { value: 'SS', label: 'Second Seats' },
      { value: 'SC', label: 'Sleeper Class' },
      { value: 'AC', label: 'AC' }
    ]

     option = [
      { value: 'General', label: 'General' },
      { value: 'SS', label: 'Second Seats' },
      { value: 'Tatkal', label: 'Tatkal' }
    ]
    
    back = () => {

        this.props.history.push({  
            pathname: '/userdashboard'  
    
    })
    }

    
handleChange = (e) =>{
    e.preventDefault();

     this.setState({trainCode:e.target.value} )
}
handleForm =(e)=>{

e.preventDefault();
let code = this.state.trainCode;
let compartment=this.state.selectedValue;
let seatType=this.state.seatSelectedValue;

console.log(code);
console.log(this.state.selectedValue);

console.log(this.state.seatSelectedValue);

axios.get(`http://localhost:8088/getprice/${code}/${compartment}/${seatType}`).then((response)=>
{
   
   console.log(response.data)
   if(response.data.error===false){  
    var p = document.getElementById("pricecard");
    if (p.style.display === "none") {
        p.style.display = "block";
      } else {
        p.style.display = "none";
      }

    this.setState({price:response.data.ticket.price})

  }



})

}

handleSubmit = (e) => {

    e.preventDefault();

    let code = this.state.trainCode
    axios.get(`http://localhost:8088/gettrainbycode/${code}`).then((response)=>
    {
       if(response.data.error===false){
        var y = document.getElementById("traincard");
        if (y.style.display === "none") {
            y.style.display = "block";
          } else {
            y.style.display = "none";
          }
  


       }
       console.log(response.data.train.frequency)

       let fre=response.data.train.frequency;
       console.log(String(fre))
      for(let i=0;i<fre.length;i++){
               if(fre[i]==="S"){
        document.getElementById("sun").disabled="false";
      
      }
          else if(fre[i]==="M"){
                   document.getElementById("mon").style.backgroundColor="green";
      
      
          }else if(fre[i]==="F"){
      
                       document.getElementById("fri").style.backgroundColor="green";
      
          }else if(fre[i]==="W"){
                      document.getElementById("wed").style.backgroundColor="green";
      
          }else if(fre[i]==="s"){
            document.getElementById("sat").style.backgroundColor="green";
      
          }else if(fre[i]==="t"){
            document.getElementById("tue").style.backgroundColor="green";
      
          }
          else if(fre[i]==="T"){
            document.getElementById("thur").style.backgroundColor="green";
      
          }else if(fre[i]==="u"){
            document.getElementById("sun").style.backgroundColor="green";
      
          }
          else if(fre[i]==='U'){
            document.getElementById("tue").style.backgroundColor="green";
      
          }
      
      }
      
      
       
       console.log(response.data)

      this.setState({train:response.data.train})
       this.setState({list:response.data.frequency})


    })}

    handleConform = () => {
      var y = document.getElementById("frm");
      if (y.style.display === "none") {
          y.style.display = "block";

        } else {
          y.style.display = "none";
        }


    }

    handleCompartment = e => {
  
     this.setState({selectedValue:e.value});
      
    }
    handleSeatType = e => {
  console.log(e.value)
      this.setState({seatSelectedValue:e.value});
       
     }
 
     controllBook =(e)=>{
       e.preventDefault();
       console.log(this.state.train);
       let code = this.state.trainCode;
       let compartment=this.state.selectedValue;
       let seatType=this.state.seatSelectedValue;
       let price=this.state.price;

              console.log(this.state.price);
       this.props.history.push({ pathname: '/ticketdetails/' +  code+'/'+compartment+'/'+seatType+'/'+price})

     }



    render(){
        return(


            <div >
                                <button className="btn bg-primary text-white" onClick={(e) => this.back()}>Back</button>
<br></br>
<br></br>
         <Zoom>     
                <Card>
                <CardHeader className="text-center">
                <strong>Trail Details</strong>

<br></br>
<br></br>
            <Row> 
                <Col>
                <Form className="searchbox"  onSubmit={this.handleSubmit}  inline >
               <table> <Row>
<tr>
<td>
                    <Input className="text-center"style={{width:"200px"}} value={this.state.trainCode} 
                    onChange={this.handleChange}  type="text" placeholder="Train Code" >  
                   </Input>   </td>

               <td>    <Button>Search</Button></td></tr>
</Row></table>

                   </Form>
                </Col>
            </Row>
               </CardHeader>  
               </Card> 
<br></br>
<Fade>
                <Card id="traincard" style={{backgroundColor:"#DEEDF0",display:"none"}} >
        <CardBody>
            <Row>     
                  <Col>   <CardTitle tag="h5">{this.state.train.trainName}<br></br><br></br>Train No: {this.state.train.trainCode}</CardTitle></Col>
        <Col> 
         <CardSubtitle style={{marginTop:"10px"}} tag="h6" className="mb-2 text-muted">
             <Row>
                 {this.state.train.source}&nbsp;<hr style={{width:"150px",marginTop:"10px"}}></hr>&nbsp;{this.state.train.destination}
                 </Row>
                 </CardSubtitle>
        <Row>
        <Avatar id="sun" variant="square" style={{ height: '18px', width: '18px',fontSize:'12px' }}>S</Avatar>&nbsp;
        <Avatar id="mon" variant="square" style={{ height: '18px', width: '18px',fontSize:'12px' }}>M</Avatar>&nbsp;

        <Avatar id="tue" variant="square" style={{ height: '18px', width: '18px',fontSize:'12px' }}>T</Avatar>&nbsp;
        <Avatar id="wed" variant="square" style={{ height: '18px', width: '18px',fontSize:'12px' }}>W</Avatar>&nbsp;
        <Avatar id="thur" variant="square" style={{ height: '18px', width: '18px',fontSize:'12px' }}>Th</Avatar>&nbsp;
        <Avatar id="fri" variant="square" style={{ height: '18px', width: '18px',fontSize:'12px' }}>F</Avatar>&nbsp;
        <Avatar id="sat" variant="square" style={{ height: '18px', width: '18px',fontSize:'12px' }}>Sa</Avatar>

        </Row>
        </Col>
        <Col><button  className="btn bg-primary text-white" style={{width:"100px", marginLeft:"150px",marginTop:"20px"}} onClick={(e) => this.handleConform(this.state.train.trainCode)} >Confirm</button></Col>
          </Row>
          <CardText>
<br></br>
            <Form id="frm"  onSubmit={this.handleForm} style={{display:"none"}}>

     <Row>      <Col>   <FormGroup>  

         <span>Seat Type</span>
                <Select options={this.seats}  name="seatType" onChange={this.handleSeatType}       
                  value={this.seats.find(obj => obj.label === this.seatSelectedValue)} // set selected value
 />
</FormGroup>
</Col>
                    <Col>    <FormGroup>  
                      <span>Copartment</span>          
                <Select options={this.option} name="compartment" onChange={this.handleCompartment}       
                  value={this.option.find(obj => obj.label === this.selectedValue)} // set selected value
 />
</FormGroup></Col>
<Col><br></br>
<FormGroup>
<button className="btn bg-primary text-white">submit</button>
</FormGroup></Col>
</Row>

</Form>
<br></br>
<Card id="pricecard" style={ {height:"110px" ,width:"130px", textAlign:"center", display:"none",color:"#EEEEEE"}}>

<br>
</br>
<Row><Col><h6 style={{color:"green"}}>Avalilable</h6></Col></Row>
<Col><h6 style={{color:'black'}}>₹{this.state.price}</h6></Col>
        <Button onClick={this.controllBook} style={{width:"130px",backgroundColor:"orange"}}>Book Now</Button>
    </Card>

          </CardText>

        </CardBody>
      </Card>
      
      </Fade>


                </Zoom>
                <br></br>

              
            </div>
        )
    }
}
