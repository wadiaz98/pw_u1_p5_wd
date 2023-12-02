let numX = [];
let operador = "";
let numY = [];

const obtenerCantidad = (tmp) =>{ 
    if(operador === "" ){
        if( Number.isInteger(tmp) ) { 
            numX.push(tmp);
            document.getElementById('idResultado').innerText = numX.join("");
        }
        else if( typeof tmp === "string") { 
            operador = tmp 
            document.getElementById('idResultado').innerText += tmp;
        }
    }else{
        if(tmp==='R' || document.getElementById('idResultado').textContent.includes("=") ){
            resetearVariables();
        }else{
            if( Number.isInteger(tmp)){ 
                numY.push(tmp)
                document.getElementById('idResultado').innerText += tmp;
            }
            else if(tmp === '='){
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
                document.getElementById('idResultado').innerText += " = "+resultado;
            }
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


