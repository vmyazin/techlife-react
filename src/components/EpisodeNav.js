import React from "react";
import { NavLink } from "react-router-dom";

export class EpisodeNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedEpisodeNum: null,
      prevEpisodeNum: null,
      nextEpisodeNum: null,
      episodesLength: this.props.episodes.length
    };
  }

  updateEpisodeNav (num) {
    const episodeLength = this.state.episodesLength;

    this.setState({
      selectedEpisodeNum: num,
      prevEpisodeNum: num === 1 ? 1 : num - 1,
      nextEpisodeNum: num === episodeLength ? episodeLength : num + 1 
    });
  }

  componentDidMount() {
    let prev = parseFloat(this.props.selectedEpisodeNum) - 1,
        next = parseFloat(this.props.selectedEpisodeNum) + 1;

    this.setState({
      prevEpisodeNum: prev < 1 ? 1 : prev - 1,
      nextEpisodeNum: next > this.state.episodesLength ? this.state.episodesLength : next + 1,
      selectedEpisodeNum: this.props.selectedEpisodeNum
    });

    if (this.props.episodes.length !== null) {
      let episodesLength = this.props.episodes.length;
    }
  }

  render() {

    console.log('next ' + this.state.nextEpisodeNum);
    console.log('epiLen: ' + this.state.episodesLength);

    let hideClass = this.state.nextEpisodeNum + 1 === this.state.episodesLength ? 'hide' : '';
    console.log(hideClass);

    return (
      <div className="episode-nav row">
        <div className="col-sm-6 m-t-2 text-right">
          <NavLink 
             to={"/episodes/" + this.state.prevEpisodeNum}
             onClick={() => this.updateEpisodeNav(this.state.prevEpisodeNum)}>&#8592; №{this.state.prevEpisodeNum}
          </NavLink>
        </div>
        <div className={"col-sm-6 m-t-2 " + hideClass}>
          <NavLink
            to={"/episodes/" + this.state.nextEpisodeNum} 
            onClick={() => this.updateEpisodeNav(this.state.nextEpisodeNum)}> №{this.state.nextEpisodeNum} &#8594;
           </NavLink>
        </div>
      </div>
    )
  }
}

export default EpisodeNav;
