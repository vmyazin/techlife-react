import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router';
import { Helmet } from 'react-helmet';
// import logo from './logo.svg';
import './scss/bootstrap-ext.scss';
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
      appState: {
        items: [],
        isLoaded: false
      }
    }
  }

  componentDidMount() {
    const fetch = require("node-fetch");
    
    let _this = this;
    let feedXml;

    // staging: "http://staging.techlifepodcast.com/archive-feed.xml"

    const LOCAL_DOMAINS = ["localhost", "127.0.0.1"];

    if (LOCAL_DOMAINS.includes(window.location.hostname)) {
      feedXml = "http://localhost:1981/podcast-feed.xml";
    } else {
      feedXml = "https://www.techlifepodcast.com/podcast-feed.xml";
    }

    fetch(feedXml) 
      .then(res => res.text())
      .then(data => {

        let parseXML = require('xml2js').parseString;

        parseXML(data, function (err, result) {
          _this.setState({
            items: result
          });
        });

        let moment = require('moment');
        require('moment/locale/ru');

        let _items = _this.state.items;

        // augment episodes object
        let episodes = _items.rss.channel[0].item.map(episode => {
          const episodeNumber = episode.title[0].split(":")[0];
          // add episode number key
          episode.episodeNum = episodeNumber.replace("#",""); // add clean episode number to object
          // add clean title
          episode.title = episode.title[0].replace(episodeNumber + ": ", ""); // add clean episode title
          // add formatted date
          episode.pubDateConverted = moment(episode.pubDate[0]).locale('ru').format("LL"); // add neat episode date in Russian
          return episode;
        });

        this.setState({
          appState: {
            isLoaded: true,
            items: episodes
          }
        });
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Helmet>
            <title>Технологии и жизнь: подкаст</title>
            <meta name="description" content="Интернет радио-программа про современные технологии, их влияние на нашу жизнь, и прочие мысли." />
          </Helmet>

          <Header />
          <Switch>
            <Route path="/" exact render={(props) => <Home {...props} appState={this.state.appState}  /> } />
            <Route path="/about" component={About} />
            <Redirect exact from="/episodes" to='/'/>
            <Redirect from='/episode/:id' to='/episodes/:id'/>
            <Route path="/episodes/:id" render={(props) => <Episode {...props} appState={this.state.appState} /> } />
            <Route component={Error} />
          </Switch>          
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
