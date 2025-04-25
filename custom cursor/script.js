var moving= document.querySelector("#main")
var carsr= document.querySelector(".cursur")

moving.addEventListener("mousemove", function(dets) {
    carsr.style.left=dets.x+"px";
    carsr.style.top=dets.y+"px";
});