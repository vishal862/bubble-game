var clutter = "";
var timer = 60;
var hitrn=0;
var score=0;



function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}

function hitScore(){
    hitrn = Math.floor(Math.random()*10)
    console.log(hitrn)
    document.querySelector("#hitval").textContent =hitrn; 
}

function setTimer(){
   var timerint=setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timer").textContent = timer;
    }
    else{
        clearInterval(timerint);
    }
        
    },1000);
    
}

function makeBubble(){
    for(var i=0 ; i<=60 ; i++){
        var number = Math.floor(Math.random()*10)
        clutter += `<div class="circle"><h5>${number}</h5></div>`
    }
    
    document.querySelector("#pbottom").innerHTML = clutter;
}

document.querySelector("#pbottom").addEventListener("click",function(details){
    var clickedval = Number(details.target.textContent);
    if(clickedval===hitrn){
        increaseScore();
        makeBubble();
        hitScore();
    }
})

makeBubble();
setTimer();
hitScore();
increaseScore();

