import React from 'react'
import { useState } from 'react';
const axios = require('axios').default;


export default function AddStation(props) {


  const initalValues = {
trainCode:"",
    stationName: "",
    stationCode: "",
    arrives:"",
    departure:"",
    halt:"",
    distance:""

  }

  var [stationEntity, setStationEntity] = useState(initalValues);

  const add = () => {
    axios.post('http://localhost:8088/addstation', stationEntity
    ).then((response) => {


      props.history.push({ pathname: '/viewstatus' })



    }
    ).catch((error) => {
      // Error
      if (error.response.status===404) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          console.log(error.response.status);
          // console.log(error.response.headers);
alert("StationCode is already present")

      }  else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
      }
      console.log(error.config);

   
 });
  }


  const handleInputChange = (e) => {
    var { name, value } = e.target
    setStationEntity({
      ...stationEntity,
      [name]: value
    });
  }
  const handleSubmit = (e) => {

    e.preventDefault();
    add();

  }
  const back = () => {

    props.history.push({  
        pathname: '/viewstations'  

})
}




  return (

    <div className="m-5" >
                  <button className="btn bg-primary text-white" onClick={back}>Back</button>

      <div className="container col-6">
        <h6 style={{color:"white"}} >Add Station Details</h6>
        <br />

        <form onSubmit={handleSubmit}>
        <div class="mb-3">
              <input type="value" class="form-control" id="trainCode" onChange={handleInputChange} name="trainCode" placeholder="Train Code " required />
            </div>

          <div class="mb-3">
            <input type="text" class="form-control" name="stationName"  id="stationName" onChange={handleInputChange} placeholder="Station Name" required />
          </div>

          <div class="mb-3">
            <input type="text" class="form-control" name="stationCode" onChange={handleInputChange} placeholder="Station Code" required />
          </div>
          <div class="mb-3">
              <input type="time" class="form-control" name="arrives" onChange={handleInputChange}  placeholder="Arriving time" required/>
            </div>
            <div class="mb-3">
              <input type="time" class="form-control" id="departure"  name="departure" onChange={handleInputChange}  placeholder="Depature Time" required />
            </div>
            <div class="mb-3">
              <input type="value" class="form-control" id="halt" name="halt" onChange={handleInputChange}  placeholder="halt (in Min.)" required />
            </div>
            <div class="mb-3">
              <input type="value" class="form-control" id="distance" name="distance" onChange={handleInputChange}  placeholder="Distance (in km)" required />
            </div>


          <button type="Add" class="btn btn-primary">Add</button>
        </form>
        

      </div>
    </div>
  )
}
