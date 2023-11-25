const sumar = (n1, n2) => n1 + n2;

const parsear = (id) => parseInt(document.getElementById(id).value);

const sumarCompleto = () => {
    var resultado = parsear('idNumero1') + parsear('idNumero2');
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
}

const restarCompleto = () => {
    var resultado = parsear('idNumero1') - parsear('idNumero2');
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
}

const multiplicarCompleto = () => {
    var resultado = parsear('idNumero1') * parsear('idNumero2');
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
}

const dividirCompleto = () => {

    if (parsear('idNumero2') != 0) {
        var resultado = parsear('idNumero1') / parsear('idNumero2');
    }
    else {
        var resultado = "Syntax Error";
    }

    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
}

const cambiarImagen = () => {
    document.getElementById('idImagen').src = 'https://qph.cf2.quoracdn.net/main-qimg-865eec849da47957c0ce5336e6dc9851';
}

function conceptosJS() {
    let var1 = 10;
    let var1txt = 'Texto 1'
    console.log(var1);
    console.log(var1txt);

    /*var ya esta quedando en desuso*/
    var var2 = 10;
    var var2txt = 'Texto 2'
    console.log(var2);
    console.log(var2txt);

    const const1 = 10;
    const const2 = 'Texto 3'
    console.log(const1);
    console.log(const2);

    //Declaración de arreglos
    const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    console.log(diasSemana)
    console.log(diasSemana[0])
    console.log(diasSemana[4])
    console.log(diasSemana[5])
    diasSemana[5] = "Sábado"
    console.log(diasSemana[5])
    //Agrega al final del arreglo
    diasSemana.push("Domingo")
    console.log(diasSemana)
    //Agrega al principio del arreglo
    diasSemana.unshift("Feriado")
    console.log(diasSemana)

    const edades = [1, 2, 3, 4, 5]
    console.log(edades)


    const edades2 = [6, 7, 8]
    const edadesFinales = edades.concat(edades2)
    console.log(edadesFinales)
    //Declaro el tipo de dato
    for (const dia of diasSemana) {
        console.log(dia)
        if (dia === "Martes") { //También podemos poner ==
            console.log("martes dos por uno")
        }
    }

    //Declaración de objetos
    const estudiante = {
        //Declaramos en formato de json
        nombre: "Reymon",
        apellido: "Hidalgo",
        edad: "24",
        genero: "M",
        ciudad: "Quito"
    }
    console.log(estudiante)
    //No aplicamos encapsulamiento; accedemos directamente al atributo

    console.log(estudiante.apellido)
    estudiante.nombre = "Reymon :P"
    console.log(estudiante.nombre)

    const persona = {
        nombre: "Alexander",
        apellido: "Hidalgo",
        edad: 24,
        direccion: {
            callePrincipal: "Maranon",
            calleSecundaria: "Chimborazo",
            numeracion: "Oe6-130",
            barrio: "San Diego"
        }
    }
    console.log(persona)
    console.log(persona.direccion)
    console.log(persona.direccion.callePrincipal)

    //Ejemplo: Construir un arreglo de 4 objetos pacientes que contenga tres atributos}

    const pac1 = {
        nombre: "Lucho",
        apellido: "Gggg",
        edad: "15"
    }
    const pac2 = {
        nombre: "Pepe",
        apellido: "AAA",
        edad: "18"
    }
    const pac3 = {
        nombre: "José",
        apellido: "ABB",
        edad: "17"
    }

    const pac4 = {
        nombre: "Rey",
        apellido: "HB",
        edad: "24"
    }

    const pacientes = [pac1, pac2, pac3, pac4]
    console.log(pacientes)
    console.table(pacientes)

    //Práctica para ahorrar memoria
    const pacientes2 = [{ nombre: "Reymon", apellido: "Hidalgo" }, { nombre: "Reymon2", apellido: "Hidalgo2" }]
    console.table(pacientes2)
    //Accedemos al atributo de un objeto del array
    console.log(pacientes2[0].nombre)

    console.log(pacientes.pop())
    console.table(pacientes)


    //Desestructuración de arreglos -> Vamos a divirlo en partes
    const diasSemana2 = ["lunes", "martes", "miércoles", "jueves", "viernes"]
    const [a, b, c, d] = diasSemana2

    console.log(a)
    console.log(d)

    //Para optimizar, unimos las líneas 158 y 157
    const [a2, b2, c2, d2]  = ["lunes", "martes", "miércoles", "jueves", "viernes"]


    //Desestructuración de objetos-> Lo hacemos por el atributo
    const vehiculo ={
        marca:"Lamborghini", modelo:"Aventador", anio:"2023"
    }
    const {marca, modelo, anio}=vehiculo

    console.log(marca)

    //Ejemplo: En un sola línea declarar un objeto que tenga otro objeto y desestructurarlos

    const {tipo1, fun, adj, obj:{ tipo, funcion, adjetivo}} = {tipo1:"casa", fun:"alojamiento", obj:{adj:"grande", tipo:"perro", funcion:"guardian", adjetivo:"pequeño" }}
    console.log(fun)
    console.log(adjetivo)

}


