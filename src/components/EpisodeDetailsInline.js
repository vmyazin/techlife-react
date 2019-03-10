import React from "react";
import { NavLink } from "react-router-dom";
import SoundPlayer from "./SoundPlayer";

export class EpisodeDetailsInline extends React.Component {

  buildLinkHref() {
    return '/episodes/'+this.props.itemData.episodeNum;
  }

  render() {

    let item = this.props.itemData || {};
    
    return (
      <div className="selected-box">
        <h3><span className="episode-num">№{item.episodeNum}</span> <NavLink to={this.buildLinkHref()}>{item.title}</NavLink> <span className="small-caps date">{item.pubDateConverted}</span></h3>
        <h4>{item['itunes:subtitle']}</h4>
        <section className="episode-desc">
          <div dangerouslySetInnerHTML={{__html: item.description}}></div>
        </section>
        <SoundPlayer audioUrl={item.enclosure[0].$.url} />
      </div>
    )
    
  }
}

export default EpisodeDetailsInline;
