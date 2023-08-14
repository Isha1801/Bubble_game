var timer = 30;
var score = 0;
var rn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function Bubble(){
    var clutter = ""

for(var i=0; i<=107; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector("#pbottom").innerHTML = clutter
}

function runTimer(){
    var timerint = setInterval(function(){
        if (timer > 0) {
            timer--;
        document.querySelector("#Timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbottom").textContent = ""
        }
        
    }, 1000)

}

function getNewHit(){
    rn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = rn;
}

document.querySelector("#pbottom").addEventListener("click", function(dets){
    var clickedNum = (Number(dets.target.textContent));
    if (clickedNum === rn) {
        increaseScore();
        Bubble();
        getNewHit();
    }
})

Bubble();
getNewHit();
runTimer();


