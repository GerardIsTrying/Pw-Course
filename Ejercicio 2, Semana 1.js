//Exercise Day 2, Week 1:"Condicionales (If/Else)"
// Edad de la persona
const edadPersona = 10.999999999999999;
// Rango de edades
    if (edadPersona < 0) {
	console.error("La edad no puede ser menor a 0 años.");
    } 
    else if (edadPersona < 3) {
	console.log("Bebé de " + edadPersona + " años");
    } 
    else if (edadPersona < 11) {
	console.log("Niño de " + edadPersona + " años");
    } 
    else if (edadPersona < 18) {
	console.log("Adolescente de " + edadPersona + " años");
    } 
    else if (edadPersona  < 60) {
	console.log("Adulto de " + edadPersona + " años");
    } 
    else {
	console.log("Anciano de " + edadPersona + " años");
    }
 