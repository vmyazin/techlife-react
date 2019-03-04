import React from "react";
import EpisodeDetails from "./EpisodeDetails";
import EpisodeNav from "./EpisodeNav";

export class Episode extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedEpisode: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
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
              <EpisodeDetails selectedItem={selectedItem} />
              <EpisodeNav selectedEpisodeNum={selectedItem.episodeNum} />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Episode;
