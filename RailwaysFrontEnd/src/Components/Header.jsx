import React, { Component } from "react"
import Fade from 'react-reveal/Fade';
import { ButtonDropdown, Navbar, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class Header extends Component {

  constructor(props) {

    super(props)
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      dropdownOpen: false,
      webAppName: "Railway Service"


    };
  }

//   componentDidMount() {
//     const user = AuthService.getCurrentUser();

//     if (user) {
//       this.setState({
//         currentUser: user,
//         showAdminBoard: user.roles.includes("ROLE_ADMIN"),
//       });
//     }
//   }

//   logOut() {
//     AuthService.logout();
//   }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText
    });
  }

  render() {

    const { currentUser } = this.state;
    return (

      <div className="app" >

        <Fade top>
          <Navbar style={{ backgroundColor: "" }}>
            <h3 style={{color:"white"}}><strong >
              {this.state.webAppName}
            </strong></h3>

            {currentUser ? (

              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle color="warning" style={{ borderRadius: "30px", fontWeight: "bolder" }}> {currentUser.username} </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={this.logOut} href="/">Logout</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>

            ) : (
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle color="warning" style={{ borderRadius: "30px", fontWeight: "bolder" }}> Login As</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={this.select} href="/userlogin">User</DropdownItem>
                  <DropdownItem onClick={this.select} href="/adminlogin">Admin</DropdownItem>

                </DropdownMenu>
              </ButtonDropdown>
            )}

          </Navbar>
        </Fade>
      </div>
    )
  }
}

export default Header;