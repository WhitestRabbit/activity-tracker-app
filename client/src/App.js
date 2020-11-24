import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import About from './components/About';
import ActivityList from './components/ActivityList';
import EditActivity from './components/EditActivity';
import CreateActivity from './components/CreateActivity';
import CreateUser from './components/CreateUser';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route path="/" exact component={ActivityList}></Route>
        <Route path="/create" component={CreateActivity}></Route>
        <Route path="/edit/:id" component={EditActivity}></Route>
        <Route path="/user" component={CreateUser}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    </Router>
  );
}

export default App;
