import React from "react";

const Multiply = () => {
  return 'test';
}

export class Home extends React.Component {

  render() {

    const { isLoaded, items } = this.props.appState;
  
    console.log(items);

    if (!isLoaded) {
      return <div>Loading...</div>

    } else {

      let episodes = items.rss.channel[0].item;
      let episodes2 = episodes.map(episode => {
        const episodeNumber = episode.title[0].split(":")[0];
        episode.episodeNum = episodeNumber.replace("#",""); // add clean episode number
        episode.title = episode.title[0].replace(episodeNumber + ": ", ""); // add clean episode title
        // episode.pubDateConverted = moment(episode.pubDate[0]).locale('ru').format("LL"); // add neat episode date in Russian
        return episode;
      });

      console.log(episodes2);

      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>Наши выпуски</h2>
              <ul className="episode-list" id="episode-list">
                {episodes.map(item => (
                  <li><span class='episode-num'>№{item.episodeNum}</span> <a href="#">{item.title}</a></li>
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
