const iva = 0.16;
let ivaTotal = 0;
let subTotal = 0;
let total = 0;
function verison(){
    return "V 1.0.0.0";
}
//Generar fecha actual
const fecha = new Date();
const año = fecha.getFullYear();
const hoy = fecha.getDate();
const mesActual = fecha.getMonth() + 1; 
const nombreMeses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
console.log(nombreMeses);
function fechaCompleta(){
    let inputMes = "";
    inputMes = nombreMeses[mesActual-1];
    return "Ciudad de México a "+hoy+" de "+inputMes+" de "+año;
}
//Se imprime fecha en label
document.getElementById("fecha").innerHTML = fechaCompleta();
//Fin fecha actual
//Leyenda nota
function leyendaNota(){
    return "Nota: Al ser aceptado este presupuesto se requiere del 60% del anticipo, el 40% restante a la entrega de dichos trabajos";
}

document.getElementById("nota").innerHTML = leyendaNota();
const objetoServicios = [
  { id: 1, servicio: "Poda_Arbol", costo: 2000 },
  { id: 2, servicio: "Cortina_Arboles", costo: 10000 },
  { id: 3, servicio: "Jacaranda", costo: 20000 },
  { id: 4, servicio: "Olivo", costo: 30000 },
  { id: 5, servicio: "Ficus", costo: 40000 },
];

//Funciones para realizar calculo
function calculaTotalIva(costo, iva, cantidad) {
    subTotal = costo * iva;
    ivaTotal = parseFloat(costo) + parseFloat(subTotal);
    total = parseFloat(ivaTotal) * parseFloat(cantidad);
    return parseFloat(ivaTotal) * parseFloat(cantidad);
  }
  function caluclaTotalSinIva(costo, cantidad) {
    total = parseFloat(costo) * parseFloat(cantidad);
    return total;
  }
  //Crea total de cotización al dar click en boton
  function generaTotal() {
    //Agrega valores del lavel
    let cantidad = document.getElementById("cantidad").value;
    let costo = document.getElementById("costo").value;
    let tipoServicio = document.getElementById("servicio").value;
    console.log(tipoServicio);
    //let consulta = prompt("incluye iva, ingresar si o no");
    let consulta = false;
    //Valida si cantidad y costo estan en 0 o nulo
    if (tipoServicio == "Seleccionar opcion") {
      alert(
        "Por favor de seleccionar servicio y/o arbol, para poder generar la operación"
      );
    }else{
      consulta = confirm("Desea que los costos tengan iva")
    }
    if (cantidad == 0 || costo == 0) {
      alert("Por favor de llenar los recuadros, para poder generar la operación");
    } else if (consulta === true) {
      document.getElementById("totalPagar").innerHTML = calculaTotalIva(
        costo,
        iva,
        cantidad
      );
    } else {
      document.getElementById("totalPagar").innerHTML = caluclaTotalSinIva(
        costo,
        cantidad
      );
    }
    
  }
  function Ejecutar(){
    let descripcion = document.getElementById("descripcion").value;
    let unidad = document.getElementById("unidad").value;
    let cantidad = document.getElementById("cantidad").value;
    let costo = document.getElementById("costo").value;
    if(descripcion === "" ||unidad==="" || cantidad ===0 || costo ===0){
      alert("Por favor de llenar todos los elementos para poder generar una cotización")
    }else{
      document.getElementById("descripcionImp").innerHTML = descripcion;
      document.getElementById("unidadImp").innerHTML = unidad;
      document.getElementById("cantidadImp").innerHTML = cantidad;
      document.getElementById("costoImp").innerHTML = costo;
      document.getElementById("total").innerHTML =caluclaTotalSinIva(costo,cantidad);
    }
  }