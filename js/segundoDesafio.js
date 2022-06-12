
//Obtiene datos de usuario
let nombre = prompt("Ingrese su nombre:");
alert("Bienvenido "+nombre);
document.getElementById("nombreUsuario").innerHTML=nombre; //imprime nombre en navbar

//Crea total de cotización al dar click en boton
let total = 0; //inicializa variable
function generaTotal(){
    //Agrega valores del lavel
    let cantidad = document.getElementById("cantidad").value;
    let costo = document.getElementById("costo").value;
    let tipoServicio = document.getElementById("servicio").value;
    console.log(tipoServicio);
    //Valida si cantidad y costo estan en 0 o nulo
    if(cantidad == 0 || costo == 0){
        alert("Por favor de llenar los recuadros, para poder generar la operación");
    }else{
        total =  costo * cantidad;
        document.getElementById("totalPagar").innerHTML=total;
    }
    if(tipoServicio == "Seleccionar opcion"){
        alert("Por favor de seleccionar servicio y/o arbol, para poder generar la operación");
    }else{
        total =  costo * cantidad;
        document.getElementById("totalPagar").innerHTML=total;
    }
    
}