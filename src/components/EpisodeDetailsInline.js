import React from "react";

export class EpisodeDetailsInline extends React.Component {

  buildLinkHref() {
    return '/episodes/'+this.props.itemData.episodeNum;
  }

  render() {

    let item = this.props.itemData || {};
    
    return (
      <div className="selected-box">
        <h3><span className="episode-num">№{item.episodeNum}</span> <a href={this.buildLinkHref()}>{item.title}</a> <span className="small-caps date">{item.pubDateConverted}</span></h3>
        <section className="episode-desc">
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
