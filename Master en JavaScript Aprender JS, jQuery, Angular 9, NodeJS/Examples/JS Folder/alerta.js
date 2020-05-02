'use strict'


window.addEventListener("load", () => {
    function intervalo() {
        var h = document.querySelector("#hola");
        h.style.background = "red";
        var timer = setInterval(function () {
            if (h.style.background == "red") {
                h.style.background = "green";
            }
            else {
                h.style.background = "red";
            }

        }, 1000);//1 segundo
        return timer;
    }
    var timer = intervalo();
    var btnStop = document.querySelector("#stop");
    btnStop.addEventListener("click", function () {
        clearInterval(timer);
    });
    var btnStart = document.querySelector("#start");
    btnStart.addEventListener("click", function () {
        timer = intervalo();
    });

});
