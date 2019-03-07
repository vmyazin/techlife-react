import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import SoundPlayer from "./SoundPlayer";

export class EpisodeDetails extends React.Component {

  render() {

    let item = this.props.selectedItem || {};

    return (

      <div>
        <p>&lt; <NavLink to="/">на главную</NavLink></p>
        <h3><span className="small-caps date">{item.pubDateConverted}</span></h3>
        <h2>№{item.episodeNum} {item.title}</h2>
        <h4>{item['itunes:subtitle']}</h4>
        <SoundPlayer audioUrl={item.enclosure[0].$.url} />
        <p className="m-b-2"><a href={item.enclosure[0].$.url} download={item.enclosure[0].$.url}><span className="mask-link-style"><img src="/images/icon-download.svg" alt="Download" /> </span>Скачать MP3 файл</a></p>

        <section className="episode-desc">
          <div dangerouslySetInnerHTML={{__html: item.description}}></div>
        </section>

      </div>
    )
  }
}

export default EpisodeDetails;
