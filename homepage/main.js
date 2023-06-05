let audio;
audio = new Audio("http://www.here-and-now.info/audio/rickastley_artists.mp3");
audio.loop = true;
$("#ok").on("click",function(){
    audio.play();
    $('.title, span,.nav-item,.txt').text("Get Rickrolled");
    $('.cookies').addClass('dn');
});
setTimeout(()=>{
    $('.cookies').removeClass('dn');
},2000);