const moveblock = document.getElementById('information');

function moveLeft() {
    moveblock.style.transform = "translateX(0)";
    moveblock.style.boxShadow = "15px 0px 24px -7px rgba(26,26,26,1)";
}

function moveRight() {
    moveblock.style.transform = "translateX(100%)";
    moveblock.style.boxShadow = "-15px 0px 24px -7px rgba(26,26,26,1)";
}