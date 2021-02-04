import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/home/Header";
import Footer from "./components/home/Footer";
import Cart from "./components/cart/Cart";
import ArticleTableAdmin from "./components/article/ArticleTableAdmin";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Header}></Route>
          <div className="principal-content">
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route
              exact
              path="/admintable"
              component={ArticleTableAdmin}
            ></Route>
          </div>
          <Route path="/" component={Footer}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
