// Obtén los elementos de los botones y el campo de respuesta
const btnSuma = document.getElementById('idSuma');
const btnResta = document.getElementById('idResta');
const btnMultiplicacion = document.getElementById('idMultiplicacion');
const btnDivision = document.getElementById('idDivision');
const btnResultado = document.getElementById('idRespuestaR');
const txtResultado = document.getElementById('idRespuesta');

// Asigna la función de suma al botón de suma
btnSuma.addEventListener('click', function() {
  // Obtiene los valores actuales del campo de respuesta y del botón presionado
  const valor = parseFloat(txtResultado.value);
  const operator = this.innerHTML;
  
  // Realiza la operación y actualiza el campo de respuesta
  txtResultado.value = valor + operator;
});

// Asigna la función de resta al botón de resta
btnSubtract.addEventListener('click', function() {
  // Obtiene los valores actuales del campo de respuesta y del botón presionado
  const currentValue = parseFloat(resultField.value);
  const operator = this.innerHTML;
  
  // Realiza la operación y actualiza el campo de respuesta
  resultField.value = currentValue + operator;
});

// Asigna la función de multiplicación al botón de multiplicación
btnMultiply.addEventListener('click', function() {
  // Obtiene los valores actuales del campo de respuesta y del botón presionado
  const currentValue = parseFloat(resultField.value);
  const operator = this.innerHTML;
  
  // Realiza la operación y actualiza el campo de respuesta
  resultField.value = currentValue + operator;
});

// Asigna la función de división al botón de división
btnDivide.addEventListener('click', function() {
  // Obtiene los valores actuales del campo de respuesta y del botón presionado
  const currentValue = parseFloat(resultField.value);
  const operator = this.innerHTML;
  
  // Realiza la operación y actualiza el campo de respuesta
  resultField.value = currentValue + operator;
});

// Asigna la función de igual al botón de igual
btnEquals.addEventListener('click', function() {
  // Evalúa la expresión matemática en el campo de respuesta usando la función eval()
  const expression = resultField.value;
  const answer = eval(expression);
  
  // Actualiza el campo de respuesta con el resultado
  resultField.value = answer;
});
