import React, { Component } from 'react'
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
const axios = require('axios').default;


export default class ViewTrains extends Component {

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
    handleDelete = (trainName) => {
        axios.delete(`http://localhost:8088/deletetrain/${trainName}`).then((response) => {

            alert("Are you sure?");
            this.componentDidMount();


        });

    }

    handleAdd = () => {
        this.props.history.push({ pathname: '/addtrain' })

    }

    handleUpdate = (name) => {

        this.props.history.push({ pathname: '/updatetrain/' + name })

    }
    back = () => {

        this.props.history.push({  
            pathname: '/admindashboard'  
    
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
                                <th scope="col">Frequency</th>

                                <th scope="col">Action</th>




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
                                            <td>{train.frequency}


                                              </td>



                                            <td><DeleteIcon onClick={(e) => this.handleDelete(train.trainCode)}>delete</DeleteIcon> &nbsp;&nbsp;
      <EditIcon onClick={(e) => this.handleUpdate(train.trainName)}>update</EditIcon></td>



                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <button className="btn bg-primary text-white" onClick={(e) => this.handleAdd()}>Add Train</button>
                </div>

            </div>
        )
    }
}
