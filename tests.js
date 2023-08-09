import { gpu, cpu } from "./data.js";

const productos = { ...gpu, ...cpu };

let search = document.getElementById("search");
search.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    const termino_buscado = search.value;

    localStorage.setItem("termino_buscado", termino_buscado);
    console.log(termino_buscado);
    window.location.href = "./pag2.html";
  }
});

const producto_buscado = localStorage.getItem("termino_buscado");

function realizarBusqueda(termino) {
  let resultadoBusqueda = [];

  Object.entries(productos).forEach(([clave, otro]) => {
    if (
      otro.nombre.toLowerCase().includes(termino) ||
      otro.descripcion.toLowerCase().includes(termino)
    ) {
      resultadoBusqueda.push(productos[clave]);
    }
  });
  return resultadoBusqueda;
}

let mostrar = realizarBusqueda(producto_buscado);

const testeo = document.getElementById("here");
testeo.classList.add("fondo");

if (mostrar.length === 0) {
  const error_msg = document.createElement("p");
  error_msg.innerText = "404 NOT FOUND";
  testeo.appendChild(error_msg);
} else {
  for (let i = 0; i < mostrar.length; i++) {
    const show_nombre = document.createElement("p");
    show_nombre.innerText = mostrar[i].nombre;
    testeo.appendChild(show_nombre);
    const show_precio = document.createElement("p");
    show_precio.innerText = mostrar[i].precio;
    testeo.appendChild(show_precio);
  }
}

console.log(mostrar);
