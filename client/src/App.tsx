import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import './App.css';
import HotelUpdate from './Pages/HotelUpdate';
import HotelDetail from './Pages/HotelDetail';

const App=()=> 
    <div className="container">
  <BrowserRouter>
  <Switch >
    <Route exact path="/" component={Home}/>
    <Route exact path="/:id/update" component={HotelUpdate}/>
    <Route exact path="/details/:id" component={HotelDetail}/>
  </Switch>
  </BrowserRouter>
    </div>

export default App;
