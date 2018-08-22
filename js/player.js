$(document).ready(function() {
  var video_screen = document.getElementById('myVideo');
  var play_pause_status = "play";

  function play_pause()
  {
    if (play_pause_status == "pause")
    {
      video_screen.play();
      play_pause_status = "play";
    }
    else
    {
      video_screen.pause();
      play_pause_status = "pause";
    }
  }
});