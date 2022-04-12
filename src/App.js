import React from 'react';
import './App.css'
import Search from './Components/Search';
import Login from './Components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Routing from './Components/Routing';

function App() {
  
  return (
    
    <div className='wrapper'>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Routing path="/create-playlist" component={Search} />
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
