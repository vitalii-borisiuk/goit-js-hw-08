import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

iframePlayer.on('timeupdate', throttle(data => localStorage.setItem('videoplayer-current-time', JSON.stringify(data)), 1000));
const player = JSON.parse(localStorage.getItem('videoplayer-current-time'));
if (player) {
    iframePlayer.setCurrentTime(player.seconds);
}; 
