const iva = 0.16;
let ivaTotal = 0;
let subTotal = 0;
let total = 0;
function verison(){
    return "V 1.0.0.0";
}

const objetoServicios = [
  { id: "SERV-1", servicio: "Colocación Pasto Natural", costo: 2000 },
  { id: "SERV-2", servicio: "Fertilizantes", costo: 10000 },
  { id: "SERV-3", servicio: "Poda Arboles", costo: 20000 },
  { id: "SERV-4", servicio: "Cargar Costal Arena", costo: 30000 },
];
const objetoArboles = [
  { id: "ARB-1", arbol: "Jacaranda", costo: 2000 },
  { id: "ARB-2", arbol: "Olivo", costo: 10000 },
  { id: "ARB-3", arbol: "Ficus", costo: 20000 },
  { id: "ARB-4", arbol: "Pino", costo: 30000 },
  { id: "ARB-5", arbol: "Acacia", costo: 40000 },
];
const servJSON = JSON.stringify(objetoServicios);
const arboJSONs = JSON.stringify(objetoArboles);
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
   


localStorage.setItem ("Servicios",servJSON);
localStorage.setItem("Arboles", arboJSONs);

const serviciosAdd = JSON.parse(localStorage.getItem("N"));
  console.log(serviciosAdd[1].arbol);

function cargaDatos() {
  cargarServicios();
}

function cargarServicios() {
  //Ordenar de a-z
  arregloServicios.sort();
  agregarOpciones("servicios", arregloServicios);
}
function agregarOpciones(domElement, arregloServicios) {
  var select = document.getElementsByName(domElement)[0];
  for (value in arregloServicios) {
    var option = document.createElement("option");
    option.text = arregloServicios[value];
    select.add(option);
  }
}