import React from "react";
import EpisodeDetails from "./EpisodeDetailsInline";

export class Episode extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      selectedEpisode: null
    };
  }

  render() {
    const { match } = this.props;
    const { isLoaded, items } = this.props.appState;

    console.log(isLoaded);

    return (
      <div className="App">
        <p>№{match.params.id}</p>
        <EpisodeDetails />
      </div>
    );
  }
}

export default Episode;
