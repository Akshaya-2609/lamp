const bulb = document.getElementById("bulb");
const thread = document.getElementById("thread");
const handle = document.getElementById("handle");
const message = document.getElementById("message");

let dragging = false;
let startY = 0;
let lightOn = false;

const normalLength = 120;
const maxPull = 70;

handle.addEventListener("pointerdown", function(e) {
    dragging = true;
    startY = e.clientY;
    handle.setPointerCapture(e.pointerId);
});

handle.addEventListener("pointermove", function(e) {

    if (!dragging) return;

    let pull = e.clientY - startY;

    if (pull < 0) pull = 0;
    if (pull > maxPull) pull = maxPull;

    thread.style.height = normalLength + pull + "px";
    handle.style.top = normalLength + pull + "px";
});

handle.addEventListener("pointerup", function() {

    if (!dragging) return;

    dragging = false;

    let position = parseInt(handle.style.top);

    if (position >= normalLength + 50) {

        lightOn = !lightOn;

        if (lightOn) {
            bulb.src =
                "https://www.w3schools.com/js/pic_bulbon.gif";

            message.innerText = "💡 Light ON";
        } else {
            bulb.src =
                "https://www.w3schools.com/js/pic_bulboff.gif";

            message.innerText = "💡 Light OFF";
        }
    }

    thread.style.height = normalLength + "px";
    handle.style.top = normalLength + "px";
});

handle.addEventListener("pointercancel", function() {

    dragging = false;

    thread.style.height = normalLength + "px";
    handle.style.top = normalLength + "px";
});