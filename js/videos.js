var controls =
[
    'play-large', // The large play button in the center
   // 'restart', // Restart playback
   'rewind', // Rewind by the seek time (default 10 seconds)
    'play', // Play/pause playback
    'fast-forward', // Fast forward by the seek time (default 10 seconds)
    'progress', // The progress bar and scrubber for playback and buffering
    'current-time', // The current time of playback
    'duration', // The full duration of the media
    'mute', // Toggle mute
    'volume', // Volume control
    'captions', // Toggle captions
    'settings', // Settings menu
    'pip', // Picture-in-picture (currently Safari only)
    'airplay', // Airplay (currently Safari only)
    // 'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
    'fullscreen' // Toggle fullscreen
];



const playerFirst = new Plyr('.vid1',{controls});
const playerButtons = document.querySelectorAll('.plyr__control--overlaid');


playerButtons.forEach((btn)=>{
    btn.style.display = 'none';
});

if (window.innerWidth < 600) {
    playerButtons.forEach((btn)=>{
        btn.style.display = 'block';
    });
}