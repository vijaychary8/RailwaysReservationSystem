import React , {Component} from 'react'
import {Table ,Card , CardHeader ,Row , Col, Input } from 'reactstrap'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import HistoryIcon from '@material-ui/icons/History';
const axios = require('axios').default;


class UserStatus extends Component{

    constructor(props){
        super(props)
        this.state = {

                    stationData : [],
                    statioCode : "",

        }
    }
    back = () => {

        this.props.history.push({  
            pathname: '/userdashboard'  
    
    })
    }


    
handleChange = (e) =>{

     this.setState({stationCode:e.target.value}  ,  () => {  
          this.hanldeTransactionListByStationName()})
}


hanldeTransactionListByStationName = () => {

         
    let code = this.state.stationCode
    axios.get(`http://localhost:8088/gettrainstations/${code}`).then((response)=>
    {
       
       console.log(response.data)
      this.setState({stationData:response.data.stationList})
       


    })}


    render(){
        return(


            <div className="m-4">
                                <button className="btn bg-primary text-white" onClick={(e) => this.back()}>Back</button>
<br></br>
<br></br>
         <Zoom>     
                <Card>
                <CardHeader className="text-center">
                     <HistoryIcon/>
                    <strong>Train Status</strong>

            <Row> 
                <Col>
                   <Input style={{width:"200px"}} value={this.state.stationCode} 
                    onChange={this.handleChange}  type="text"placeholder="Train Code" >  
                   </Input>
                </Col>
                <Col>
                </Col>
            </Row>
               </CardHeader>  
                   
                   <Table hover>
              
                     <thead>
                     <Fade top cascade>
                         <tr>
                         <th >Station Name</th>
                                <th>Code</th>
                                <th >Arives</th>

                                <th >Depatrure</th>
                                <th >Hault(in min)</th>

                                <th >Distance(in Km)</th>

      
                        
                        </tr>
                        </Fade>
                     </thead>

            <Fade top cascade>


          <tbody style={{backgroundColor:"ButtonFace" , color:"black"}}>
             {

this.state.stationData.map(
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

     </Fade>
    
                </Table>    
                </Card> 
                </Zoom>
            </div>
        )
    }
}
export default UserStatus;