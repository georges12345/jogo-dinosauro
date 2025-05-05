const dino = document.getElementByld("dino");
const obstaculo = document.getElementByld("obstaculo");
let isJumping = false;
const acceleration = 10;
const interval = 30;
const gameAreaWidth = document.getElementById("gameArea").offsetWidth;
function jump() {
    if (isJumping) return;
    isJumping = true;
    dino.style.animation = "jump 0.5s ease-out";
    setTimeout(() => {
        dino.style.animation ="";
        isJumping = false;
    }, 500);
}
                           