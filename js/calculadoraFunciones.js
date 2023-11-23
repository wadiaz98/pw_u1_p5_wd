function sumarNumerosCompleto(){
    var n1 = parseInt(document.getElementById('idNumero1').value);
    var n2 = parseInt(document.getElementById('idNumero2').value)
    console.log('Function sumarNumeros' + n1)
    console.log('Function sumarNumeros' + n2)
    var resultado = n1 + n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
}

function restarNumeros(){
    var n1 = parseInt(document.getElementById('idNumero1').value);
    var n2 = parseInt(document.getElementById('idNumero2').value)
    console.log('Function sumarNumeros' + n1)
    console.log('Function sumarNumeros' + n2)
    var resultado = n1 - n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
}

function multiplicarNumeros(){
    var n1 = parseInt(document.getElementById('idNumero1').value);
    var n2 = parseInt(document.getElementById('idNumero2').value)
    console.log('Function sumarNumeros' + n1)
    console.log('Function sumarNumeros' + n2)
    var resultado = n1 * n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
}

function dividirNumeros(){
    var n1 = parseInt(document.getElementById('idNumero1').value);
    var n2 = parseInt(document.getElementById('idNumero2').value)
    console.log('Function sumarNumeros' + n1)
    console.log('Function sumarNumeros' + n2)
    if( n2!=0){
        var resultado = n1 / n2;
    }
    else{
        var resultado = "Syntax Error";
    }
    
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
}

function cambiarImagen(){
    document.getElementById('idImagen').src='https://media1.tenor.com/images/0e1e39018a80b4900c6dd149ca3ae45c/tenor.gif?itemid=16466568';
}