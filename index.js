var hscore, ascore, timergo, time, min, sec, timeset, myVar, onInput;

hscore = 0;
ascore = 0;
timergo = false;
time = 0;
min = 0;
sec = 0;
timeset = false;
onInput = false;

document.addEventListener('keyup', (e) => {
    if (!onInput) {
        if (e.key === "q") {
        hscore = hscore + 1;
        document.getElementById("lscore").innerHTML = hscore;
        }
        else if (e.key === "a") {
            hscore = hscore - 1;
            if (hscore < 0) {
                hscore = 0;
            }
            document.getElementById("lscore").innerHTML = hscore;
        }
        else if (e.key === "y") {
            ascore = ascore + 1;
            document.getElementById("rscore").innerHTML = ascore;
        }
        else if (e.key === "h") {
            ascore = ascore - 1;
            if (ascore < 0) {
                ascore = 0;
            }
            document.getElementById("rscore").innerHTML = ascore;
        }
        else if (e.key === "s" && !timergo && timeset) {
            timergo = true;
            clearInterval(myVar)
            myVar = setInterval(myTimer, 1000);
        }
        else if (e.key === "p" && timergo) {
            clearInterval(myVar);
            timergo = false;
        }
    }
});

function stopListener() {
    onInput = true;
}

function resumeListener() {
    onInput  = false;
}

function setTime(event){
    if (event.key === "Enter") {
        time = Math.floor(document.getElementById("timeInput").value);
        min = Math.floor(time/60);
        sec = time % 60
        if (min < 10 && sec > 10) {
            document.getElementById("timeShow").innerHTML = "0" + min + ":" + sec;
        }
        else if (min < 10 && sec < 10) {
            document.getElementById("timeShow").innerHTML = "0" + min + ":" + "0" + sec;
        }
        else if (min > 10 && sec < 10) {
            document.getElementById("timeShow").innerHTML = min + ":" + "0" + sec;
        }
        else if (min < 10 && sec == 10) {
            document.getElementById("timeShow").innerHTML = "0" + min + ":" + sec;
        }
        else if (min == 10 && sec == 0) {
            document.getElementById("timeShow").innerHTML = min + ":" + "0" + sec;
        }
        else document.getElementById("timeShow").innerHTML = min + ":" + sec;
        timeset = true;
    }
}

function myTimer() {
    if (min == 0 && sec == 0) {
        clearInterval(myVar);
        timergo = false;
        timeset = false;
        document.getElementById("timeShow").innerHTML = "00:00";
    }
    else if (sec == 0) {
        min = min - 1;
        sec = 59;
        if (min < 10) {
            document.getElementById("timeShow").innerHTML = "0" + min + ":" + sec;
        }
        else document.getElementById("timeShow").innerHTML = min + ":" + sec;
    }
    else {
        sec = sec - 1;
        if (min < 10 && sec > 10) {
            document.getElementById("timeShow").innerHTML = "0" + min + ":" + sec;
        }
        else if (min < 10 && sec < 10) {
            document.getElementById("timeShow").innerHTML = "0" + min + ":" + "0" + sec;
        }
        else if (min > 10 && sec < 10) {
            document.getElementById("timeShow").innerHTML = min + ":" + "0" + sec;
        }
        else if (min < 10 && sec == 10) {
            document.getElementById("timeShow").innerHTML = "0" + min + ":" + sec;
        }
        else if (min == 10 && sec == 0) {
            document.getElementById("timeShow").innerHTML = min + ":" + "0" + sec;
        }
        else document.getElementById("timeShow").innerHTML = min + ":" + sec;
    }
}

function switchPosition() {
    var temp = hscore;
    hscore = ascore;
    ascore = temp;
    temp = document.getElementById("leftname").value;
    document.getElementById("leftname").value = document.getElementById("rightname").value;
    document.getElementById("rightname").value = temp;
    document.getElementById("lscore").innerHTML = hscore;
    document.getElementById("rscore").innerHTML = ascore;
}

function clearBoard() {
    hscore = 0;
    ascore = 0;
    document.getElementById("lscore").innerHTML = hscore;
    document.getElementById("rscore").innerHTML = ascore;
    document.getElementById("leftname").value = null;
    document.getElementById("rightname").value = null;
    time = 0;
    min = 0;
    sec = 0;
    clearInterval(myVar);
    timergo = false;
    timeset = false;
    document.getElementById("timeShow").innerHTML = "00:00";
    document.getElementById("timeInput").value = null;
}