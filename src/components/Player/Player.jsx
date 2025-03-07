import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const Player = (props) => (
  <AudioPlayer
    autoPlay //Determines whether the audio should autoplay
    src={'./song/'+props.song} //The URL of audio file to be plyed
    onPlay={e => console.log("onPlay")}//Callback functionwhen the audio startsplaying
    
  />
);
export default Player;