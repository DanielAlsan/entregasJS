const URL ='/js/data/clients.json'

fetch(URL)
  .then(response => response.json())
  .then(data => mostrarCliente(data))
  .catch(error => console.log(error));

const mostrarCliente = (data)=>{
  console.log(data);
  let body = ''
  for(let i =0;i <data.length;i++){
    body +=`<tr><td>${data[i].id}</td><td>${data[i].nombre}</td><td>${data[i].ubicacion}</td><td><button class="btn btn-light" type="submit">Editar</button><button class="btn btn-light" type="submit">Eliminar</button></td></tr>`
  }
  document.getElementById('data').innerHTML=body
  document.getElementById('datoActual').innerHTML=data.length+1
}