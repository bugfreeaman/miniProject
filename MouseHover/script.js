var amel=document.querySelectorAll(".elem");
amel.forEach(function (val) {
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity=1;
    })

    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=0;
    })


    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left=dets.x+"px";
        val.childNodes[3].style.top=dets.y+"py";
    })
});































// var ellem = document.querySelector("#elem1");
// var elmImage = document.querySelector("#elem1 img");

// ellem.addEventListener("mousemove",function(dets){

//     console.log("hello");
//     elmImage.style.left=dets.x+"px";
//     elmImage.style.top=dets.y+"px";

// }) 

// ellem.addEventListener("mouseenter",function(dets){
//     elmImage.style.opacity=1;

// }) 

// ellem.addEventListener("mouseleave",function(dets){

//     //console.log("hello");
//     elmImage.style.opacity=0;
//     // elmImage.style.top=dets.y+"px";

// }) 

