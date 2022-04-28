import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Switch } from "react-router";

import Header from "./components/Layout/Header";
import Landing from "./components/Layout/Landing";
import ProductPage from "./components/Product/ProductPage";
import Checkout from "./components/Checkout/Checkout";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route component={Header} />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/phone" component={ProductPage}/>
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;