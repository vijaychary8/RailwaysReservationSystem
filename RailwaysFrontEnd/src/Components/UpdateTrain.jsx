import React, { Component } from 'react';
import Select from 'react-select';

const axios = require('axios').default;
let data = [
  {
    value: "M",
    label: "MON ",
  },
  {
    value: "TU",
    label: "TUE "
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


export default class UpdateTrain extends Component {

  
  constructor(props) {
    super(props);
    this.state = {

      trainNmae: "",
      trainCode: "",
      source:"",
      destination:"",
      frequency:[],
      selectedValue:[]
    }



  }
  

  componentDidMount() {

    let trainName = this.props.match.params.name

    axios.get(`http://localhost:8088/gettrain/${trainName}`).then((response) => {

      this.setState({


        trainName: response.data.train.trainName,
        trainCode: response.data.train.trainCode,
        source: response.data.train.source,
        destination: response.data.train.destination,
        frequency: response.data.train.frequency





      })
    })
  }


  handleChange = (e) => {
    e.preventDefault();

    this.setState({ noOfSeats: e.target.value })

  }

   skillchange = (e) => {
 
    let skills = (Array.isArray(e) ? e.map(x => x.value) : [])
      
      if(skills.length === 0){
           alert("No Skills Added")
           this.setState({selectedValue:skills.toString()})
      } 
      else{
                  this.setState({selectedValue:skills.toString()})
    }
}    



  handleSubmit = (e) => {
    e.preventDefault();

    let data = {

      trainName: this.state.trainName,
      trainCode: this.state.trainCode,
      source:this.state.source,
      destination:this.state.destination,
      frequency:this.state.selectedValue




    }
    console.log(data)

    axios.put('http://localhost:8088/updatetrain', data
    ).then((response) => {
console.log(response)
      this.props.history.push({ pathname: '/viewtrains' })


    });


  }
   back = () => {

    this.props.history.push({  
        pathname: '/viewtrains'  

})
}

  render() {

    return (
      <div className="m-4">
                          <button className="btn bg-primary text-white" onClick={(e)=>this.back()}>Back</button>

        <div className="container col-6">

          <form onSubmit={this.handleSubmit}>
            <h6 style={{color:"white"}}>Update the Train details</h6>
            <br />

            <div class="mb-3">
              <input type="text" class="form-control" id="trainName" value={this.state.trainName} name="trainName" disabled />
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" id="trainCode" value={this.state.trainCode} name="trainCode" disabled />
            </div>



            <div class="mb-3">
              <input type="text" class="form-control" id="source" value={this.state.source} name="source" disabled />
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" id="destination" value={this.state.destination} name="destination" disabled />
            </div>

            <Select
        className="dropdown"
        placeholder="Add days"
        value={data.filter(obj => this.state.selectedValue.includes(obj.value))} // set selected values
        options={data} // set list of the data
        onChange={this.skillchange} // assign onChange function
        isMulti
        isClearable
      />

            <button type="submit" class="btn btn-primary" >Update</button>
          </form>

        </div>



      </div>


    )
  }
}
