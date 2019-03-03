import React from "react";

export class EpisodeDetailsInline extends React.Component {

  render() {

    // console.log(this.props.appState);
    // const { items } = this.props.appState;

    let item = this.props.itemData || {};

    console.log(item);
    
    return (
      <div className="selected-box">
        <h3><span className="episode-num">№{item.episodeNum}</span> <a href="./{item.episodeNum}" data-navigo>{item.title}</a> <span className="small-caps date">{item.pubDateConverted}</span></h3>
        <section class="episode-desc">
          <div dangerouslySetInnerHTML={{__html: item.description}}></div>
        </section>
        <div className="player">
          <p id="play" className="btn-play">Play</p>
        </div>
      </div>
    )
    
  }
}

export default EpisodeDetailsInline;
