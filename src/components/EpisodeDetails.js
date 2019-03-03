import React from "react";
import SoundPlayer from "./SoundPlayer";

export class EpisodeDetails extends React.Component {

  render() {

    let item = this.props.selectedItem || {};

    return (

      <div>
        <h3><span className="small-caps date">{item.pubDateConverted}</span></h3>
        <h2>№{item.episodeNum} {item.title}</h2>
        <p className="m-b-2"><a href={item.enclosure[0].$.url}><span className="mask-link-style"><img src="/images/icon-download.svg" alt="Download" /> </span>Скачать</a></p>
        <SoundPlayer audioUrl={item.enclosure[0].$.url} />

        <section className="episode-desc">
          <div dangerouslySetInnerHTML={{__html: item.description}}></div>
        </section>

      </div>
    )
  }
}

export default EpisodeDetails;
