alert("Hola, soy el robot del zodiaco")

alert("A que adivino de que signo eres")

let nombre = prompt("Ingresa tu nombre") .toUpperCase();

while(nombre === ""){
    
    alert("No es un nombre compatible")
    nombre = prompt("Ingresa tu nombre") .toUpperCase();

}

const anioActual = 2022;

let anioNacimiento = parseInt(prompt(nombre + " en qué año naciste?"));
while (anioNacimiento !=""){

    if (anioNacimiento > 2022 || anioNacimiento < 0){
        alert("Año invalido");
    }else if (anioNacimiento <= 2022 && anioNacimiento > 0){
        console.log(nombre + " nació en el " + anioNacimiento);
        break;
    }else{
        alert("No ingresaste ningun valor");
    }
    anioNacimiento = parseInt(prompt("¿En qué año naciste?"));
}

const resta = (a, b) => {return a - b}

let restaNacimiento = (anioActual - anioNacimiento);

alert("Perfecto, entonces tu edad es de " + restaNacimiento);

console.log(`Tiene al día de hoy ${restaNacimiento} años`);

let mesNacimiento = prompt (`¿En qué mes naciste ${nombre}?`) .toUpperCase();

while (mesNacimiento !== "ENERO" || mesNacimiento !== "FEBRERO" || mesNacimiento !== "MARZO" || mesNacimiento !== "ABRIL"|| mesNacimiento !== "MAYO" || mesNacimiento !== "JUNIO" || mesNacimiento !== "JULIO" || mesNacimiento !== "AGOSTO" || mesNacimiento !== "SEPTIEMBRE" || mesNacimiento !== "OCTUBRE" || mesNacimiento !== "NOVIEMBRE" || mesNacimiento !== "DICIEMBRE"){

    if (mesNacimiento === "ENERO" || mesNacimiento === "FEBRERO" || mesNacimiento === "MARZO" || mesNacimiento === "ABRIL"|| mesNacimiento === "MAYO" || mesNacimiento === "JUNIO" || mesNacimiento === "JULIO" || mesNacimiento === "AGOSTO" || mesNacimiento === "SEPTIEMBRE" || mesNacimiento === "OCTUBRE" || mesNacimiento === "NOVIEMBRE" || mesNacimiento === "DICIEMBRE"){
        break;
    }else if (mesNacimiento === ""){
        alert("No ingresaste ningún valor");
    }else{
        alert("Mes invalido");
    }
    
    mesNacimiento = prompt (`¿En qué mes naciste ${nombre}?`) .toUpperCase();
}

let diaNacimiento = parseInt(prompt(`¿En qué día naciste ${nombre}?`));

while (diaNacimiento != ""){

    if (diaNacimiento < 0 || diaNacimiento > 31){
        alert("Día invalido");
    }else if (diaNacimiento > 0 || diaNacimiento < 31){
        alert(`Estupendo ${nombre} naciste el ${diaNacimiento} de ${mesNacimiento} de ${anioNacimiento}`);
        break;
    }else{
        alert("No ingresaste ningún valor");
    }

    diaNacimiento = parseInt(prompt(`¿En qué día naciste ${nombre}?`));
}

console.log(`${nombre} nació el ${diaNacimiento} de ${mesNacimiento} de ${anioNacimiento} `);

alert("Ahora se viene lo bueno ...")

alert(3)
alert(2)
alert(1)

