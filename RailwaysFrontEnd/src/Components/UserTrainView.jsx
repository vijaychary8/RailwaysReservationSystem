import React, { Component } from 'react'
const axios = require('axios').default;


export default class UserTrainView extends Component {


    constructor(props) {
        super(props);
        this.state = {

            trainData: []

        }
    }
    componentDidMount() {

        axios.get(`http://localhost:8088/getalltrain`).then((response) => {

        console.log(response)

            this.setState({

                trainData: response.data.trainList
            })


        });


    }

    back = () => {

        this.props.history.push({  
            pathname: '/userdashboard'  
    
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
                                <th scope="col">Train Name</th>
                                <th scope="col">Train Code</th>
                                <th scope="col">Source</th>
                                <th scope="col">Destination</th>




                            </tr>

                        </thead>
                        <tbody style={{ backgroundColor: "ButtonFace", color: "black" }}>
                            {
                                this.state.trainData.map(
                                    train =>
                                        <tr key={train.trainName}>
                                            <td>{train.trainName}</td>
                                            <td>{train.trainCode}</td>
                                            <td>{train.source}</td>
                                            <td>{train.destination}</td>





                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}
