/* console.log("Hola Mundo!");

const X = prompt("Ingresar N1:");
const Y = prompt("Ingresar N2:");

const varX = parseInt(X);
const varY = parseInt(Y);

function sumar(val1, val2) {
  const total = val1 + val2;
  return total;
}

const restar = function (val1, val2) {
  return val1 + val2;
}; // Funcion anonima

const multiplicar = val1 => {
  return val1 * 2;
}; // Funcion flecha --- para codifos de una sola linea o muy breves

console.log(sumar(varX, varY));
console.log(restar(varX, varY));
console.log(multiplicar(varX, varY));

if (X > 10) {
  console.log("Valor ingresado mayor a 10");
} else if (X >= 0) {
  console.log("Valor menor a 10 y positivo");
} else {
  console.log("Valor negativo");
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}
 */

let precio = 0;

const evento = {
  banda: ["Soda Estereo", "Rata Blanca", "Los Abuelos de la Nada"],
  horario: ["Manana", "Tarde", "Noche"],
  ubicacion: ["Platea", "Palco", "Popular"],
  precio: [1500, 1200, 900],
}; // DATOS

function validation(verif) {
  while (isNaN(verif) || verif > 3 || verif < 0) {
    verif = parseInt(prompt("Por favor ingrese un valor asignado:"));
  }
  return verif;
} //Verificacion de prompt

alert("A que concierte quiere ir ?");

let concierto = parseInt(
  prompt("1- Soda Estereo 2-Rata Blanca 3-Los Abuelos de la Nada")
);
concierto = evento.banda[validation(concierto) - 1];

let horario = parseInt(
  prompt("Seleccione el horario: \n 1-Manana 2-Tarde 3-Noche")
);
horario = evento.horario[validation(horario) - 1];

let ubicacion = parseInt(
  prompt(
    "Indique que ubicacion quiere: \n 1-Platea: 1200 2-Palcos 1500 3-Popular 900"
  )
);
ubicacion = evento.ubicacion[validation(ubicacion) - 1];
precio = evento.precio[validation(ubicacion) - 1];

class ticket {
  constructor(banda, hora, asiento, valor) {
    this.banda = banda;
    this.hora = hora;
    this.asiento = asiento;
    this.valor = valor;
  }
}

let auto_ticket = new ticket(concierto, horario, ubicacion, precio);

console.log(
  "Test -Horario " +
    horario +
    " -COncierto " +
    concierto +
    " -Ubicacion " +
    ubicacion +
    " -Precio " +
    precio
);

console.log(evento);

console.log(auto_ticket);
console.log("\n EN caso de querer usar clase llamar por - ticket -");
