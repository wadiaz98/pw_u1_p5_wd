const sumar =(n1, n2) => n1 +n2;

const parsear = (id) => parseInt(document.getElementById(id).value);

const sumarCompleto = () => {
    var resultado = parsear('idNumero1') + parsear('idNumero2');
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
}

const restarCompleto = () =>{
    var resultado = parsear('idNumero1') - parsear('idNumero2');
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
}

const multiplicarCompleto = () =>{
    var resultado = parsear('idNumero1') * parsear('idNumero2');
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
}

const dividirCompleto = () =>{
    
    if( parsear('idNumero2')!=0){
        var resultado = parsear('idNumero1') / parsear('idNumero2');
    }
    else{
        var resultado = "Syntax Error";
    }
    
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
}

const cambiarImagen = () =>{
    document.getElementById('idImagen').src='https://media1.tenor.com/images/0e1e39018a80b4900c6dd149ca3ae45c/tenor.gif?itemid=16466568';
}

function conceptosJS(){
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
}