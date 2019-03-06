import React from "react";
import EpisodeDetailsInline from "./EpisodeDetailsInline";

export class Home extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      showComponent: false,
      latestEpisodeNum: null,
      selectedEpisodeNum: null,
      selectedItem: null
    };
  }

  itemSelected (itemObject) {
    // get item with the given episode number
    var selectedItem = this.props.appState.items.find(obj => {
      return obj.episodeNum === itemObject;
    });

    this.setState({
      showComponent: true,
      selectedEpisodeNum: itemObject,
      selectedItem: selectedItem
    });
  }

  render() {

    const { isLoaded, items } = this.props.appState;
  
    if (!isLoaded) {

      return <div>Loading...</div>

    } else {

      const episodes = items;

      let episodeDetails = null;
      
      
      
      // In case the episode are loaded and no selected item it selected,
      // We choose the last episode -- episodes[episodes.length - 1];
      // You can change it to first -- episodes[0];
      let selectedItem;
      if (episodes && episodes.length > 0) {
        if(!this.state.selectedItem) {
          // Here is where we choose (line below)
          selectedItem = episodes[episodes.length - 1];
        } else {
          selectedItem = this.state.selectedItem;
        } 
      }
      
      // create episode instance
      if ((selectedItem) && (typeof selectedItem === 'object')) {
        episodeDetails = (<EpisodeDetailsInline itemData={selectedItem} />);
      }
           
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">

              <h2>Наши выпуски</h2>

              <ul className="episode-list">
                {episodes.map(item => (
                  <li key="{index}" className={(this.state.selectedEpisodeNum === item.episodeNum) ? 'selected' : ''}>
                    <div className="num-and-title">
                      <span className="episode-num">№{item.episodeNum}</span> <span className="pseudo-link" onClick={() => this.itemSelected(item.episodeNum)}>{item.title}</span>
                    </div>
                    {(episodeDetails && selectedItem.episodeNum === item.episodeNum) ? episodeDetails : ''}                   
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
