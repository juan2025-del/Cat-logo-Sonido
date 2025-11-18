const urlConsulta = "https://opensheet.elk.sh/13C3PithGPmHtzHvZcIL_w4-n0CgFkZ_zgRyhUoc-g40/Hoja1";

let mensajeResultado = document.getElementById("mensajeResultado");
let contenedor = document.getElementById("contenedorProductos");

// ===== CARGAR DATOS =====
fetch(urlConsulta)
  .then(res => res.json())
  .then(datos => {
    mensajeResultado.innerHTML = "";
    mostrarProductos(datos);
  })
  .catch(error => {
    mensajeResultado.innerHTML = "Error al cargar los datos 😢";
    console.error("ERROR:", error);
  });

// ===== DIBUJAR PRODUCTOS =====
function mostrarProductos(lista) {
  lista.forEach(prod => {
    let tarjeta = document.createElement("div");
    tarjeta.className = "card";

    tarjeta.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <h2>${prod.nombre}</h2>
      <h4>${prod.marca} - ${prod.categoria}</h4>
      <p class="descripcion">${prod.descripcion}</p>
      <p class="precio">S/ ${prod.precio}</p>
    `;

    contenedor.appendChild(tarjeta);
  });
}
