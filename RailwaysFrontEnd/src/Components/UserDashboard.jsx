import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, Row, CardImg, } from 'reactstrap'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


class UserDashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {


        }
    }
    handleTrainDetails = () => {

        this.props.history.push({
            pathname: '/usertrains'


        })
    }

    handleStatus = () => {

        this.props.history.push({
            pathname: '/userstatus'


        })
    }

    handleTicket = () => {

        this.props.history.push({
            pathname: '/ticket'


        })
    }

    logoot = () => {

        this.props.history.push({  
            pathname: '/'  
    
    })
    }


    render() {
        return (
<div>
            {/* info text */}
            <Row>
                <Col sm="4"></Col>
                <Col>
                    <h2 style={{ fontFamily: "cursive", color: "white" }} className="mt-4">

                        <Fade left>
                            Easier, Faster, More Secure .
               </Fade>
                    </h2>
                </Col>
            </Row>

            <br></br>
            <br></br>


            {/* userdashboard cards  */}
            <Row>
            <Col sm="2"></Col>

                {/* transaction history card */}
                <Col sm="3">
                <Fade left duration={2000}>
                        <Card style={{ boxShadow: "0 10px 20px  0 rgba(0, 0, 0, 0.8)" }}>
                            <CardHeader>
                                <strong>
                                    Get Trains details!
                     </strong>
                            </CardHeader>
                            <CardImg src="/train2.jpg" width="160px" height="150px"></CardImg>
                            <CardBody style={{ fontFamily: "cursive" }}>
                                <Container className="mt-3">
                                    <Button style={{ borderRadius: "20px", width: "100%" }}
                                        outline onClick={this.handleTrainDetails}>
                                        trains
                                      </Button>
                                </Container>
                            </CardBody>
                        </Card>
                    </Fade>

                </Col>

                {/* add new bank account card  */}
                <Col sm="3">
                <Zoom duration={2300}>
                        <Card style={{ boxShadow: "0 10px 20px  0 rgba(0, 0, 0, 0.8)" }}>
                            <CardHeader>
                                <strong>
Train Status                    </strong>
                            </CardHeader>
                            <CardImg src="/train_location.jpg" height="150px"></CardImg>
                            <CardBody style={{ fontFamily: "cursive" }}>
                                <Container className="mt-3">
                                    <Button style={{ borderRadius: "20px", width: "100%" ,fontFamily: "cursive"}} onClick={this.handleStatus} outline>Status</Button>
                                </Container>
                            </CardBody>
                        </Card>
                    </Zoom>
               
                </Col>

                <Col sm="3">
                <Zoom duration={2300}>
                        <Card style={{ boxShadow: "0 10px 20px  0 rgba(0, 0, 0, 0.8)" }}>
                            <CardHeader>
                                <strong>
Book Ticket                 </strong>
                            </CardHeader>
                            <CardImg src="/ticket2.jpg" height="150px" ></CardImg>
                            <CardBody style={{ fontFamily: "cursive" }}>
                                <Container className="mt-3">
                                    <Button style={{ borderRadius: "20px", width: "100%" ,fontFamily: "cursive"}} onClick={this.handleTicket} outline>Book Ticket</Button>
                                </Container>
                            </CardBody>
                        </Card>
                    </Zoom>
               
                    </Col>

            </Row>
            <br></br>
            <br></br>
            <Container>
<Row>   

    <Col sm="3">    </Col>

    <Col sm="3">    </Col>

    <Col sm="3">    </Col>

    

         
<Col sm="3">

    <button className="btn  text-white" style={{marginLeft:"250px",marginTop:"50px",fontFamily: "cursive",backgroundColor:"yellowgreen"}} onClick={(e) => this.logoot()}>Logout</button>
    </Col>
</Row>
            </Container>
</div>
          
        )
    }
}

export default UserDashboard;