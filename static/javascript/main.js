var thumbsUp = 0;
var thumbsDown = 0;

function increment() {
    thumbsUp ++;
    document.getElementById("thumbsUp").innerHTML = thumbsUp;
    calculateBar();
}

function decrease() {
    thumbsDown ++;
    document.getElementById("thumbsDown").innerHTML = thumbsDown;
    calculateBar();
}

function calculateBar() {
    var total = thumbsDown + thumbsUp;
    var percentageThumbsUp = thumbsUp/total*100;
    var percentageThumbsDown = thumbsDown/total*100;

    document.getElementById("likes").style.width = percentageThumbsUp.toString()+"%";
    document.getElementById("dislikes").style.width = percentageThumbsDown.toString()+"%";
}

document.getElementById("feedbackButton").onclick = function () {
    location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeTLYT6V01xSRdFEWfkZ4XRBT2EKI9XQnGdZx0mbHpRNfkhYQ/viewform?c=0&w=1";
}
