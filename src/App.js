import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'




function App() {
  return (
    <div className="App">
      <Router>
        <Route path ="/" component={Header}></Route>
        <div className="principal-content">
          <Route exact path="/home" component={Home}></Route>
        </div>
        <Route path ="/" component={Footer}></Route>
      </Router>
    </div>
  );
}

export default App;
