$(document).ready(function(){

  var episode = function(extname){
    return "/episodes/week2/week2." + extname;
  }
  var episodes = {
    week2: {
      mp3: episode("mp3"),
      oga: episode("ogg"),
      wav: episode("wav")
    }
  }

  $("audio").mediaelementplayer();
});
