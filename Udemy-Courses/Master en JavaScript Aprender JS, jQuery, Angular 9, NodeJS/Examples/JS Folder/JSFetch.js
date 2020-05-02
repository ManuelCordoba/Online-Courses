'use strict'
//Fetch (ajax) y peticiones a servicios / API REST
var usuarios =[];
var index =3;
getUsuarios()
.then(data => data.json())
.then(users =>{
usuarios = users.data;
listarUsuarios(usuarios);
mostrarUsuario();
});


function getUsuario(){
localStorage.setItem("usuario",index);
return fetch("https://reqres.in/api/users/"+index);
}

function getUsuarios(){
return fetch("https://reqres.in/api/users");
}

function mostrarUsuario(){
   
   getUsuario()
   .then(data => data.json())
   .then( user =>{
var infoU = document.querySelector("#usu");
var nomU = document.querySelector("#nom");
var img = document.querySelector("#foto");
nomU.innerHTML = (user.data.first_name);
infoU.innerHTML = (JSON.stringify(user.data));
img.src = user.data.avatar;

   })

}
var atras = document.querySelector("#atras");
atras.addEventListener("click",function(){
index =parseInt(localStorage.getItem("usuario"));
index -=1
localStorage.setItem("usuario",index);
mostrarUsuario();

});

var adelanta = document.querySelector("#adelante");
adelanta.addEventListener("click",function(){
index =parseInt(localStorage.getItem("usuario"));
index +=1
localStorage.setItem("usuario",index);
mostrarUsuario();

});

function listarUsuarios(usuarios){
   var divUsuarios = document.querySelector("#usuarios");
   var list = document.createElement("lu");
   document.querySelector("#loading").style.display = 'none';
   for (var c in usuarios) {
      var element = document.createElement("li");
      element.append(usuarios[c].first_name);
      list.append(element);
   }
   divUsuarios.append(list);
   console.log(usuarios);

}
// fetch("https://reqres.in/api/users")
// .then(function(data){
//  return data.json()
// })
// .then(users =>{
// usuarios = users.data;
// var list = document.querySelector("#list");
// for (var c in usuarios) {
//    var element = document.createElement("li");
//    element.append(usuarios[c].first_name);
//    list.append(element);
// }
// console.log(usuarios);
// });