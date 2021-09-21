import React, { Component } from 'react'
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";


const axios = require('axios').default;


export default class Status extends Component {

    constructor(props) {
        super(props);
        this.state = {

            stationData: []

        }
    }

    back = () => {

        this.props.history.push({  
            pathname: '/viewstatus'  
    
    })
    }
    componentDidMount() {

        let trainCode = this.props.match.params.code

        axios.get(`http://localhost:8088/gettrainstations/${trainCode}`).then((response) => {

        console.log(response)

            this.setState({

                stationData: response.data.stationList
            })


        });


    }
    handleUpdate = (name) => {

        this.props.history.push({ pathname: '/updatestation/' + name })

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
    
    handleAdd = () => {
        this.props.history.push({ pathname: '/addstation' })

    }



    render() {

        return (

            <div className="m-5">
                                <h4 className="text-center m-3" style={{color:"white"}}> Train satus</h4>



                <div  className="container">
                <button className="btn bg-primary text-white" onClick={(e) => this.back()}>Back</button>
<br></br>
<br></br>
                    <table class="table" style={{ color: "black" ,backgroundColor:"white" }}>
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Station Name</th>
                                <th scope="col">Code</th>
                                <th scope="col">Arives</th>

                                <th scope="col">Depatrure</th>
                                <th scope="col">Hault(in min)</th>

                                <th scope="col">Distance(in Km)</th>
                                <th>Action</th>




                            </tr>

                        </thead>
                        <tbody style={{ backgroundColor: "ButtonFace", color: "black" }}>
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


                                            <td><DeleteIcon onClick={(e) => this.handleDelete(station.stationName)}>delete</DeleteIcon> &nbsp;&nbsp;
      <EditIcon onClick={(e) => this.handleUpdate(station.stationName)}>update</EditIcon></td>



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
