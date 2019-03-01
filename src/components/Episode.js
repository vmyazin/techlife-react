import React from "react";
import EpisodeDetailsInline from "./EpisodeDetailsInline";

export class Episode extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      activeEpisode: null
    };
  }

  render() {
    const { match } = this.props;

    console.log(this.props);

    return (
      <div className="App">
        <p>№{match.params.id}</p>
      </div>
    );
  }
}

export default Episode;
