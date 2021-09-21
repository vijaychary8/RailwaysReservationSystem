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
ticket:[],

        }
    }
    
    

    render(){
        return(
<div>
<Col sm="3">
                <Fade left duration={2000}>
                        <Card style={{ boxShadow: "0 10px 20px  0 rgba(0, 0, 0, 0.8)" }}>
                            
                            <CardBody style={{ fontFamily: "cursive" }}>
                                <Container className="mt-3">
                                    trainCode:
                                </Container>
                            </CardBody>
                        </Card>
                    </Fade>

                </Col>




            </div>
        )
    }
}
