import React, { Component } from 'react'

const axios = require('axios').default;


export default class viewStations extends Component {


    constructor(props) {
        super(props);
        this.state = {

            stationData: []

        }
    }
    componentDidMount() {

        axios.get(`http://localhost:8088/getallstations`).then((response) => {

        console.log(response)

            this.setState({

                stationData: response.data.stationList
            })


        });


    }
    handleDelete = (stationName) => {
        axios.delete(`http://localhost:8088/deleteStation/${stationName}`).then((response) => {

            alert("Are you sure?");
            this.componentDidMount();


        });

    }

    handleAdd = () => {
        this.props.history.push({ pathname: '/addstation' })

    }
    handleUpdate = (name) => {

        this.props.history.push({ pathname: '/updatestation/' + name })

    }
    back = () => {

        this.props.history.push({  
            pathname: '/admindashboard'  
    
    })
    }




    render() {

        return (
            <div className="m-5">
                <h4 className="text-center m-3" style={{color:"white"}}> Station Details</h4>

                <div className="container">
                <button className="btn bg-primary text-white" onClick={(e) => this.back()}>Back</button>
                <br></br>
                <br></br>

                    <table class="table" style={{ color: "black" ,backgroundColor:"white" }}>
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Station Name</th>
                                <th scope="col">Station Code</th>






                            </tr>

                        </thead>
                        <tbody style={{ backgroundColor: "ButtonFace", color: "black" }}>
                            {
                                this.state.stationData.map(
                                    station =>
                                        <tr key={station.stationName}>
                                            <td>{station.stationName}</td>
                                            <td>{station.stationCode}</td>




                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <button className="btn bg-primary text-white" onClick={(e) => this.handleAdd()}>Add Station</button>
                </div>

            </div>
        )
    }
}
