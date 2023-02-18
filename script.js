const menubtn = document.querySelector(".menubtn")
const overlay = document.querySelector(".overlay")
const navbar = document.querySelector(".navbar")
const body = document.querySelector("body")
const link = document.querySelectorAll(".links a")

menubtn.addEventListener("click", ()=>{
    body.style.overflow = "hidden";
    overlay.style.display = "block";
    navbar.style.left = "0";
})


overlay.addEventListener("click", () => {
    body.style.overflow = "auto";
    navbar.style.left = "-500px";
    overlay.style.display = "none";
})
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", () => {
        body.style.overflow = "auto";
        navbar.style.left = "-500px";
        overlay.style.display = "none";
    })  
}

const iframe = document.querySelector(".iframe")
iframe.addEventListener("click", playPause())

function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
} 