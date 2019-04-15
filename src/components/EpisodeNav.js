import React from "react";
import { NavLink } from "react-router-dom";

export class EpisodeNav extends React.Component {

  generateEpisodeLink(dir) {
    let episodeToGoTo = parseFloat(this.props.selectedEpisodeNum);

    dir = parseFloat(dir);
    episodeToGoTo += dir;

    return '' + episodeToGoTo;
  }

  render() {

    return (
      <div className="container">
        <div className="row m-t-2">
          <div className="col-sm-4">
            <NavLink to={this.generateEpisodeLink(-1)}>{this.props.prevEpisodeItem.title}</NavLink>
          </div>
          <div className="col-sm-4 offset-sm-2">
            <NavLink to={this.generateEpisodeLink(+1)}>{this.props.nextEpisodeItem.title}</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default EpisodeNav;
