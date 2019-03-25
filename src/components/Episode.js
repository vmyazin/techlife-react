import React from "react";
import { Helmet } from 'react-helmet';
import EpisodeDetails from "./EpisodeDetails";

export class Episode extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedEpisode: null
    };
  }

  componentDidMount() {
    // if navigated from home page, jump to top of episode details (below header),
    // otherwise, show normally from at top of header
    const epDetEl = document.getElementById('episode-details');
    if (epDetEl !== null) epDetEl.scrollIntoView( true );
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
        <div id="episode-details" className="container">
          <Helmet>
            <title>Технологии и жизнь №{selectedItem.episodeNum}: {selectedItem.title}</title>
            <meta name="description" content={selectedItem['itunes:subtitle']} />
            <meta property="og:title" content={"Технологии и жизнь №" + selectedItem.episodeNum + ": " + selectedItem.title} />
            <meta property="og:description" content={selectedItem['itunes:subtitle']} />
            <meta property="og:image" content="/images/techlife-artwork-1200-2019.png" />
          </Helmet>
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
