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
      console.log(items.rss.channel[0].description);
      let episodes = items.rss.channel[0].item;
      return (
        <div className="App">
          <p>Выпуски</p>
          <div>
            <ul>
              {episodes.map(item => (
                <li>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

  }
}

export default Home;
