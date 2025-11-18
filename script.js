
function consultarAlaApi() {

  let urlConsulta = "https://opensheet.elk.sh/13C3PithGPmHtzHvZcIL_w4-n0CgFkZ_zgRyhUoc-g40/Hoja1";

  let mensajeResultado = document.getElementById("mensajeResultado");

  mensajeResultado.innerHTML = "Cargando...";

  fetch(urlConsulta)
    .then(response => response.json())
    .then(datos => {
      console.log("Datos obtenidos:", datos);

      mensajeResultado.innerHTML = "Datos cargados correctamente ✔";

      // Si quieres ver los datos en pantalla luego podemos agregarlo.
    })
    .catch(error => {
      mensajeResultado.innerHTML = "Error al cargar los datos 😢";
      console.error("Error:", error);
    });
}
