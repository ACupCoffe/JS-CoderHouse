let precio = 0;

const evento = {
  banda: ["Soda Estereo", "Rata Blanca", "Los Abuelos de la Nada"],
  horario: ["Mañana", "Tarde", "Noche"],
  ubicacion: ["Platea", "Palco", "Popular"],
  precio: [1500, 1200, 900],
}; // DATOS

function validation(verif, max) {
  while (isNaN(verif) || verif > max || verif < 1) {
    verif = parseInt(prompt("Por favor ingrese un valor válido:"));
  }
  return verif;
} // Verificación de prompt

let concierto = parseInt(
  prompt(
    "A qué concierto quiere ir ? \n 1- Soda Estereo 2- Rata Blanca 3- Los Abuelos de la Nada"
  )
);
concierto = evento.banda[validation(concierto, evento.banda.length) - 1];

let horario = parseInt(
  prompt("Seleccione el horario: \n 1- Mañana 2- Tarde 3- Noche")
);
horario = evento.horario[validation(horario, evento.horario.length) - 1];

let ubicacion = parseInt(
  prompt(
    "Indique qué ubicación quiere: \n 1- Platea: 1200 2- Palcos 1500 3- Popular 900"
  )
);
ubicacion =
  evento.ubicacion[validation(ubicacion, evento.ubicacion.length) - 1];
precio = evento.precio[validation(ubicacion, evento.precio.length) - 1];

class Ticket {
  constructor(banda, hora, asiento, valor) {
    this.banda = banda;
    this.hora = hora;
    this.asiento = asiento;
    this.valor = valor;
  }
}

let auto_ticket = new Ticket(concierto, horario, ubicacion, precio);
console.log(auto_ticket); // TICKET PRINCIPAL

// Otros eventos
function otros_eventos(evento_asistido) {
  let copy_evento = { ...evento };
  banda_eliminar = concierto;
  //console.log("Elimnar la banda ", banda_eliminar);

  copy_evento.banda.splice(evento_asistido, 1);
  copy_evento.horario = horario;
  copy_evento.ubicacion = ubicacion;
  copy_evento.precio = precio;

  return copy_evento;
}

// Mostrar otras bandas con el mismo horario y asiento
console.log("Otras bandas en el mismo horario y asiento:");
let sugerencia = otros_eventos();
//console.log(sugerencia);

for (let i = 0; i != sugerencia.banda.length; i++) {
  console.log(
    sugerencia.banda[i],
    "\n",
    sugerencia.horario,
    "\n",
    sugerencia.ubicacion,
    "\n",
    sugerencia.precio
  );
}

//  AGREGAR AL HTML - DOM

const titulo_h3 = document.createElement("h3");
titulo_h3.innerText = "Otras bandas en el mismo horario y asiento:";
document
  .getElementById("sugerencia")
  .insertAdjacentElement("beforebegin", titulo_h3);

// AUTOMATICO  BOLETO-----
const boleto_automatico = document.getElementById("ticket_auto"); // boleto auto
const contenido_auto = document.createElement("h1"); // titulo
contenido_auto.innerText = "Banda: " + auto_ticket.banda;
const desc_auto = document.createElement("p");
desc_auto.innerText =
  "Horario: " +
  auto_ticket.hora +
  " \n Ubicacion: " +
  auto_ticket.asiento +
  "\n Precio: " +
  auto_ticket.valor;

boleto_automatico.appendChild(contenido_auto);
boleto_automatico.appendChild(desc_auto);

// SUGERENCIAS -----

const sugerencia_boleto = document.getElementById("sugerencia");
for (let i = 0; i != sugerencia.banda.length; i++) {
  const card_sugerencia = document.createElement("div"); // CUERPO DE SUGERENCIA
  sugerencia_boleto.appendChild(card_sugerencia);
  card_sugerencia.classList.add("tarjeta_sugerencia");
  const sugerencia_titulo = document.createElement("h1"); // TITULO SUGERENCIA
  sugerencia_titulo.innerText = sugerencia.banda[i];
  card_sugerencia.appendChild(sugerencia_titulo);
  const sugerencia_desc = document.createElement("p");
  sugerencia_desc.innerText =
    "Horaio: " +
    sugerencia.horario +
    "\n Ubicacion: " +
    sugerencia.ubicacion +
    "\n Precio: " +
    sugerencia.precio;
  card_sugerencia.appendChild(sugerencia_desc);
}
