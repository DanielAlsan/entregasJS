//inicializa variable
const iva = 0.16;
let ivaTotal = 0;
let subTotal = 0;
let total = 0;
let arregloServiciosActualizado = [];
//bandera para mostrar login por pompt
let BANDERA_POMPT = 0;
if (BANDERA_POMPT != 0) {
  //alerta login
  alert("Inicio de sesión | usuario: Admin | password: 12345");
  //Ingresar datos en funcion login
  function login(user, password) {
    console.log(user);
    console.log(password);
    if (user === null || password === null || user === "" || password === "") {
      alert("Usuario o password se encuentran vacios, vuelva a intentarlo");
      alert("Inicio de sesión | usuario: Administrador | password: 12345");
      login(prompt("Ingresa el usuario"), prompt("Ingresa el password"));
    }
    if (user == "Admin" || password === 12345) {
      document.getElementById("nombreUsuario").innerHTML = user;
    } else {
      alert("Usuario o password incorrectos, vuelva a intentarlo");
      alert("Inicio de sesión | usuario: Administrador | password: 12345");
      login(prompt("Ingresa el usuario"), prompt("Ingresa el password"));
    }
  }
  //ejecutar funcion login
  login(prompt("Ingresa el usuario"), prompt("Ingresa el password"));
}
//Por el momento el modo de agregar se vera reflejado en la consola
function agregarNuevoServicio(){
  let servicioNuevo = prompt("Ingresa el nombre del servicio");
  arregloServicios.push(servicioNuevo);
  arregloServiciosActualizado = arregloServicios;
  console.log(arregloServicios);
}
//agregar arreglo en option
const arregloServicios = [
  "Poda_Arbol",
  "Cortina_Arboles",
  "Jacaranda",
  "Olivo",
  "Ficus",
];
//busqueda de elemento del arreglo servicios
console.log(arregloServicios.includes('Jacaranda'));
console.log(arregloServicios.includes('Pino'));
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
//no funcinoal, será funcional  en la siguiuiente entrega de dom
const objetoServicios = [
  { id: 1, servicio: "Poda_Arbol", costo: 2000 },
  { id: 2, servicio: "Cortina_Arboles", costo: 10000 },
  { id: 3, servicio: "Jacaranda", costo: 20000 },
  { id: 4, servicio: "Olivo", costo: 30000 },
  { id: 5, servicio: "Ficus", costo: 40000 },
];
for (const objetoServicio of objetoServicios) {
  console.log(
    objetoServicio.id +
      "|" +
      objetoServicio.servicio +
      "|" +
      objetoServicio.costo
  );
}