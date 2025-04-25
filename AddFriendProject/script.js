let istatus = document.querySelector("h5");
//var removeFriend= document.querySelector("#remove")

var addFriend = document.querySelector("#add")

var frnd=0;
addFriend.addEventListener("click",function(){
    if (frnd==0) {
        istatus.innerHTML="Friends";
        istatus.style.color="green";
        alert("hey you make new friend");
        frnd=1;
    }

    else{
        istatus.innerHTML="Stranger";
        istatus.style.color="red";
        frnd=0;
    }
})

// removeFriend.addEventListener("click",function(){
//     istatus.innerHTML="Dushman";
//     istatus.style.color="red";

// })

