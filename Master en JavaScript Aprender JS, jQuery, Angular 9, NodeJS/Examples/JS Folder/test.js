'use strict'
var form = document.querySelector("#formulario");
form.addEventListener('submit', function () {
    var pelicula= document.querySelector("#nombre").value; 
    localStorage.setItem(pelicula, pelicula);});

    var formE = document.querySelector("#formEliminar");
    formE.addEventListener('submit', function () {
        var pelicu= document.querySelector("#ePeli").value; 
        localStorage.removeItem(pelicu, pelicu);});

    
    for (var i in localStorage) {
        if (typeof localStorage[i] == "string") {
        
var lu = document.querySelector("#show");    
        var show = document.createElement("li");
        console.log("entro");
            console.log(localStorage[i]);
            show.append(localStorage[i]);
            lu.append(show);
    }
}