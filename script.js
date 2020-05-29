
document.getElementById("Registrar").onclick=function clcik2(){
    var varprimernombre=document.getElementById("Nombre").value;
    console.log(`${varprimernombre}`);
     var varsegundonombre=document.getElementById("Nombre2").value;
 console.log(`${varsegundonombre}`);
 var varapellidos=document.getElementById("Apellidos").value;
 console.log (`${varapellidos}`);
 var varCorreo=document.getElementById("Correo").value;
 console.log (`${varCorreo}`);
 var  varcontraseña=document.getElementById("Contraseña").value;
 console.log (`${varcontraseña}`);
 var varconfirmarcontraseña=document.getElementById("confirmar su contraseña").value;
 console.log (`${varconfirmarcontraseña}`);
 var varingresarnumero=document.getElementById("celular").value;
 console.log(`${varingresarnumero}`);
 var  vargenero=document.getElementById("sexomasculino").value;
 console.log($`vargenero`);
 var  vargener=document.getElementById("sexofemenino").value;
 console.log(`vargener`);
 if (Nombre=="lleno") {
    alert("se ha ingresado su nombre");
    return true;
}
else {
    (Nombre=="vacio")
    alert("Falta ingresar su nombre");
    return false;
}
}
if (Nombre2!="lleno") {
    alert("el usuario no tiene segundo nombre");
   
}
else {
    (Nombre2=="lleno")
    console.log("Segundo nombre");
    
}
if (Apellidos=="Apellidos"){
alert("se ha llenado el campo");
console.log("Apellidos");
}

 