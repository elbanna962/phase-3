import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LandingPage from './components/Landing';
import LoginPage from "./components/Login"
import HomePage from './components/Home';
import RequestPage from './components/Request';
import DetailPage from "./components/Detail";

/////////////////////////////////////////////////////////////////////////
class App extends React.Component {

  render(){
    return (
      <Router>
        <Switch>
          <Route path = "/" exact component = {LandingPage}/>
          <Route path = "/login" component = {LoginPage}/>
          <Route path = "/home" component = {HomePage}/>
          <Route path = "/phase3" component = {RequestPage}/>
          <Route path = {"/phase3-detail"} component = {DetailPage}/>
        </Switch>
      </Router>
    );
  }
}

/////////////////////////////////////////////////////////////////////////
export default App;
