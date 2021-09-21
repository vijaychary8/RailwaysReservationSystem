import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
const axios = require('axios').default;

var login_attempts=3;


// import { Button, Form, Input } from "reactstrap";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};



export default class AdminLogin extends Component {


  constructor(props) {

    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeAdminUsername = this.onChangeAdminUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      usename: "",
      password: "",
      loading: false,
      message: ""
    };
  }


    onChangeAdminUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }


//   handleLogin = (e) =>{

//     axios.post(`http://localhost:8088/login/${this.state.username}/${this.state.password}`).then((response) => {
      
// console.log(response);
//       this.props.history.push({  
//           pathname: '/admindashboard'  

//   })


//   });

//   }


handleLogin(e) {
  e.preventDefault();

  this.setState({
    message: "",
    loading: true
  });
  this.form.validateAll();

  if (this.checkBtn.context._errors.length === 0) {
    axios.post(`http://localhost:8088/login/${this.state.username}/${this.state.password}`).then(
      (response) => {
        this.props.history.push("/admindashboard");
        window.location.reload();
      }).catch((error) => {
        // Error
        if (error.response.status!==404) {
          alert("logged succesfully")
            
        }   else
        {
         if(login_attempts===0)
         {
          alert("No Login Attempts Available");
         }
         else
         {
          login_attempts=login_attempts-1;
          alert("Login Failed Now Only "+login_attempts+" Login Attempts Available");
          if(login_attempts===0)
          {
           document.getElementById("name").disabled=true;
           document.getElementById("pass").disabled=true;
           document.getElementById("form1").disabled=true;
          }
         }
       
     
   }
  }
    
    );

  } 
}

  render() {
    return (

      <div>
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

        </div>
        <Form  id="form1" onSubmit={this.handleLogin} ref={c => { this.form = c; }} style={{ color:"white", width: "400px", marginLeft: "400px", fontFamily: "cursive" }}>

          <p className="h1 text-center mb-4" >Admin Login</p>

          <div className="form-group">
            <label htmlFor>Admin Username</label>
            <Input type="text" id="name" className="form-control" placeholder="Enter Username" value={this.state.username} onChange={this.onChangeAdminUsername} validations={[required]} />
          </div>

          <div className="form-group">
            <label htmlFor>Password</label>
            <Input type="password" id="pass" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.onChangePassword} validations={[required]} />
          </div>
<br></br>
          <div className="form-group">
            <button
              className="btn btn-primary btn-block">
              <span>LogIn</span>
            </button>
          </div>

          {this.state.message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {this.state.message}
              </div>
            </div>
          )}
          <CheckButton
            style={{ display: "none" }}
            ref={c => {
              this.checkBtn = c;
            }}
          />

        </Form>
      </div>
    );
  }
}