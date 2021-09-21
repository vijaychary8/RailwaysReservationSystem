import React , {Component} from 'react'
import {Table ,Card , CardHeader ,Row , Col, Input, Form, Button, FormGroup, } from 'reactstrap'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';




const axios = require('axios').default;


 export default class SeatConfiguration extends Component{

    constructor(props){
        super(props)
        this.state = {

            train : [],
                    trainCode :"H12603",
                    list:[]


        }
    }
    back = () => {

        this.props.history.push({  
            pathname: '/admindashboard'  
    
    })
    }
    seatsDetails=()=>{this.props.history.push({  
        pathname: '/viewallseats'  

})}

    
handleChange = (e) =>{
    e.preventDefault();

     this.setState({trainCode:e.target.value} )
}


handleSubmit = (e) => {

    e.preventDefault();

    let code = this.state.trainCode
    axios.get(`http://localhost:8088/gettrainbycode/${code}`).then((response)=>
    {
       
        var x = document.getElementById("btun");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      
       console.log(response.data)

      this.setState({train:response.data.train})
       this.setState({list:response.data.frequency})


    })}

    handleConform = (trainDetails,frequency) => {
        this.props.history.push({ pathname: '/seats/'+ trainDetails + '/'+ frequency})

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
                <Form className="searchbox"  onSubmit={this.handleSubmit} inline >
                <Row>

                <FormGroup row>
                <Col sm={10}>

                    <Input className="text-center"style={{width:"200px"}} value={this.state.trainCode} 
                    onChange={this.handleChange}  type="text" placeholder="Train Code" >  
                   </Input>   
                   </Col>
                   </FormGroup> 
                   <br></br>
                   <br></br>
                   <FormGroup>
                   <Col sm="2">
                   <div className="">

                   <Button>Search</Button>
                   </div>
                   </Col>
</FormGroup>
</Row>

                   </Form>
                </Col>
                <Col>
                </Col>
            </Row>
               </CardHeader>  
                   
                   <Table hover>
              
                     <thead>
                     <Fade top cascade>
                     <tr>
                                <th scope="col">Train Name</th>
                                <th scope="col">Train Code</th>
                                <th scope="col">Source</th>
                                <th scope="col">Seats</th>
                                <th scope="col">Destination</th>
                                <th scope="col">Frequency</th>
                                <th></th>





                            </tr>
</Fade>
                     </thead>

            <Fade top cascade>


          <tbody style={{backgroundColor:"ButtonFace" , color:"black"}}>
          
                                        <tr >               
                                            
                                             <td>{this.state.train.trainName}</td>
                                            <td>{this.state.train.trainCode}</td>
                                            <td>{this.state.train.source}</td>
                                            <td>{this.state.train.noOfSeats}</td>
                                            <td>{this.state.train.destination}</td>
                                            <td>{this.state.train.frequency}


                                              </td>
                                              <td>                <button id="btun" className="btn bg-primary text-white" style={{width:"100px",display:"none"}} onClick={(e) => this.handleConform(this.state.train.trainCode,this.state.train.frequency)} >Conform</button>
</td>




        </tr>

        
     </tbody>

     </Fade>
    
                </Table>    


                </Card> 
                </Zoom>
                <br></br>
                <button className="btn bg-primary text-white" onClick={(e) => this.seatsDetails()}>All Trains Seats Details</button>

              
            </div>
        )
    }
}