if ((mesNacimiento === "MARZO" && diaNacimiento > 21 && diaNacimiento < 31) || (mesNacimiento === "ABRIL" && diaNacimiento > 0 && diaNacimiento < 19 )){
    alert("Tu signo es ARIES");
    console.log(`${nombre} es de ARIES`)
}else if((mesNacimiento === "ABRIL" && diaNacimiento > 20 && diaNacimiento < 31) || (mesNacimiento === "MAYO" && diaNacimiento > 0 && diaNacimiento < 21 )){
    alert("Tu signo es TAURO");
    console.log(`${nombre} es de TAURO`)
}else if((mesNacimiento === "MAYO" && diaNacimiento > 21 && diaNacimiento < 31) || (mesNacimiento === "JUNIO" && diaNacimiento > 0 && diaNacimiento < 20 )){
    alert("Tu signo es GÉMINIS");
    console.log(`${nombre} es de GÉMINIS`)
}else if((mesNacimiento === "JUNIO" && diaNacimiento > 21 && diaNacimiento < 31) || (mesNacimiento === "JULIO" && diaNacimiento > 0 && diaNacimiento < 22 )){
    alert("Tu signo es CÁNCER");
    console.log(`${nombre} es de CÁNCER`)
}else if((mesNacimiento === "JULIO" && diaNacimiento > 23 && diaNacimiento < 31) || (mesNacimiento === "AGOSTO" && diaNacimiento > 0 && diaNacimiento < 22 )){
    alert("Tu signo es LEO");
    console.log(`${nombre} es de LEO`)
}else if((mesNacimiento === "AGOSTO" && diaNacimiento > 23 && diaNacimiento < 31) || (mesNacimiento === "SEPTIEMBRE" && diaNacimiento > 0 && diaNacimiento < 22 )){
    alert("Tu signo es VIRGO");
    console.log(`${nombre} es de VIRGO`)
}else if((mesNacimiento === "SEPTIEMBRE" && diaNacimiento > 23 && diaNacimiento < 31) || (mesNacimiento === "OCTUBRE" && diaNacimiento > 0 && diaNacimiento < 22 )){
    alert("Tu signo es LIBRA");
    console.log(`${nombre} es de LIBRA`)
}else if((mesNacimiento === "OCTUBRE" && diaNacimiento > 23 && diaNacimiento < 31) || (mesNacimiento === "NOVIEMBRE" && diaNacimiento > 0 && diaNacimiento < 21 )){
    alert("Tu signo es ESCORPIO");
    console.log(`${nombre} es de ESCORPIO`)
}else if((mesNacimiento === "NOVIEMBRE" && diaNacimiento > 22 && diaNacimiento < 31) || (mesNacimiento === "DICIEMBRE" && diaNacimiento > 0 && diaNacimiento < 21 )){
    alert("Tu signo es SAGITARIO");
    console.log(`${nombre} es de SAGITARIO`)
}else if((mesNacimiento === "DICIEMBRE" && diaNacimiento > 22 && diaNacimiento < 31) || (mesNacimiento === "ENERO" && diaNacimiento > 0 && diaNacimiento < 19 )){
    alert("Tu signo es CAPRICORNIO");
    console.log(`${nombre} es de CAPRICORNIO`)
}else if((mesNacimiento === "ENERO" && diaNacimiento > 20 && diaNacimiento < 31) || (mesNacimiento === "FEBRERO" && diaNacimiento > 0 && diaNacimiento < 18 )){
    alert("Tu signo es ACUARIO");
    console.log(`${nombre} es de ACUARIO`)
}else if((mesNacimiento === "FEBRERO" && diaNacimiento > 19 && diaNacimiento < 31) || (mesNacimiento === "MARZO" && diaNacimiento > 0 && diaNacimiento < 20 )){
    alert("Tu signo es PISCIS");
    console.log(`${nombre} es de PISCIS`)
}else{
    alert("Detectamos un error en tus datos, vuelve a cargar la página.");
}

let experiencia = prompt("¿Tu experiencia fue satisfactoria? \n \nSI \n \nNO").toUpperCase();

do{

    if (experiencia === "NO"){
        alert("Lamentamos tu experiencia, trabajaremos por mejorar");
        experiencia = "NO SATISFACTORIA";
        break;
    } else if (experiencia === "SI"){
        alert("¡Nos alegramos mucho!");
        experiencia = "SATISFACTORIA";
        break;
    } else{
        alert("Opción invalida");
    }
    experiencia = prompt("Una última pregunta ¿Tu experiencia fue satisfactoria? \n \nSI \n \nNO").toUpperCase();

}while(experiencia != "NO" || experiencia != "SI")

console.log("La experiencia de " + nombre + " fue " + experiencia)