let numX = [];
let operador = "";
let numY = [];

const obtenerCantidad = (tmp) =>{ 
    console.log(tmp)
    if(operador === "" ){
        if( Number.isInteger(tmp) ) { numX.push(tmp)}
        else if( typeof tmp === "string") { operador = tmp }
    }else{
        if( Number.isInteger(tmp)){ numY.push(tmp)}
        
        let x = parseInt( numX.join("") );
        let y = parseInt(numY.join(""))
        let resultado=0;
        switch (operador){
            case "+": 
                resultado = x+y;
            break;
            case "-": 
                resultado = x-y;
            break;
            case "*": 
                resultado = x*y;
            break;
            case "/": 
                resultado = x/y;
            break;
        }
        document.getElementById('idResultado').innerText = resultado;
        
        if(tmp==='R'){
            console.log("entró");
            resetearVariables();
        }
    }
}

const resetearVariables = () => {
    numX= [];
    numY= [];
    operador= "";
    resultado= 0;
    x= 0;
    y= 0;
    document.getElementById('idResultado').innerText = "";
}