// ---------------- video ----------------------
const video = document.querySelector("#video")
const vidSource = document.querySelector("#vidSource")
const vidPlay = document.querySelector("#vidPlay")
const volumePercent = document.querySelector("#volumePercent")
const timeLine = document.querySelector("#timeLine")
const rangeVid = document.querySelector("#rangeVid")
const videoPlayer = document.querySelector("#videoPlayer")
const rangeVol = document.querySelector("#rangeVol")
const fullScreen =document.querySelector("#fullScreen")  
const vidPrevious = document.querySelector("#vidPrevious")
const vidNext = document.querySelector("#vidNext")
const vidPlayImg = document.querySelector("#vidPlayImg")
// video source change---------------------------
const vidSrc = {
    0: "./assets/media/one.mp4",
    1: "./assets/media/two.mp4",
} 
var videoIndex = 0
video.src=vidSrc[videoIndex]
// next ----------------
vidNext.addEventListener("click", function () {
    videoChange(1)
})
// previous ------------
vidPrevious.addEventListener("click", function () {
    videoChange(-1)
})
function videoChange(a) {
    videoIndex += a
    if (videoIndex<Object.keys(vidSrc).length && videoIndex>=0) {
        video.src=vidSrc[videoIndex]
    } else if (videoIndex<0){
        videoIndex = Object.keys(vidSrc).length-1
        video.src=vidSrc[videoIndex]
    } else {
        videoIndex = 0
        video.src=vidSrc[videoIndex]
    }
    video.pause()
    PlayStopSrcIndex = false
    vidPlayImg.src = PlayStopSrc[0]
}
// current volume --------------------------
volumePercent.innerText=`Volume: ${Math.floor(video.volume*100)}%`
// video max duration------------------------
video.addEventListener("mouseenter",function () {
    rangeVid.max=Math.floor(video.duration)
})
// current video time -------------------------
video.addEventListener("timeupdate", MyFunction)
function MyFunction(){
    let i = 0
    if (Math.floor(video.currentTime)>60) {
        i += 1
    }
    timeLine.innerText=`${video.currentTime>60 ? Math.floor(video.currentTime/60) : 0}:${video.currentTime>60? Math.floor(video.currentTime)-(Math.floor(video.currentTime/60)*60): Math.floor(video.currentTime)} san`;
}
// volume range ------------------------------
rangeVol.addEventListener("input", (e) => {
    video.volume=e.target.value/100
    volumePercent.innerText=`Volume: ${Math.floor(video.volume*100)}%`
  });
// range time ---------------------------------
rangeVid.addEventListener("input", (event) => {
    video.currentTime=event.target.value
    video.play()
  });
// play / stop --------------------------------
const PlayStopSrc = {
    0: "./assets/play.svg",
    1: "./assets/pause.svg",
} 
var PlayStopSrcIndex = false
vidPlayImg.src = PlayStopSrc[0]
vidPlay.addEventListener("click", playPause)
function playPause() {
    if (PlayStopSrcIndex==false) {
        video.play()
        PlayStopSrcIndex = true
        vidPlayImg.src = PlayStopSrc[1]
    } else {
        video.pause()
        PlayStopSrcIndex = false
        vidPlayImg.src = PlayStopSrc[0]
    }
}
// video control hover --------------------------------
video.addEventListener("mouseenter", function () {
    videoControls.style.display="flex"
})
videoPlayer.addEventListener("mouseleave", function () {
    videoControls.style.display="flex"
})
// fullscreen ------------------------------------
fullScreen.addEventListener("click",openFullscreen)
function openFullscreen() {
    video.requestFullscreen();
  }

  