import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './scss/App.scss';

import Error from "./components/Error";
import Home from "./components/Home";
import About from "./components/About";
import Episode from "./components/Episode";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    let _this = this;
    fetch("http://v1.techlifepodcast.com/archive-feed.xml")
      .then(res => res.text())
      .then(data => {

        let parseXML = require('xml2js').parseString;

        parseXML(data, function (err, result) {
          _this.setState({
            items: result
          })
        });

        console.log(_this.state.items);

        this.setState({
          isLoaded: true,
          items: _this.state.items
        });
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact render={(props) => <Home {...props} appState={this.state} /> } />
            <Route path="/about" component={About} />
            <Route path="/episodes/:id" component={Episode} />
            <Route component={Error} />
          </Switch>          
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
