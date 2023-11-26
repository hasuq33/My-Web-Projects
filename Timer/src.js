const playButton = document.getElementsByClassName("play")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const resetButton = document.getElementsByClassName("reset")[0];

const second = document.getElementsByClassName("sec")[0];
const centiSecond = document.getElementsByClassName("msec")[0];
const minute = document.getElementsByClassName("minute")[0];

let isPlay = false;
let secCounter = 0;
let sentiCounter = 0;
let minCounter = 0;
let sec;
let sentiSec;
let min;

const toggleButton = () => {
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}

const play = () => {
    if (!isPlay) {
        playButton.innerHTML = 'Pause';
        sec = setInterval(() => {
            if (secCounter === 60) {
                secCounter = 0;
                ++minCounter;
                minute.innerText = `${minCounter} :`;
            }
            second.innerText = `${++secCounter} :`;
        }, 1000);

        sentiSec = setInterval(() => {
            if (sentiCounter === 100) {
                sentiCounter = 0;
            }
            centiSecond.innerText = `${++sentiCounter}`;
        }, 10);
        isPlay = true;
    } else {
        playButton.innerHTML = 'Play';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(sentiSec);
        isPlay = false;
    }
    toggleButton();
}

const reset = () => {
    clearInterval(sec);
    clearInterval(sentiSec);
    isPlay = false;
    playButton.innerHTML = 'Play';
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    second.innerHTML = '0 :';
    centiSecond.innerHTML = '0';
    minute.innerHTML = '0 :';
    secCounter = 0;
    sentiCounter = 0;
    minCounter = 0;
}

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);