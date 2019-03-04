import React from "react";
import { withRouter, NavLink } from "react-router-dom";

export class EpisodeNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedEpisodeNum: null,
      prevEpisodeNum: null,
      nextEpisodeNum: null
    };
  }

  componentDidMount() {
    this.setState({
      prevEpisodeNum: parseFloat(this.state.selectedEpisodeNum - 1),
      nextEpisodeNum: parseFloat(this.state.selectedEpisodeNum + 1)
    });
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 m-t-2">
            <p><NavLink to={"/episodes/" + this.state.prevEpisodeNum}>&#8592; {this.state.prevEpisodeNum}</NavLink> <NavLink to={"/episodes/" + this.state.nextEpisodeNum}> {this.props.nextEpisodeNum} &#8594;</NavLink></p>
          </div>
        </div>
      </div>
    )
  }
}

export default EpisodeNav;
