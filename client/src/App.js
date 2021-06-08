import { Route } from 'react-router-dom';
import './App.css';

import {Home} from './Components/Home/Home';
import LandingPage from './Components/LandingPage/LandingPage';
import NavBar from './Components/NavBar/NavBar';
import CountryDetail from './Components/CountryDetail/CountryDetail';
import Activity from './Components/Activity/Activity.jsx';

function App() {
  return (
    <div>
      <Route exact path="/home" component={NavBar}/>
      <Route exact path="/countries/:id" component={NavBar}/>
      <Route exact path="/activity" component={NavBar}/>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/countries/:id" component={CountryDetail}/>
      <Route exact path="/activity" component={Activity}/>
    </div>
  );
}

export default App;
