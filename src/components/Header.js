import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (

    <div className="master-container">
      <div className="container-fluid">
        <h1>Технологии и жизнь</h1>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="spacer-xs spacer-sm"></div>
            <div className="spacer-xs spacer-sm"></div>
            <Navigation />
            <p>Интернет радио-программа (нынче называют <b>подкаст</b>) про современные технологии, их влияние на нашу жизнь, и прочие мысли.</p>
            <div className="spacer-md"></div>
            <div className="spacer-lg"></div>
            <div className="spacer-lg"></div>
            <p>
              <a className="link-ext" href="https://t.me/techlifepodcast" rel="external">&nbsp;t.me/techlifepodcast&nbsp;</a><br/>
              <a className="link-ext" href="mailto:talk@techlifepodcast.com" rel="external">&nbsp;talk@techlifepodcast.com&nbsp;</a>
            </p>
          </div>

          <div className="col-lg-5 col-md-6">
            <p><b>Ведущие:</b><br/> Дмитрий Здоров и Василий Мязин.</p>
          </div>

          <div className="col-lg-3 col-md-12">
            <p>Слушать прямо тут.<br/>
              Найти в <b><a href="https://itunes.apple.com/podcast/tehnologii-i-zizn/id1013700516?mt=2">iTunes</a></b> и <b><a href="https://overcast.fm/itunes1013700516">Оvercast</a></b>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
