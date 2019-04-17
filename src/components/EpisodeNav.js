import React from "react";
import { NavLink } from "react-router-dom";

export class EpisodeNav extends React.Component {

  generateEpisodeLink(direction) {
    // parseFloat makes variables into number type
    let episodeToGoTo = parseFloat(this.props.selectedEpisodeNum),
        totalEpisodes = parseFloat(this.props.total);

    direction = parseFloat(direction);
    episodeToGoTo += direction;

    if (episodeToGoTo > 0 && totalEpisodes >= episodeToGoTo) {
      return '' + episodeToGoTo;      
    } else {
      // this class will hide the nav section
      return 'd-none';      
    }
  }

  render() {

    return (
      <div className="episode-nav">
        <div className="row m-t-3">
          <div className="col-6 col-md-4">
            <NavLink to={this.generateEpisodeLink(-1)} className={this.generateEpisodeLink(-1)}>
              <img className="arrow prev" src="/images/big-thin-angle.svg"/>
              <b>№{this.props.prevEpisodeItem.episodeNum}</b><br/>
              {this.props.prevEpisodeItem.title}
            </NavLink> 
          </div>
          <div className="col-6 offset-md-4 col-md-4">
            <NavLink to={this.generateEpisodeLink(+1)} className={this.generateEpisodeLink(+1)}>
              <b>№{this.props.nextEpisodeItem.episodeNum}</b><br/>
              {this.props.nextEpisodeItem.title}
              <img className="arrow next" src="/images/big-thin-angle.svg"/>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default EpisodeNav;
