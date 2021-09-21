
import './App.css';
import 'react-dropdown/style.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Components/Header';
import { Container } from 'reactstrap';
import AdminLogin from './Components/AdminLogin'
import AdminDashboard from './Components/Admindashboard'
import UserLogin from './Components/UserLogin';
import UserDashboard from './Components/UserDashboard';
import ViewTrains  from './Components/ViewTrains';
import AddTrain from './Components/AddTrain';
import UpdateTrain from './Components/UpdateTrain';
import ViewStations from './Components/ViewStations';
import AddStation from './Components/AddStation';
import UpdateStation from './Components/UpdateStation';
import ViewStatus from './Components/ViewStatus';
import Status from './Components/Status';
import Registration from './Components/Registration';
import UserTrainView from './Components/UserTrainView';
import UserStatus from './Components/UserStatus';
import SeatConfiguration from './Components/SeatConfiguration';
import Seats from './Components/Seats';
import ViewSeats from './Components/ViewSeats';
import UpdateSeat from './Components/UpdateSeat';
import Ticket from './Components/Ticket';
import TicketDetails from './Components/TicketDetails';
import Maps from './Components/Maps';


function App() {
  return (
    <Router >
    <div className="App"  >
      <Header/>



      <Container >
      <Route path="/" component={AdminLogin} exact />
          <Route path="/adminlogin" component={AdminLogin} exact />
          <Route path="/userlogin" component={UserLogin} exact />
          <Route path="/registration" component={Registration} exact />
          <Route path="/maps" component={Maps} exact />



          <Route path="/admindashboard" component={AdminDashboard} exact />
          <Route path="/userdashboard" component={UserDashboard} exact />
          <Route path="/viewtrains" component={ViewTrains} exact />
          <Route path="/addtrain" component={AddTrain} exact />
          <Route path="/updatetrain/:name" component={UpdateTrain} exact />

          <Route path="/viewstations" component={ViewStations} exact />
          <Route path="/addstation" component={AddStation} exact />
          <Route path="/updatestation/:name" component={UpdateStation} exact />

          <Route path="/viewstatus" component={ViewStatus} exact />
          <Route path="/status/:code" component={Status} exact />
          <Route path="/usertrains" component={UserTrainView} exact />
          <Route path="/userstatus" component={UserStatus} exact />


          <Route path="/seatconfig" component={SeatConfiguration} exact />
          <Route path="/seats/:trainDetails/:frequency" component={Seats} exact />
          <Route path="/viewallseats" component={ViewSeats} exact />

          

          <Route path="/updateseat/:seatId" component={UpdateSeat} exact />
          <Route path="/ticket" component={Ticket} exact />
          <Route path="/ticketdetails/:code/:compartment/:seatType/:price" component={TicketDetails} exact />
          <Route path="/pamentdetails/:ticketprice/:ticketEntity" component={UpdateSeat} exact />


        
      </Container>
    </div>
  </Router>

  );
}

export default App;
