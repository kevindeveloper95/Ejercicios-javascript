const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const checkbox = document.getElementById("checkbox")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener('submit', function(e){
e.preventDefault();
let warning = '';
let redux = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
if (nombre.value.length < 3) {
   warning += 'Nombre es muy corto </br>'
    entrar = true
} 

if (!redux.test(email.value)){
    warning += 'Email incorrecto </br>'
    entrar = true
    
}
if (pass.value.length < 6) {
    warning += 'Contraseña incorrecta </br>'
    entrar = true
}

if (checkbox.checked == false) {
    warning += 'tiene que llenar el checkbox </br>'
    entrar = true
    
}

if (entrar) {
    parrafo.innerHTML = warning;
    
}



})