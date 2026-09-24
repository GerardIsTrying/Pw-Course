// Exercise Day 3, Week 1: "Ciclos"
// Años con copa del mundo y olimpiadas de este siglo
let startOfYears = 2000;
let listOfYearsWorldCups = [];
let listOfYearsOlympics = [];

//Definicion del rango del ciclo 
while (startOfYears < 2100) {
    
    // Condicion para olimpiadas
    if (startOfYears % 4 === 0) {
        listOfYearsOlympics.push(startOfYears);
    } 
    // Condición para mundiales
    else if (startOfYears % 4 === 2) {
        listOfYearsWorldCups.push(startOfYears);
    }

    startOfYears++; // 3. Avanzamos de uno en uno para evaluar cada año
}
// Imprimir los años con copa del mundo de este siglo e olimpiadas
console.log("Los años con copa del mundo y olimpiadas de este siglo son: ");

// Ciclo para imprimir los años con copa del mundo y olimpiadas
let iteracion = 0;
while (iteracion < listOfYearsOlympics.length) {
    //Imprimir Olimpiadas y copas del mundo en el orden de años
    console.log("Habra una olimpiada en el año: " + listOfYearsOlympics[iteracion]);
    console.log("Habra una copa del mundo en el año: " + listOfYearsWorldCups[iteracion]);
    iteracion++;
}