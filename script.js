
let urlAPI = "https://opensheet.elk.sh/13C3PithGPmHtzHvZcIL_w4-n0CgFkZ_zgRyhUoc-g40/Hoja1";

// Contenedor donde vamos a pintar los productos
let contenedor = document.getElementById("contenedorProductos");

// Consumimos la API
fetch(urlAPI)
  .then(res => res.json())
  .then(data => {

    console.log("Datos obtenidos desde Google Sheets:", data); // Para que tu profe vea que funciona

    // Recorremos cada producto
    data.forEach(producto => {
      
      // Creamos una tarjeta por cada producto
      contenedor.innerHTML += `
        <div class="card">
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <h2>${producto.nombre}</h2>
          <h4>${producto.marca}</h4>

          <p><strong>Categoría:</strong> ${producto.categoria}</p>

          <p class="descripcion">${producto.descripcion}</p>

          <p class="precio">S/ ${producto.precio}</p>
        </div>
      `;
    });

  })
  .catch(error => {
    console.error("Error al cargar la API:", error);
    contenedor.innerHTML = "<p>Error al cargar los datos.</p>";
  });
