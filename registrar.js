var estudiantes=[]
console.log(estudiantes)

function agregarRegistro(){

    var nombre=document.getElementById('txt_user').value
    var pass=document.getElementById('txt_password').value
    var edad=document.getElementById('txt_edad').value

    var Persona= {"User":nombre, "Pass":pass, "Edad":edad}
    
    estudiantes.push(Persona)
    console.log(Persona)

    document.getElementById('txt_user').value=""
    document.getElementById('txt_password').value=""
    document.getElementById('txt_edad').value="" 
}

function login (){
    location.href="login.html"
}

function registrar (){
    location.href="registro.html"
}