import React from 'react';
import './App.css';
//import Navbar from './components';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import VEG from './pages/veg';
import Nonveg from './pages/nonveg';
import Starters from './pages/starters';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
  
function App() {
  return (
    <div style={{backgroundColor:'green'}}>
    <Router>
     
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/veg' component={VEG} />
        <Route path='/nonveg' component={Nonveg} />
        <Route path='/starters' component={Starters} />
        <Route path='/team' component={Teams} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
     
      </Router>
    </div>
  );
}
  
export default App;