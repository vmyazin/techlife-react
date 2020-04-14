import React from 'react';
import Sound from 'react-sound';
 
class SoundPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      audioUrl: null,
      playStatus: Sound.status.STOPPED,
      elapsed: 0,
      total: 0,
      playFromPosition: 0,
      lastPause: 0,
      btnClass: ''
    };
  }

  handleSongPlaying() {
    //
  }

  clickToTogglePlay() {
    if(this.state.playStatus === Sound.status.PLAYING){
      // Pause if playing
      this.setState({
        playStatus: Sound.status.PAUSED,
        btnClass: ""
      })
    } else {
      // Resume if paused
      this.setState({
        playStatus: Sound.status.PLAYING,
        btnClass: "is-playing"
      })
    }
    console.info(this.state.playStatus);
   }

   togglePlayClass() {
     console.log('lll');
   }

  render() {
    let file = this.props.audioUrl;

    return (
      <div className="player">
        <p className={"btn-play " + this.state.btnClass} onClick={this.clickToTogglePlay.bind(this)}>Play</p>

        <Sound
          url={file}
          playStatus={this.state.playStatus}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />
      </div>
    )
  }
}

export default SoundPlayer;
