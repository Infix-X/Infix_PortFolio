// script.js
var youtube_channel = document.getElementById('button1');

function gotoYoutubeChannel() {
    youtube_channel.addEventListener('click', function() {
        window.location.href = 'https://www.youtube.com/channel/UC7B8WMFC5TQRukH35YVPdZQ';
    });
}

gotoYoutubeChannel();
