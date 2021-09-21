import React, { Component } from 'react'
const axios = require('axios').default;


export default class ViewStatus extends Component {


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
            pathname: '/admindashboard'  
    
    })
    }

    
    handleTrainStations = (code) => {

        this.props.history.push({ pathname: '/status/' + code })

    }




    render() {

        return (
            
            <div className="m-5">
                <h4 className="text-center m-3" style={{color:"white"}}> Train Details</h4>

                <div className="container">
                <button className="btn bg-primary text-white" onClick={(e) => this.back()}>Back</button>
<br></br>
<br></br>
                    <table class="table" style={{ color: "black" ,backgroundColor:"white",width:"500px" }}>
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Train Name</th>
                                <th scope="col">Train Code</th>




                            </tr>

                        </thead>
                        <tbody style={{ backgroundColor: "ButtonFace", color: "black" }}>
                            {
                                this.state.trainData.map(
                                    train =>
                                        <tr key={train.trainName}>
                                            <td>{train.trainName}</td>
                                            <td onClick={(e) => this.handleTrainStations(train.trainCode)}style={{color:"blue"}}>{train.trainCode}</td>



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
