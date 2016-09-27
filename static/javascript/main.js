var thumbsUp = 0;
var thumbsDown = 0;

function increment() {
    thumbsUp ++;
    document.getElementById("thumbsUp").innerHTML = thumbsUp;
}

function decrease() {
    thumbsDown ++;
    document.getElementById("thumbsDown").innerHTML = thumbsDown;
}
