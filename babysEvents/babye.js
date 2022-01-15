function showVideo() {
    let video = document.querySelector("#eventVideo");
    video.classList.remove('video_hidden');
}

function changeBoxs() {
    let writBoxOne = document.querySelector("#writBoxOne");
    let writBoxTwo = document.querySelector("#writBoxTwo");

    writBoxOne.classList.add('writ_box-hidden');
    writBoxOne.classList.remove('writ_box');

    writBoxTwo.classList.remove('writ_box-two-hidden');
}

let countDowenDate = new Date("Jan 15, 2022 22:00:00").getTime();

let counter = setInterval(()=> {
    let dateNow = new Date().getTime();

    let dateDiff =  countDowenDate - dateNow;

    let day = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000));


    document.querySelector(".day").innerHTML = day < 10 ? `0${day}`: day;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}`: hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`: minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
        window.document.title = "Congratulations"
        showVideo();
        changeBoxs(); 
        document.querySelector('.time_box').textContent= '15 01 2022'; 
    }
}, 1000);