import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import './App.css';
import HotelUpdate from './Pages/HotelUpdate';
import HotelDetail from './Pages/HotelDetail';

const App=()=> <Fragment>
  <BrowserRouter>
  <Switch >
    <div className="container">
    <Route exact path="/" component={Home}/>
    <Route exact path="/:id/update" component={HotelUpdate}/>
    <Route exact path="/details" component={HotelDetail}/>
    </div>
  </Switch>
  </BrowserRouter>
</Fragment>

export default App;
