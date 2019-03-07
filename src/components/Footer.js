import React from "react";

const Footer = () => {
  const moment = require('moment');

  return (
    <div className="container footer">
      <div className="row">
        <div className="col-lg-12">
          <p className="text-center">Techlife Syndicate. Copyright &copy; 2015-{moment().year()}. <a href="//techlifepodcast.com/podcast-feed.xml">RSS</a></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
