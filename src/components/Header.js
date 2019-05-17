import React from "react";
import { withRouter, NavLink } from "react-router-dom";

export class Header extends React.Component {

  render() {

    const path = this.props.location.pathname.slice(1);

    if (path === '') {
      // return only root path
      return (

        <div className="master-container">
          <div className="container-fluid">
            <h1>Технологии и жизнь</h1>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="spacer-xs spacer-sm"></div>
                <div className="spacer-xs spacer-sm"></div>
                <p>Интернет радио-программа (или <b>подкаст</b>) про современные технологии, их влияние на нашу жизнь, и прочие мысли.</p>
                <div className="spacer-md"></div>
                <div className="spacer-lg"></div>
                <div className="spacer-lg"></div>
                <p>
                  <a className="link-ext" href="https://t.me/techlifepodcast" rel="external">&nbsp;t.me/techlifepodcast&nbsp;</a><br/>
                  <a className="link-ext" href="mailto:talk@techlifepodcast.com" rel="external">&nbsp;talk@techlifepodcast.com&nbsp;</a>
                </p>
              </div>

              <div className="col-lg-5 col-md-6">
                <p><b>Ведущие:</b><br/> <NavLink to="/about">Дмитрий Здоров и Василий Мязин.</NavLink></p>
              </div>

              <div className="col-lg-3 col-md-12">
                <p>Слушать можно тут.<br/>
                  Найти в <b><a href="https://itunes.apple.com/podcast/tehnologii-i-zizn/id1013700516?mt=2">iTunes</a></b> и <b><a href="https://overcast.fm/itunes1013700516">Оvercast</a></b>.</p>
              </div>
            </div>
          </div>
        </div>
      );
      
    } else {

      return (

        <div className="master-container">
          <div className="container-fluid">
            <h1><NavLink to="/" className="reset-link-style">Технологии и жизнь</NavLink></h1>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="spacer-xs spacer-sm"></div>
                <div className="spacer-xs spacer-sm"></div>
                <p>Интернет радио-программа (или <b>подкаст</b>) про современные технологии, их влияние на нашу жизнь, и прочие мысли.</p>
                <p>
                  <a className="link-ext" href="https://t.me/techlifepodcast" rel="external">&nbsp;t.me/techlifepodcast&nbsp;</a><br />
                  <a className="link-ext" href="mailto:talk@techlifepodcast.com" rel="external">&nbsp;talk@techlifepodcast.com&nbsp;</a>
                </p>
                <div className="spacer-lg"></div>
              </div>

              <div className="col-lg-5 col-md-6">
                <p><b>Ведущие:</b><br/> <NavLink to="/about">Дмитрий Здоров и Василий Мязин.</NavLink></p>
              </div>

              <div className="col-lg-3 col-md-12">
                <p>Найти в <b><a href="https://itunes.apple.com/podcast/tehnologii-i-zizn/id1013700516?mt=2">iTunes</a></b> и <b><a href="https://overcast.fm/itunes1013700516">Оvercast</a></b>.</p>
                <div className="spacer-md"></div>
              </div>
            </div>
          </div>
        </div>
      )
    }

  }

}

export default withRouter(Header);
