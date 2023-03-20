function login(){
    var user, password,RTA

    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasena").value;

    if(user == "prueba" && password == 1234){
        // alert("Iniciaste Sesion!")
        window.location = "index2.html";
    }
    else {
        alert("Datos Incorrectos")
        RTA = prompt ("¿Deseas cambiar tu contraseña?, escribe: 1- SI o Recarga la pagina para intentar de nuevo");
    }if(RTA == 1){
                    newpassword = prompt ("escribe una nueva contraseña");
                    password = newpassword;
                    alert (`Tu nueva contraseña es ${password}`);
            }
}


// function login(){
//     var usuario, password, newpassword, pregunta, RTA;

//     // usuario = document.getElementById("usuario").value;
//     // password = document.getElementById("password").value;
//     usuario = prompt ("Ingrese su usuario:");
//     password = prompt ("Ingrese su contraseña:");
    

//     if(usuario == "prueba" && password == "1234"){
//         alert ("Puedes iniciar sesion");
//         // window.location = "https://www.google.com/";
//         // window. location = "index2.html";
//     } 
//     else if (usuario != "prueba" || password != "1234"){
//         alert ("Tus datos son incorrectos");
//         RTA = prompt ("¿Deseas cambiar tu contraseña?, escribe: 1- SI o Recarga la pagina para intentar de nuevo");
//     }
//     if(RTA == 1){
//             newpassword = prompt ("escribe una nueva contraseña");
//             password = newpassword;
//             alert (`Tu nueva contraseña es ${password}`);
//     }
//     }
// login();