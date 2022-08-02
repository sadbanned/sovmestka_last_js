  let tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  let firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


  let player;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
      height: '360',
      width: '640',
      videoId: 'U0PV9w68DB8'
    });
  }

  function onYouTubePlayerAPIReady(){
    player = new YT.Player('ytplayer', {
      height: '360',
      width: '640',
      videoId: 'Vuav6MXQu_w'
    });
  }
