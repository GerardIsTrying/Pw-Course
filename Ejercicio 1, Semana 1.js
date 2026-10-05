//Exercise Day 1, Week 1:"Variables e Impresión"
//Definir Variables
let equipos = [
  { nombreEquipo: "America", partidosGanados: 9 },
  { nombreEquipo: "Santos Laguna", partidosGanados: 1 },
  { nombreEquipo: "Pachuca", partidosGanados: 3 },
  { nombreEquipo: "Toluca", partidosGanados: 5 },
  { nombreEquipo: "Chivas Del Guadalajara", partidosGanados: 10 }
];
//Agregar la fecha a tabla
let fechaHoy = new Date().toLocaleDateString('es-MX',);
//Organizar la tabla
equipos.sort((a, b) => b.partidosGanados - a.partidosGanados);
// Imprimir la tabla
console.log(`--- Tabla de posiciones al dia (${fechaHoy}) ---`);
equipos.forEach((equipo, indice) => {
  console.log(`${indice + 1}. ${equipo.nombreEquipo}: ${equipo.partidosGanados} Partidos Ganados`);
});