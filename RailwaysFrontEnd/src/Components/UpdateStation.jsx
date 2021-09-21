import React, { Component } from 'react'
const axios = require('axios').default;


export default class UpdateStation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainCode:"",
      stationName: "",
      stationCode: "",
      arrives: "",
      departure: "",
      halt: "",
      distance: ""



    }


  }

  componentDidMount() {

    let stationName = this.props.match.params.name

    axios.get(`http://localhost:8088/getstation/${stationName}`).then((response) => {

      this.setState({

        trainCode:response.data.station.trainCode,
        stationName: response.data.station.stationName,
        stationCode: response.data.station.stationCode,
        arrives: response.data.station.arrives,
        departure: response.data.station.departure,
        halt: response.data.station.halt,
        distance: response.data.station.distance





      })
    })
  }


  handleChange = (e) => {
    e.preventDefault();

    this.setState({ 
      halt: e.target.value 


    })
    
  




  }
  handleArriveChange = (e) => {
    e.preventDefault();

    this.setState({ 
      arrives:e.target.value,


    })}
    handleDepartureChange = (e) => {
      e.preventDefault();
  
      this.setState({ 
        departure:e.target.value,
  
  
      })}
  
  


  handleSubmit = (e) => {
    e.preventDefault();
    

    let data = {
      trainCode:this.state.trainCode,
      stationName: this.state.stationName,
      stationCode: this.state.stationCode,
      arrives: this.state.arrives,
      departure: this.state.departure,
      halt: this.state.halt,
      distance: this.state.distance



    }

    axios.put('http://localhost:8088/updatestation', data
    ).then((response) => {
      console.log(response)

      this.props.history.push({ pathname: '/viewstatus' })


    });


  }

  render() {

    return (
      <div className="m-4">
          <br></br>
          <br></br>
        <div className="container col-6">

          <form onSubmit={this.handleSubmit}>
            <h6 style={{color:"white"}}>Update the Station details</h6>
            <br />
            <div class="mb-3">
              <input type="text" class="form-control" id="trainCode" value={this.state.trainCode} name="train Code" disabled  />
            </div>

            <div class="mb-3">
              <input type="text" class="form-control" id="stationName" value={this.state.stationName} name="station Name" disabled  />
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" name="stationCode" value={this.state.stationCode}   disabled/>
            </div>
           
            <div class="mb-3">
              <input type="time" class="form-control" id="arrives"  name="arrives" value={this.state.arrives} onChange={this.handleArriveChange} placeholder="Arrives Time"   />
            </div>
            <div class="mb-3">
              <input type="time" class="form-control" id="departure" name="departure" value={this.state.departure} onChange={this.handleDepartureChange}   placeholder="Departure Time"   />
            </div>
            <div class="mb-3">
              <input type="value" class="form-control" id="halt" name="halt" onChange={this.handleChange} value={this.state.halt} />
            </div>
            <div class="mb-3">
              <input type="value" class="form-control" id="distance" value={this.state.distance} name="distance (in Km)" disabled />
            </div>


            <button type="submit" class="btn btn-primary" >Update</button>
          </form>

        </div>



      </div>


    )
  }
}
