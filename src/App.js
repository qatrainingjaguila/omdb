import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import SearchMovie from './Components/SearchMovie';
import { Switch, Route, BrowserRouter as Router, Link} from 'react-router-dom';
import All2020Movies from './Components/All2020Movies';
import MyNav from './Components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
      <MyNav/>
      <Switch>
          <Route path="/search" component={SearchMovie} exact/>
          <Route path="/" component={Homepage} exact/>
          <Route path="/all2020" component={All2020Movies} exact/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
