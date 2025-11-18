
function consultarAlaApi() {

let urlConsulta = "https://opensheet.elk.sh/13C3PithGPmHtzHvZcIL_w4-n0CgFkZ_zgRyhUoc-g40/Hoja%201";


  let mensajeResultado = document.getElementById("mensajeResultado");

  mensajeResultado.innerHTML = "Cargando...";

  fetch(urlConsulta)
    .then(response => response.json())
    .then(datos => {
      console.log(datos); 
      mensajeResultado.innerHTML = "En la consola encontrarás el resultado obtenido";
    })
    .catch(error => {
      mensajeResultado.innerHTML = "Error al cargar los datos 😢";
      console.error(error);
    });
}
