import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CandidateDashboard from './Components/CandidateDashboard/CandidateDashboard/CandidateDashboard';
import AppliedJobs from './Components/CandidateDashboard/CandidateDashboard/AppliedJobs/AppliedJobs';
import ClientDashboard from './Components/ClientDashboard/ClientDashboard/ClientDashboard';
import ClientJob from './Components/ClientDashboard/ClientJob/ClientJob';
import TopNavbar from './Components/ClientDashboard/TopNavbar/TopNavbar';
import Login from './Components/Shared/Login/Login';
import NotFound from './Components/Shared/NotFound/NotFound';
import Registration from './Components/Shared/Registration/Registration';
function App() {
  return (
    <Router>
      <TopNavbar/>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/client-dashboard">
          <ClientDashboard/>
        </Route>
        <Route path="/client-jobs">
          <ClientJob></ClientJob>
        </Route>
        <Route path="/register">
          <Registration></Registration>
        </Route>
        <Route path="/candidate-dashboard">
          <CandidateDashboard></CandidateDashboard>
        </Route>
        <Route path="/applied-jobs">
          <AppliedJobs></AppliedJobs>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
