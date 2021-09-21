import React from 'react'
import { useState } from 'react';
import Select from 'react-select';

const axios = require('axios').default;


export default function AddTrain(props) {
  let data = [
    {
      value: "M",
      label: "MON ",
    },
    {
      value: "TU",
      label: "tUE "
    },
    {
      value: "W",
      label: "WED "
    },
    {
      value: "T",
      label: "THUR "
    },
    {
      value: "F",
      label: "FRI "
    },
    {
      value: "s",
      label: "SAT "
    },
    {
      value: "Su",
      label: "SUN "
    }
  ];
  const [selectedValue, setSelectedValue] = useState([]);

  const skillchange = (e) => {
let skills=[];
     skills = (Array.isArray(e) ? e.map(x => x.value) : [])
      
      if(skills.length === 0){
           alert("No Skills Added")
           setSelectedValue(skills.toString())
      } 
      else{
                  setSelectedValue(skills.toString())
    }
}    



  const initalValues = {

    trainName: "",
    trainCode: "",
    source:"",
    destination:"",
    frequency:[]

  }

  var [trainEntity, sertTrainEntity] = useState(initalValues);
  console.log(selectedValue)

let list=[];
list=selectedValue.slice(" ,");

console.log(list)

  const add = () => {

    const data = {trainName : trainEntity.trainName , trainCode : trainEntity.trainCode ,  source:trainEntity.source,
      frequency : selectedValue , destination:trainEntity.destination}
      

    axios.post('http://localhost:8088/addTrain', data
    ).then((response) => {

      console.log(response)

      props.history.push({ pathname: '/viewtrains' })




    }).catch((error) => {
      // Error
      if (error.response.status===404) {
          console.log(error.response.status);
alert("TrainCode is already present")

      }  else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
      }
      console.log(error.config);

   
 }
    );
  }

  

  const handleInputChange = (e) => {

    console.log(e.target.value)
    var { name, value } = e.target
    sertTrainEntity({
      ...trainEntity,
      [name]: value
    });
  }
  const handleSubmit = (e) => {

    e.preventDefault();
    add();

  }
  

 const back = () => {

    props.history.push({  
        pathname: '/viewtrains'  

})
}



  return (
    <div className="m-5" >
            <button className="btn bg-primary text-white" onClick={back}>Back</button>

      <div className="container col-6">


        <h6 style={{color:"white"}}>Add Train Details</h6>
        <br />

        <form onSubmit={handleSubmit}>

          <div class="mb-3">
            <input type="text" class="form-control" name="trainName"  id="trainName" value={trainEntity.trainName} onChange={handleInputChange} placeholder="Train Name" required />
          </div>

          <div class="mb-3">
            <input type="text" class="form-control" name="trainCode" value={trainEntity.trainCode} onChange={handleInputChange} placeholder="Train Code" required />
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" name="source"value={trainEntity.source} onChange={handleInputChange} placeholder="Source" required />
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" name="destination"value={trainEntity.destination} onChange={handleInputChange} placeholder="Destination" required />
          </div>
          
          
          <Select
        className="dropdown"
        placeholder="Add days"
        value={data.filter(obj => selectedValue.includes(obj.value))} // set selected values
        options={data} // set list of the data
        onChange={skillchange} // assign onChange function
        isMulti
        isClearable
      />



          {/* <div class="mb-3" style={{color:"white"}} >
            Freq:&nbsp;&nbsp;
            Sun <input name="frequency" value="Sun" onClick={handleInputChange} type="checkbox"/>
            &nbsp;&nbsp;&nbsp;
            Mon <input name="frequency" value="Mon" onClick={handleInputChange} type="checkbox"/>
            &nbsp;&nbsp;&nbsp;
           Tue <input name="frequency" value="Tue" onClick={handleInputChange} type="checkbox"/>
            &nbsp;&nbsp;&nbsp;
           Wed <input name="frequency" value="Wed" onClick={handleInputChange} type="checkbox"/>
            &nbsp;&nbsp;&nbsp;
           Thur <input name="frequency" value="Thur" onClick={handleInputChange} type="checkbox"/>
            &nbsp;&nbsp;&nbsp;
           Fri <input name="frequency" value="Fri" onClick={handleInputChange} type="checkbox"/>
            &nbsp;&nbsp;&nbsp;
           Sat <input name="frequency" value="Sat" onClick={handleInputChange } type="checkbox"/>


          </div> */}
<br></br>
          <button type="Add" class="btn btn-primary">Add</button>
        </form>


      </div>
    </div>
  )
}
