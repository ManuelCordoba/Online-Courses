'use strict'
window.addEventListener('load',function(){

    var form = document.querySelector("#formulario");
    var box = document.querySelector(".dashed");
    box.style.display = "none";
    form.addEventListener('submit', function(){
        var nom = document.querySelector("#nombre").value;
        var ape = document.querySelector("#apellido").value;
        var eda = parseInt(document.querySelector("#edad").value);
        if(nom.trim()==null ||nom.trim().length == 0){
            document.querySelector("#nombre").style.background = "red";
            return false;
        }
        else{
            document.querySelector("#nombre").style.background = "white";
        }
        if(ape.trim()==null ||ape.trim().length == 0){
            document.querySelector("#apellido").style.background = "red";
            return false;
        }
        else{
            document.querySelector("#apellido").style.background = "white";
        }
        if(eda ==null ||eda <= 0 || isNaN(eda)){
            document.querySelector("#edad").style.background = "red";
            return false;
        }
        else{
            document.querySelector("#edad").style.background = "white";
        }
        

        box.style.display = "block";
        var nomBox = document.querySelector("#nombreBox span");
        var apeBox = document.querySelector("#apellidoBox span");
        var edaBox = document.querySelector("#edadBox span");
        nomBox.innerHTML = (nom);
        apeBox.innerHTML = ape;
        edaBox.innerHTML = (eda);
    });
});
