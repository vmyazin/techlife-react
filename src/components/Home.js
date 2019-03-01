import React from "react";
import EpisodeDetailsInline from "./EpisodeDetailsInline";

export class Home extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      showComponent: false,
      activeEpisode: 29
    };
  }

  
  itemSelected (itemObject) {
    this.setState({
      showComponent: true,
      activeEpisode: itemObject
    });

    console.log('aaa', this.state.activeEpisode);
  }

  render() {

    const { isLoaded, items } = this.props.appState;
  
    if (!isLoaded) {
      return <div>Loading...</div>

    } else {

      let episodes = items;

      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">

              <h2>Наши выпуски</h2>

              <EpisodeDetailsInline itemData={this.state.activeEpisode} />

              <ul className="episode-list">
                {episodes.map(item => (
                  <li key="{index}"><span className='episode-num'>№{item.episodeNum}</span> <a href="javascript:void(0)" onClick={() => this.itemSelected(item)}>{item.title}</a>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      );
    }

  }
}

export default Home;
