import axios from "axios";

const API_URL = "http://ec2-3-16-124-14.us-east-2.compute.amazonaws.com:8088/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, dob, email, password, username, phone, country) {
    return axios.post(API_URL + "signup", {
      name,
      dob,
      email,
      password,
      username,
      phone,
      country
    });
  }

  getCurrentUser() {
    console.log(JSON.parse(localStorage.getItem('user')))
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();