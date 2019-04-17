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
      <div className="episode-nav">
        <div className="row m-t-3">
          <div className="col-6 col-md-4">
            <NavLink to={this.generateEpisodeLink(-1)}>
              <img class="arrow prev" src="/images/big-thin-angle.svg"/>
              <b>№{this.props.prevEpisodeItem.episodeNum}</b><br/>
              {this.props.prevEpisodeItem.title}
            </NavLink> 
          </div>
          <div className="col-6 offset-md-4 col-md-4">
            <NavLink to={this.generateEpisodeLink(+1)}>
              <b>№{this.props.nextEpisodeItem.episodeNum}</b><br/>
              {this.props.nextEpisodeItem.title}
              <img class="arrow next" src="/images/big-thin-angle.svg"/>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default EpisodeNav;
