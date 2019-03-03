import React from "react";
import EpisodeDetails from "./EpisodeDetails";

export class Episode extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedEpisode: null
    };
  }

  render() {

    const { match } = this.props;
    const { isLoaded } = this.props.appState;

    var selectedItem = this.props.appState.items.find(obj => {
      return obj.episodeNum === match.params.id;
    });

    if (!isLoaded) {

      return <div>Loading...</div>

    } else {

      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12 m-t-2">
              <EpisodeDetails selectedItem={selectedItem}/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Episode;
