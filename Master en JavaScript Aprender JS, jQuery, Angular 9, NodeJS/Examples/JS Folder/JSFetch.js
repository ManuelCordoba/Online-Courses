'use strict'
//Fetch (ajax) y peticiones a servicios / API REST
var usuarios =[];
fetch("https://reqres.in/api/users")
.then(data => data.json())
.then(users =>{
usuarios = users.data;
var list = document.querySelector("#list");
for (var c in usuarios) {
   var element = document.createElement("li");
   element.append(usuarios[c].first_name);
   list.append(element);
}
console.log(usuarios);
});

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