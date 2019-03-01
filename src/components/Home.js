import React from "react";

const Multiply = () => {
  return 'test';
}

export class Home extends React.Component {

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
              <ul className="episode-list" id="episode-list">
                {episodes.map(item => (
                  <li key="{item.episodeNum}"><span className='episode-num'>№{item.episodeNum}</span> <a href="#">{item.title}</a></li>
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
