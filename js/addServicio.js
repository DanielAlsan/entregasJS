const objetoServicios = [
    { id: "SERV-1", servicio: "Colocación Pasto Natural", costo: 2000 },
    { id: "SERV-2", servicio: "Fertilizantes", costo: 10000 },
    { id: 3, servicio: "Poda Arboles", costo: 20000 },
    { id: 4, servicio: "Olivo", costo: 30000 },
    { id: 5, servicio: "Ficus", costo: 40000 },
  ];
  const objetoArboles = [
    { id: 1, arbol: "Poda_Arbol", costo: 2000 },
    { id: 2, arbol: "Cortina_Arboles", costo: 10000 },
    { id: 3, arbol: "Jacaranda", costo: 20000 },
    { id: 4, arbol: "Olivo", costo: 30000 },
    { id: 5, arbol: "Ficus", costo: 40000 },
  ];
const servJSON = JSON.stringify(objetoServicios);
const arboJSONs = JSON.stringify(objetoArboles);
localStorage.setItem ("Servicios",servJSON);
localStorage.setItem("Arboles", arboJSONs);