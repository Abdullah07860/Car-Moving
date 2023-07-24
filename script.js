
// var audio=document.createElement('audio');
// audio.setAttribute('src','sound.mp3');
// audio.loop=true;
// allow="autoplay";
// audio.play();

function playSound () {
	 let audio = new Audio('sound.mp3');
     audio.loop=true;
	audio.play();
}
setTimeout(() => {
    playSound();
}, 1000);
setInterval(() => {
    playSound();
}, 3000);

// function playMySong(url)
// {
//     var audio=document.createElement('audio');
//     audio.style.display="none";
//     audio.src=url;
//     audio.autoplay=true;
//     audio.play=function()
//     {
//         playMySong('sound.mp3');
//     };
//     document.body.appendChild(audio);
// }

// playMySong('sound.mp3');
